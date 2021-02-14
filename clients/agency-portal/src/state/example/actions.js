export function increment(state) {
  state.count = state.count += 1
}

export function decrement(state) {
  state.count = state.count -= 1
}

const actions = {
  increment,
  decrement
}

export default actions
