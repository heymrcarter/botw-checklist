import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import createPersistantState from 'vuex-persistedstate'

Vue.use(Vuex)

const store = new Store({
  plugins: [createPersistantState({ key: 'botw_checklist' })],
  state: {
    shrineQuests: [
      { found: false, name: 'Into the Vortex', shrine: 'Ritaag Zumo Shrine', region: 'Akkala' },
      { found: false, name: `The Skull's Eye`, shrines: 'Zuna Kai Shrine', region: 'Akkala' },
      { found: false, name: 'The Spring of Power', shrine: 'Tutsuwa Nima Shrine', region: 'Akkala' },
      { found: false, name: 'Trial of the Labrynth', shrine: `Tu Ka'loh Shrine`, region: 'Akkala' },
      { found: false, name: 'The Stolen Heirloom', shrine: 'Lakna Rokee Shrine', region: 'Dueling Peaks' },
      { found: false, name: 'Watch out for the Flowers', shrines: 'Hila Rao Shrine', region: 'Dueling Peaks' },
      { found: false, name: `A Brother's Request`, shrine: 'Kayra Mah Shrine', region: 'Eldin' },
      { found: false, name: 'A Landscape of a Stable', shrine: 'Tah Muhl Shrine', region: 'Eldin' },
      { found: false, name: 'The Gut Check Challenge', shrine: 'Gorae Torr Shrine', region: 'Eldin' },
      { found: false, name: 'A Fragmented Monument', shrine: 'Kah Yah Shrine', region: 'Faron' },
      { found: false, name: 'A Song of Storms', shrine: 'Qukah Nata Shrine', region: 'Faron' },
      { found: false, name: 'Stranded on Eventide', shrine: 'Korgu Chideh Shrine', region: 'Faron' },
      { found: false, name: 'The Three Giant Brothers', shrine: 'Tawa Jinn Shrine', region: 'Faron' },
      { found: false, name: 'Cliffside Etchings', shrine: 'Keeha Yoog Shrine', region: 'Gerudo' },
      { found: false, name: 'Sign of the Shadow', shrine: 'Sasa Kai Shrine', region: 'Gerudo' },
      { found: false, name: 'Test of Will', shrine: 'Joloo Nah Shrine', region: 'Gerudo' },
      { found: false, name: 'Secret of the Snowy Peaks', shrine: 'Suma Sahma Shrine', region: 'Wasteland' },
      { found: false, name: 'The Eye of the Sandstorm', shrine: 'Dako Tah Shrine', region: 'Wasteland' },
      { found: false, name: 'The Desert Labyrinth', shrine: 'Dila Maag Shrine', region: 'Wasteland' },
      { found: false, name: 'The Perfect Drink', shrine: 'Misae Suma Shrine', region: 'Wasteland' },
      { found: false, name: 'The Seven Heroines', shrine: `Korsh O'hu Shrine`, region: 'Wasteland' },
      { found: false, name: 'The Silent Swordsman', shrine: 'Kema Zoos Shrine', region: 'Wasteland' },
      { found: false, name: 'The Undefeated Champ', shrine: 'Raqa Zunzo Shrine', region: 'Wasteland' },
      { found: false, name: 'Shrouded Shrine', shrine: 'Ketoh Wawai Shrine', region: 'Great Hyrule Forest' },
      { found: false, name: 'The Lost Pilgrimage', shrine: 'Daag Chokah', region: 'Great Hyrule Forest' },
      { found: false, name: 'The Test of Wood', shrine: 'Maag Halan Shrine', region: 'Great Hyrule Forest' },
      { found: false, name: 'Trial of Second Sight', shrine: 'Kuhn Sidajj Shrine', region: 'Great Hyrule Forest' },
      { found: false, name: 'Secret of the Cedars', shrine: `Tahno O'ah Shrine`, region: 'Hateno' },
      { found: false, name: 'The Crowned Beast', shrine: 'Mezza Lo Shrine', region: 'Hateno' },
      { found: false, name: 'The Cursed Statue', shrine: 'Kam Urog Shrine', region: 'Hateno' },
      { found: false, name: 'The Spring of Wisdom', shrine: `Jitan Sa'mi Shrine`, region: 'Hateno' },
      { found: false, name: 'The Bird in the Mountains', shrine: 'Mozo Shenno Shrine', region: 'Hebra' },
      { found: false, name: 'Trail on the Cliff', shrine: 'Gaza Tokki Shrine', region: 'Hebra' },
      { found: false, name: 'Guardian Slideshow', shrine: 'Shoqa Tatone Shrine', region: 'Lake' },
      { found: false, name: `The Serpent's Jaw`, shrine: 'Shae Katha Shrine', region: 'Lake' },
      { found: false, name: 'Master of the Wind', shrine: 'Shai Yota Shrine', region: 'Lanayru' },
      { found: false, name: 'The Ceremonial Song', shrine: 'Dagah Keek Shrine', region: 'Lanayru' },
      { found: false, name: 'The Two Rings', shrine: 'Sheem Dagoze Shrine', region: 'Ridgeland' },
      { found: false, name: 'Trial of Thunder', shrine: 'Toh Yasha Shrine', region: 'Ridgeland' },
      { found: false, name: 'Under a Red Moon', shrine: 'Mijah Rokee Shrine', region: 'Ridgeland' },
      { found: false, name: `Recital at Warbler's Nest`, shrine: 'Voo Lota Shrine', region: 'Tabantha' },
      { found: false, name: 'The Ancient Rito Song', shrine: 'Bareeda Naag Shrine', region: 'Tabantha' }
    ],
    sideQuests: [],
    mainQuests: [],
    shrines: [],
    memories: []
  },
  actions: {},
  mutations: {},
  getters: {
    shrineQuests: state => state.shrineQuests,
    sideQuests: state => state.sideQuests,
    mainQuests: state => state.mainQuests,
    shrines: state => state.shrines,
    memories: state => state.memories
  }
})

export default store
