import { createReducer } from '@reduxjs/toolkit'

import actions from './actions'
import initialState from './initialState'

const reducer = createReducer(initialState, {
  [actions.fetchUserLogin.fulfilled]: function (state, action) {
    return { ...action.payload, isAuth: true }
  }
})

export default reducer
