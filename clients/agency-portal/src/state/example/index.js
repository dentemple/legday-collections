import reducer, { slice } from './reducer'

export { default as initialState } from './initialState'
export { default as selectors } from './selectors'

export const actions = slice.actions

export default reducer
