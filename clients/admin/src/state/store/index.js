import { configureStore } from '@reduxjs/toolkit'

import middleware from './middleware'
import reducer from './reducer'

const store = configureStore({
  middleware,
  reducer
})

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept('./reducer', () => {
    const newRootReducer = require('./reducer').default
    store.replaceReducer(newRootReducer)
  })
}

export default store
