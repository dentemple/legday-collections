import { createReducer } from '@reduxjs/toolkit'

/* state */
import actions from './actions'
import initialState from './initialState'
import stateUtils from './utils'

/* additional state */
import { actions as authActions } from 'state/auth'

const reducer = createReducer(initialState, {
  [actions.fetchCurrentUser.pending]: (state) => {
    return {
      ...initialState,
      fetchStatus: 'pending'
    }
  },

  [actions.fetchCurrentUser.fulfilled]: (state, action) => {
    return {
      ...state,
      ...stateUtils.whitelistUserResponse(action.payload),
      fetchStatus: 'fulfilled'
    }
  },

  [actions.fetchCurrentUser.rejected]: (state, action) => {
    state.fetchStatus = 'rejected'
  },

  [authActions.fetchLogin.fulfilled]: (state, action) => {
    return {
      ...state,
      ...stateUtils.whitelistUserResponse(action.payload),
      fetchStatus: 'fulfilled'
    }
  }
})

export default reducer
