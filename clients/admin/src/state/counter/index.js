import { createSlice } from '@reduxjs/toolkit'

import initialState from './initialState'
import selectors from './selectors'

export { selectors }

export const counter = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
  }
})

export const actions = {
  ...counter.actions,
  incrementAsync
}

export function incrementAsync(amount) {
  return function (dispatch) {
    setTimeout(() => {
      dispatch(actions.incrementByAmount(amount))
    }, 1000)
  }
}

export default counter.reducer
