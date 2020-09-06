import React from 'react'
import PropTypes from 'prop-types'
import { IntlProvider } from 'react-intl'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

/* state */
import configureStore from 'state/store'

/* utils */
import config, { locale, messages } from 'utils/intl'
import theme from 'theme'

/**
 * Providers component
 */
export default function Providers({ children }) {
  return (
    <Provider store={configureStore()}>
      <IntlProvider messages={messages[locale]} {...config}>
        <ThemeProvider theme={theme}>
          <Router>{children}</Router>
        </ThemeProvider>
      </IntlProvider>
    </Provider>
  )
}

/* props */
export const ProvidersProps = {
  children: PropTypes.node.isRequired
}

Providers.propTypes = ProvidersProps
