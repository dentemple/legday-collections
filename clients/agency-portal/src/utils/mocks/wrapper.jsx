/* routing */
import { BrowserRouter as Router } from 'react-router-dom'

/* state */
import { Provider as StateProvider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import middleware from 'state/store/middleware'

/* internationalization */
import { IntlProvider } from 'react-intl'
import { config } from 'i18n'

// styling
import { ThemeProvider } from 'styled-components'
import theme from 'App/design/theme'

const defaultDispatch = jest.fn()
const defaultState = {}
const defaultConfig = { dispatch: defaultDispatch, state: defaultState }

export default function wrapper(
  children,
  { dispatch = defaultDispatch, state = defaultState } = defaultConfig
) {
  const mockStore = configureMockStore(middleware)
  const store = mockStore(state)

  store.dispatch = dispatch

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
