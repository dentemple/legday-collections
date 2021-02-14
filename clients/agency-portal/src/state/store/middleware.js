import { getDefaultMiddleware } from '@reduxjs/toolkit'

export let middleware = [...getDefaultMiddleware()]

if (process.env.NODE_ENV === 'development') {
  const createLogger = require('redux-logger').createLogger

  const logger = createLogger({
    collapsed: () => true,
    colors: {
      prevState: () => '#9E9E9E',
      action: () => '#03A9F4',
      nextState: () => '#4CAF50',
      error: () => '#F20404',
      title: ({ type }: any) => {
        if (type.match(/app\/route/g)) return '#757575'
        if (type.match(/pending/g)) return '#4dd0e1'
        if (type.match(/fulfilled/g)) return '#2196f3'
        if (type.match(/rejected/g)) return '#f44336'
        return 'inherit'
      }
    }
  })

  middleware = [...middleware, logger]
}

export default middleware
