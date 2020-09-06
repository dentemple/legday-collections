import React from 'react'
import { Switch, Route } from 'react-router-dom'

/* components */
import * as Pages from 'pages'
import ProtectedRoute from './ProtectedRoute'

/* utils */
import { routes } from 'utils/constants'

/* constants */
export const unauthRoutes = [
  {
    key: 'login',
    path: [routes.home, routes.login],
    component: Pages.Login
  }
]

export const authRoutes = [
  {
    key: 'dial',
    path: routes.dial,
    component: Pages.Keypad
  },
  {
    key: 'prototype',
    path: routes.prototype,
    component: Pages.Prototype
  },
  {
    key: 'home',
    path: [routes.home, routes.homeOnly],
    component: Pages.Home
  }
]

/**
 * Routes component
 */
export default function Routes({ isAuth = false }) {
  return (
    <Switch>
      {authRoutes.map((route) => (
        <ProtectedRoute exact isAuth={isAuth} key={route.path} {...route} />
      ))}
      {unauthRoutes.map((route) => (
        <Route {...route} />
      ))}
    </Switch>
  )
}
