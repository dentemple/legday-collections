import React from 'react'
import { Switch, Route } from 'react-router-dom'

import * as Pages from 'pages'

function Routes() {
  return (
    <Switch>
      <Route path="/keypad" component={Pages.Keypad} />
      <Route path="/prototype" component={Pages.Prototype} />
      <Route path={["/", "/home"]} component={Pages.Home} />
    </Switch>
  )
}

export default Routes