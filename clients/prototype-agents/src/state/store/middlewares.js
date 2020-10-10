import { getDefaultMiddleware } from '@reduxjs/toolkit'

const middlewares = [...getDefaultMiddleware()]

if (process.env.NODE_ENV === 'development') {
  const { createLogger } = require(`redux-logger`)

  const logger = createLogger({
    collapsed: () => true
  })

  middlewares.push(logger)
}

export default middlewares
