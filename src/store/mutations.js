export default {
  TOGGLE_COMPLETE (state, { type, index }) {
    const currentState = state[type][index].complete
    state[type][index].complete = !currentState
  }
}
