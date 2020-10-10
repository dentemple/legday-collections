import { Suspense, lazy } from 'react'
import { Switch, Route } from 'react-router-dom'

/* components */
import { Home } from 'pages'
import Loading from './Loading'

/* utils */
import { routes } from 'utils/constants'

/* constants */
export const unauthRoutes = [
  {
    component: lazy(() => import(/* webpackChunkName: "OnboardPage" */ 'pages/Onboard')),
    key: 'onboard',
    path: [routes.onboard]
  },
  {
    component: Home,
    key: 'home',
    path: [routes.home]
  }
]

/**
 * Routes component
 */
export default function Routes() {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        {unauthRoutes.map((route) => (
          <Route {...route} />
        ))}
      </Switch>
    </Suspense>
  )
}
