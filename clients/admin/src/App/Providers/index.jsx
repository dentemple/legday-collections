import PropTypes from 'prop-types'
import { HelmetProvider } from 'react-helmet-async'
import { IntlProvider } from 'react-intl'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

/* state */
import store from 'state/store'

/* styles */
import { theme } from 'App/theme'

/* utils */
import { config } from 'intl/main'

/**
 * Providers presentational component
 */
export default function Providers({ children }) {
  return (
    <Provider store={store}>
      <IntlProvider {...config}>
        <ThemeProvider theme={theme}>
          <HelmetProvider>
            <Router>{children}</Router>
          </HelmetProvider>
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
