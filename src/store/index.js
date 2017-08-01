import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import createPersistantState from 'vuex-persistedstate'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

const store = new Store({
  plugins: [createPersistantState({ key: 'botw_checklist' })],
  state: {
    mainQuests: [
      { name: 'The Shrine of Resurrection', found: false },
      { name: 'The Great Plateau Tower', found: false },
      { name: 'The Isolated Plateau', found: false },
      { name: 'Seek Out Impa', found: false },
      { name: 'Locked Mementos', found: false },
      { name: 'Free the Divine Beasts', found: false },
      { name: 'Zora’s Domain', found: false },
      { name: 'Divine Beast Vah Ruta', found: false },
      { name: 'Divine Beast Vah Rudania', found: false },
      { name: 'Divine Beast Vah Medoh', found: false },
      { name: 'The Forbidden City', found: false },
      { name: 'Divine Beast Vah Naboris', found: false },
      { name: 'The Master Sword', found: false },
      { name: 'Memories', found: false },
      { name: 'Destroy Ganon', found: false }
    ],
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
    sideQuests: [
      {
        name: 'The Royal White Stallion',
        location: 'Outskirt Stable',
        reward: 'Royal Saddle, Royal Bridle',
        region: 'Central Hyrule'
      },
      {
        name: 'A Rare Find',
        location: 'Outskirt Stable',
        reward: 'Silver Rupee',
        region: 'Central Hyrule'
      },
      {
        name: 'My Hero',
        location: 'Outskirt Stable',
        reward: 'Star Fragment',
        region: 'Central Hyrule'
      },
      {
        name: 'The Royal Guard’s Gear',
        location: 'Riverside Stable',
        reward: '300 Rupees',
        region: 'Central Hyrule'
      },
      {
        name: 'A Royal Recipe',
        location: 'Riverside Stable',
        reward: 'Silver Rupee/ Silver Rupees x2',
        region: 'Central Hyrule'
      },
      {
        name: 'Riverbed Reward',
        location: 'Wetland Stable',
        reward: 'Royal broadsword',
        region: 'Central Hyrule'
      },
      {
        name: 'Wild Horses',
        location: 'Dueling Peaks Stable',
        reward: '50 Rupees',
        region: 'Dueling Peaks'
      },
      {
        name: 'Misko the Great Bandit',
        location: 'Dueling Peaks Stable',
        reward: 'Treasure Chest',
        region: 'Dueling Peaks'
      },
      {
        name: 'The Priceless Maracas',
        location: 'West Necluda',
        reward: 'Inventory Expansion',
        region: 'Dueling Peaks'
      },
      {
        name: 'Flown the Coop',
        location: 'Kakariko Village',
        reward: 'Purple Rupee',
        region: 'Dueling Peaks'
      },
      {
        name: 'Playtime with Cottla',
        location: 'Kakariko Village',
        reward: 'Rock Salt',
        region: 'Dueling Peaks'
      },
      {
        name: 'Arrows of Burning Heat',
        location: 'Kakariko Village',
        reward: 'Red Rupee',
        region: 'Dueling Peaks'
      },
      {
        name: 'Koko’s Kitchen',
        location: 'Kakariko Village',
        reward: 'Hasty Veggie Cream Soup',
        region: 'Dueling Peaks'
      },
      {
        name: 'Cooking with Koko',
        location: 'Kakariko Village',
        reward: 'Hot Buttered Apple',
        region: 'Dueling Peaks'
      },
      {
        name: 'Koko Cuisine',
        location: 'Kakariko Village',
        reward: 'Tough meat-stuffed pumpkin',
        region: 'Dueling Peaks'
      },
      {
        name: 'Koko’s Specialty',
        location: 'Kakariko Village',
        reward: 'Energizing Honeyed Apple',
        region: 'Dueling Peaks'
      },
      {
        name: 'Find the Fairy Fountain',
        location: 'Kakariko Village',
        reward: 'Some Hints to Memories Quest',
        region: 'Dueling Peaks'
      },
      {
        name: 'By Firefly’s Light',
        location: 'Kakariko Village',
        reward: 'Purple Rupee',
        region: 'Dueling Peaks'
      },
      {
        name: 'What’s for Dinner?',
        location: 'Lurelin Village',
        reward: 'Silver Rupee',
        region: 'Faron'
      },
      {
        name: 'Sunken Treasure',
        location: 'Lurelin Village',
        reward: 'Thunderblade, Gemstones',
        region: 'Faron'
      },
      {
        name: 'Take Back the Sea',
        location: 'Lurelin Village Beach',
        reward: 'Silver Rupee',
        region: 'Faron'
      },
      {
        name: 'A Gift of Nightshade',
        location: 'Tuft Mountain',
        reward: 'Silver Rupee',
        region: 'Faron'
      },
      {
        name: 'Thunder Magnet',
        location: 'Lakeside Stable',
        reward: 'Rubber Helm',
        region: 'Faron'
      },
      {
        name: 'The Horseback Hoodlums',
        location: 'Highland Stable',
        reward: 'Endura Carrot',
        region: 'Faron'
      },
      {
        name: 'Hunt for the Giant Horse',
        location: 'Taobab Grassland',
        reward: 'Silver Rupee',
        region: 'Faron'
      },
      {
        name: 'The Statue’s Bargain',
        location: 'Hateno Village',
        reward: '–',
        region: 'Necluda'
      },
      {
        name: 'The Weapon Connoisseur',
        location: 'Hateno Village',
        reward: 'Multiple',
        region: 'Necluda'
      },
      {
        name: 'A Gift for My Beloved',
        location: 'Hateno Village',
        reward: 'Silver Rupee',
        region: 'Necluda'
      },
      {
        name: 'Slated for Upgrades',
        location: 'Hateno Village',
        reward: 'Rune Upgrades',
        region: 'Necluda'
      },
      {
        name: 'Robbie’s Research',
        location: 'Hateno Village',
        reward: 'Ancient Arrows x3',
        region: 'Necluda'
      },
      {
        name: 'The Sheep Rustlers',
        location: 'Hateno Villate',
        reward: 'Fresh Milk x10',
        region: 'Necluda'
      },
      {
        name: 'Hylian Homeowner',
        location: 'Hateno Village',
        reward: 'House',
        region: 'Necluda'
      },
      {
        name: 'From the Ground Up',
        location: 'Hateno Village',
        reward: 'Shops, Diamonds x3',
        region: 'Necluda'
      },
      {
        name: 'Sunshroom Sensing',
        location: 'Hateno Village',
        reward: 'Hearty Truffles x3',
        region: 'Necluda'
      },
      {
        name: 'The Hero’s Cache',
        location: 'Kitano Bay',
        reward: 'Gold Rupee',
        region: 'Necluda'
      },
      {
        name: 'Luminous Stone Gathering',
        location: 'Zora’s Domain',
        reward: 'Diamonds x2',
        region: 'Lanayru'
      },
      {
        name: 'Lynel Safari',
        location: 'Zora’s Domain',
        reward: 'Zora Greaves',
        region: 'Lanayru'
      },
      {
        name: 'A Wife Washed Away',
        location: 'Zora’s Domain',
        reward: 'Staminoka Basses x5',
        region: 'Lanayru'
      },
      {
        name: 'The Giant of Ralis Pond',
        location: 'Zora’s Domain',
        reward: 'Silver Rupee',
        region: 'Lanayru'
      },
      {
        name: 'Zora Stone Monuments',
        location: 'Zora’s Domain',
        reward: 'Diamond',
        region: 'Lanayru'
      },
      {
        name: 'Diving is Beauty!',
        location: 'Zora’s Domain',
        reward: 'Fleet-lotus Seeds x5',
        region: 'Lanayru'
      },
      {
        name: 'Frog Catching',
        location: 'Zora’s Domain',
        reward: 'Armoranth',
        region: 'Lanayru'
      },
      {
        name: 'Special Delivery',
        location: 'Bank of Wishes',
        reward: '300 Rupees',
        region: 'Lanayru'
      },
      {
        name: 'Fireproof Lizard Roundup',
        location: 'Southern Mine',
        reward: 'Flamebreaker Armor',
        region: 'Eldin'
      },
      {
        name: 'The Road to Respect',
        location: 'Goron City',
        reward: 'Silver Rupee',
        region: 'Eldin'
      },
      {
        name: 'The Jewel Trade',
        location: 'Goron City',
        reward: '500 Rupees',
        region: 'Eldin'
      },
      {
        name: 'Death Mountain’s Secret',
        location: 'Goron Hot Springs',
        reward: 'Drillshaft',
        region: 'Eldin'
      },
      {
        name: 'A Curry for What Ails You',
        location: 'Rito Stable',
        reward: 'Purple Rupee',
        region: 'Tabantha'
      },
      {
        name: 'The Spark of Romance',
        location: 'Rito Village',
        reward: 'Silver Rupee',
        region: 'Tabantha'
      },
      {
        name: 'The Apple of My Eye',
        location: 'Rito Village',
        reward: 'Silver Rupee',
        region: 'Tabantha'
      },
      {
        name: 'Find Kheel',
        location: 'Rito Village',
        reward: 'Purple Rupee',
        region: 'Tabantha'
      },
      {
        name: 'Face the Frost Talus',
        location: 'Rito Village',
        reward: 'Silver Rupee',
        region: 'Tabantha'
      },
      {
        name: 'Stalhorse: Pictured!',
        location: 'Snowfield Stable',
        reward: 'Silver Rupee',
        region: 'Hebra'
      },
      {
        name: 'Good-Sized Horse',
        location: 'Gerudo Canyon',
        reward: '300 Rupees',
        region: 'Gerudo Desert'
      },
      {
        name: 'Missing in Action',
        location: 'Gerudo Canyon Stable',
        reward: 'Gold Rupee',
        region: 'Gerudo Desert'
      },
      {
        name: 'Rushroom Rush!',
        location: 'Gerudo Canyon Stable',
        reward: 'Diamond',
        region: 'Gerudo Desert'
      },
      {
        name: 'An Ice Guy',
        location: 'Kara Kara Bazaar',
        reward: 'Purple Rupee',
        region: 'Gerudo Desert'
      },
      {
        name: 'The Secret Club’s Secret',
        location: 'Gerudo Town',
        reward: 'New Clothes Shop',
        region: 'Gerudo Desert'
      },
      {
        name: 'Medicinal Molduga',
        location: 'Gerudo Town',
        reward: 'Gold Rupee',
        region: 'Gerudo Desert'
      },
      {
        name: 'The Eighth Heroine',
        location: 'Gerudo Town',
        reward: 'Sand Boots',
        region: 'Gerudo Desert'
      },
      {
        name: 'The Forgotten Sword',
        location: 'Gerudo Town',
        reward: 'Snow Boots',
        region: 'Gerudo Desert'
      },
      {
        name: 'The Search for Barta',
        location: 'Gerudo Town',
        reward: 'Silver Rupee',
        region: 'Gerudo Desert'
      },
      {
        name: 'The Thunder Helm',
        location: 'Gerudo Town',
        reward: 'Thunder Helm',
        region: 'Gerudo Desert'
      },
      {
        name: 'The Mystery Polluter',
        location: 'Gerudo Town',
        reward: 'Hydromelon',
        region: 'Gerudo Desert'
      },
      {
        name: 'Tools of the Trade',
        location: 'Gerudo Town',
        reward: 'Various',
        region: 'Gerudo Desert'
      },
      {
        name: 'A Parent’s Love',
        location: 'Tarrey Town',
        reward: 'Gold Rupee',
        region: 'Akkala'
      },
      {
        name: 'Hobbies of the Rich',
        location: 'Tarrey Town',
        reward: 'Silver Rupee, Red Rupee',
        region: 'Akkala'
      },
      {
        name: 'A Shady Customer',
        location: 'Akkala Stable',
        reward: 'Silver Rupee',
        region: 'Akkala'
      },
      {
        name: 'Little Sister’s Big Request',
        location: 'Akkala Stable',
        reward: 'Silver Rupee',
        region: 'Akkala'
      },
      {
        name: 'A Gift for the Great Fairy',
        location: 'Tabantha Bridge Stable',
        reward: '500 rupees',
        region: 'Hyrule Ridge'
      },
      {
        name: 'The Korok Trials',
        location: 'Korok Forest',
        reward: 'Big Hearty Truffle x3',
        region: 'Great Hyrule Forest'
      },
      {
        name: 'Balloon Flight',
        location: 'Woodland Stable',
        reward: 'Star Fragment',
        region: 'Great Hyrule Forest'
      },
      {
        name: 'A Freezing Rod',
        location: 'Korok Forest',
        reward: 'Silver Rupee/ Gold Rupee',
        region: 'Great Hyrule Forest'
      },
      {
        name: 'Leviathan Bones',
        location: 'Serenne Stable',
        reward: 'Gold  Rupee',
        region: 'Great Hyrule Forest'
      },
      {
        name: 'Legendary Rabbit Trial',
        location: 'Korok Forest',
        reward: 'Silver Rupee',
        region: 'Great Hyrule Forest'
      },
      {
        name: 'A Gift from the Monks',
        location: 'Forgotten Temple',
        reward: '“Of the Wild” armor set',
        region: 'Great Hyrule Forest'
      },
      {
        name: 'Riddles of Hyrule',
        location: 'Korok Forest',
        reward: 'Diamond',
        region: 'Great Hyrule Forest'
      }
    ],
    shrines: [],
    memories: [
      {
        name: 'Subdued Ceremony',
        location: 'Sacred Grounds',
        region: 'Central Hyrule'
      },
      {
        name: 'Revali’s Flap',
        location: 'Rito Village',
        region: 'Tabantha'
      },
      {
        name: 'Resolve and Grief',
        location: 'Lake Kolomo',
        region: 'Central Hyrule'
      },
      {
        name: 'Daruk’s Mettle',
        location: 'Goron City',
        region: 'Eldin'
      },
      {
        name: 'Zelda’s Resentment',
        location: 'Ancient Columns',
        region: 'Tabantha'
      },
      {
        name: 'Urbosa’s Hand',
        location: 'Gerudo Town',
        region: 'Gerudo Desert'
      },
      {
        name: 'Blades of the Yiga',
        location: 'Kara Kara Bazaar',
        region: 'Gerudo Desert'
      },
      {
        name: 'A Premonition',
        location: 'Eldin Canyon',
        region: 'Eldin'
      },
      {
        name: 'Silent Princess',
        location: 'Irch Plain',
        region: 'Hyrule Ridge'
      },
      {
        name: 'Mipha’s Touch',
        location: 'Zora’s Domain',
        region: 'Lanayru'
      },
      {
        name: 'Shelter from the Storm',
        location: 'West Necluda',
        region: 'Dueling Peaks'
      },
      {
        name: 'Father and Daughter',
        location: 'Hyrule Castle',
        region: 'Central Hyrule'
      },
      {
        name: 'Slumbering Power',
        location: 'Spring of Power',
        region: 'Akkala'
      },
      {
        name: 'To Mount Lanayru',
        location: 'Sanidin Park Ruins',
        region: 'Hyrule Ridge'
      },
      {
        name: 'Return of Calamity Ganon',
        location: 'Lanayru Road',
        region: 'East Gate, Necluda'
      },
      {
        name: 'Despair',
        location: 'Hyrule Field',
        region: 'Central Hyrule'
      },
      {
        name: 'Zelda’s Awakening',
        location: 'Fort Hateno',
        region: 'Dueling Peaks'
      },
      {
        name: 'The Master Sword',
        location: 'Korok Town',
        region: 'Great Hyrule Forest'
      }
    ]
  },
  actions,
  mutations,
  getters: {
    shrineQuests: state => state.shrineQuests,
    sideQuests: state => state.sideQuests,
    mainQuests: state => state.mainQuests,
    shrines: state => state.shrines,
    memories: state => state.memories
  }
})

export default store
