import React from 'react'
import PropTypes from 'prop-types'
import { IntlProvider } from 'react-intl'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import configureStore from 'state/store'
import config, { locale, messages } from './intl'
import theme from 'theme'

function Providers({ children }) {
  return (
    <Provider store={configureStore()}>
      <Router>
        <IntlProvider messages={messages[locale]} {...config}>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </IntlProvider>
      </Router>
    </Provider>
  )
}

Providers.propTypes = {
  children: PropTypes.node.isRequired
}

export default Providers
