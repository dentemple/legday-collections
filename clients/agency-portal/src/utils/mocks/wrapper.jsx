import React, { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider as StateProvider } from 'react-redux'
import configureMockStore from 'redux-mock-store'

import middleware from 'state/store/middleware'
import theme from 'App/theme'

const defaultDispatch = jest.fn()
const defaultState = {}
const defaultConfig = { dispatch: defaultDispatch, state: defaultState }

export default function wrapper(
  component,
  { dispatch = defaultDispatch, state = defaultState } = defaultConfig
) {
  const mockStore = configureMockStore(middleware)
  const store = mockStore(state)

  store.dispatch = dispatch

  return (
    <StateProvider store={store}>
      <ThemeProvider theme={theme}>
        <Router>{component}</Router>
      </ThemeProvider>
    </StateProvider>
  )
}
