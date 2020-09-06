import React from 'react'
import { Switch, Route } from 'react-router-dom'

import * as Pages from 'pages'

const routes = [
  {
    key: 'dial',
    path: '/dial',
    component: Pages.Keypad
  },
  {
    key: 'prototype',
    path: '/prototype',
    component: Pages.Prototype
  },
  {
    key: 'home',
    path: ['/', '/home'],
    component: Pages.Home
  }
]

function Routes() {
  return (
    <Switch>
      {routes.map((route) => (
        <Route {...route} />
      ))}
    </Switch>
  )
}

export default Routes
