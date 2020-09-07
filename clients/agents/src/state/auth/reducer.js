import { createReducer } from '@reduxjs/toolkit'

import actions from './actions'
import initialState from './initialState'

const reducer = createReducer(initialState, {
  [actions.fetchLogin.pending]: (state, action) => {
    return {
      ...initialState
    }
  },

  [actions.fetchLogin.fulfilled]: (state, action) => {
    state.isAuth = true
    state.username = action.payload.username
  }
})

export default reducer
