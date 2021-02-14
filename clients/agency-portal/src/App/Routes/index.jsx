import { Redirect, Route, Switch } from 'react-router-dom'

/* components */
import { Example, Home, Page404 } from 'pages'

/* utils */
import { routes } from 'utils/constants'

export const unauthRoutes = [
  {
    key: 'home',
    path: routes.home,
    component: Home
  },
  {
    key: 'example',
    path: routes.example,
    component: Example
  },
  {
    key: '404',
    path: routes.page404,
    component: Page404
  }
]

/**
 * App-level component
 */
export function Routes({ isAuth = false }) {
  return (
    <Switch>
      {/* Unauthenticated Routes */}
      {unauthRoutes.map((route) => (
        <Route exact {...route} />
      ))}

      {/* Fallback route */}
      <Route path="/404" to={Page404} />
      <Redirect to="/404" />
    </Switch>
  )
}

export default Routes
