/* routing */
import { BrowserRouter as Router } from 'react-router-dom'

/* state */
import { Provider as StateProvider } from 'react-redux'
import store from 'state/store'

/* internationalization */
import { IntlProvider } from 'react-intl'
import { config } from 'i18n'

// styling
import { ThemeProvider } from 'styled-components'
import theme from 'App/design/theme'

/**
 * Top-level component
 */
export function Providers({ children }) {
  return (
    <StateProvider store={store}>
      <IntlProvider {...config}>
        <ThemeProvider theme={theme}>
          <Router>{children}</Router>
        </ThemeProvider>
      </IntlProvider>
    </StateProvider>
  )
}

export default Providers
