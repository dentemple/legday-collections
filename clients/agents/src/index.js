import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'

// components
import App from 'App'
import Providers from 'Providers'

// utils
import * as serviceWorker from './utils/serviceWorker'

function render(Component) {
  return ReactDOM.render(
    <StrictMode>
      <Providers>
        <App />
      </Providers>
    </StrictMode>,
    document.getElementById('root')
  )
}

render(App)

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default
    render(NextApp)
  })
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
