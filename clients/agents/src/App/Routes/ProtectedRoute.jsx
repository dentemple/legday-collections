import React from 'react'
import { Redirect, Route } from 'react-router-dom'

/* utils */
import { routes } from 'utils/constants'

/**
 * ProtectedRoute
 */
export default function ProtectedRoute({ component: Component, isAuth, ...rest }) {
  return Component ? <Route {...rest} render={renderProps} /> : null

  function renderProps(props) {
    return isAuth ? <Component {...props} /> : <Redirect to={{ pathname: routes.login }} />
  }
}
