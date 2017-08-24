import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import createPersistantState from 'vuex-persistedstate'
import actions from './actions'
import mutations from './mutations'

const memories = require('../data/memories')
const shrineQuests = require('../data/shrine-quests')
const mainQuests = require('../data/main-quests')
const sideQuests = require('../data/side-quests')
const creatures = require('../data/creatures')
const equipment = require('../data/equipment')
const materials = require('../data/materials')
const monsters = require('../data/monsters')
const treasure = require('../data/treasure')
const shrines = require('../data/shrines')

Vue.use(Vuex)

const store = new Store({
  plugins: [createPersistantState({ key: 'botw_checklist' })],
  state: {
    mainQuests,
    shrineQuests,
    sideQuests,
    shrines,
    memories,
    creatures,
    equipment,
    materials,
    monsters,
    treasure
  },
  actions,
  mutations,
  getters: {
    shrineQuests: state => state.shrineQuests,
    sideQuests: state => state.sideQuests,
    mainQuests: state => state.mainQuests,
    shrines: state => state.shrines,
    memories: state => state.memories,
    creatures: state => state.creatures,
    equipment: state => state.equipment,
    materials: state => state.materials,
    monsters: state => state.monsters,
    treasure: state => state.treasure
  }
})

export default store
