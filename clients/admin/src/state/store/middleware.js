import { getDefaultMiddleware } from '@reduxjs/toolkit'
import { createLogger } from 'redux-logger'

const middlewares = [...getDefaultMiddleware()]

if (process.env.NODE_ENV === 'development') {
  const logger = createLogger({
    collapsed: () => true
  })

  middlewares.push(logger)
}

export default middlewares
