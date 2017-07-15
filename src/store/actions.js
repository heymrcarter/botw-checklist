export default {
  toggleFound ({ commit }, findable) {
    commit('TOGGLE_FOUND', {findable: findable.type, index: findable.index})
  }
}
