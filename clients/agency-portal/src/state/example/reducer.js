import { createSlice } from '@reduxjs/toolkit'

/* local ducks */
import actions from './actions'
import initialState from './initialState'

const reducers = {
  increment: actions.increment,
  decrement: actions.decrement
}

export const slice = createSlice({
  name: 'example',
  initialState,
  reducers
})

export default slice.reducer
