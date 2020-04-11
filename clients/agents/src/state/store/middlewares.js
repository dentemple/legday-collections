import { getDefaultMiddleware } from '@reduxjs/toolkit'

const middlewares = [...getDefaultMiddleware()]

if (process.env.NODE_ENV === 'development') {
  const { logger } = require(`redux-logger`)

  middlewares.push(logger)
}

export default middlewares
