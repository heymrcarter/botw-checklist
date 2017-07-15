export default {
  TOGGLE_FOUND (state, { findable, index }) {
    const currentState = state[findable][index].found
    state[findable][index].found = !currentState
  }
}
