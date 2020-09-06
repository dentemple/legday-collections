import { configureStore as configure } from '@reduxjs/toolkit'

import enhancers from './enhancers'
import middlewares from './middlewares'
import reducers from './reducers'

export function configureStore() {
  const store = configure({
    enhancers,
    middleware: middlewares,
    reducer: reducers
  })

  // if (process.env.NODE_ENV !== 'production' && module.hot) {
  //   module.hot.accept('./reducers', () => store.replaceReducer(reducers))
  // }

  return store
}

export default configureStore
