import { createAction, createReducer } from '@reduxjs/toolkit'

// Selectors ---
export const selectCount = (state) => state.counter.example

// Actions & Constants ---
export const increment = createAction('counter/increment')
export const decrement = createAction('counter/decrement')

// Initial state ---
export const initialState = 0

// Reducer ---
const counter = createReducer(initialState, {
  [increment]: (state) => state + 1,
  [decrement]: (state) => state - 1
})

export default counter
