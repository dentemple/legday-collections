import { createReducer } from '@reduxjs/toolkit'

import actions from './actions'
import initialState from './initialState'

const reducer = createReducer(initialState, {
  [actions.setIsAuthRoute]: (state, action) => {
    state.isAuthRoute = action.payload
  }
})

export default reducer
