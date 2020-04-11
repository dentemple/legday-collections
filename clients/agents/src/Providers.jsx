import React from 'react'
import PropTypes from 'prop-types'

import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import configureStore from 'state/store'
import { main } from 'components/templates/themes'

function Providers({ children }) {
  return (
    <Provider store={configureStore()}>
      <ThemeProvider theme={main}>
        {children}
      </ThemeProvider>
    </Provider>
  )
}

Providers.propTypes = {
  children: PropTypes.node.isRequired
}

export default Providers