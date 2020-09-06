import { createReducer } from '@reduxjs/toolkit'

import actions from './actions'
import initialState from './initialState'

export default createReducer(initialState, {
  [actions.fetchUserLogin.type]: function (state, action) {
    return { ...action.payload }
  }
})
