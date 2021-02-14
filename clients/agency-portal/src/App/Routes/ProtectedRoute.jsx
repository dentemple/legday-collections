import { Redirect, Route } from 'react-router-dom'

/* utils */
import { routes } from 'utils/constants'

/**
 * App-level component
 */
export function ProtectedRoute({ component: Component, isAuth, ...rest }) {
  return Component ? <Route {...rest} render={renderProps} /> : null

  function renderProps(props) {
    const allowRoute = <Component {...props} />
    const redirectRoute = (
      <Redirect
        to={{
          pathname: routes.home,
          state: { from: props.location }
        }}
      />
    )

    return isAuth ? allowRoute : redirectRoute
  }
}

export default ProtectedRoute
