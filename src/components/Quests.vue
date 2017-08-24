<template>
  <div class="">
    <div class="card no-border">
      <h1 class="page-header">Quests</h1>

      <ul class="tabs">
        <li v-for="(type, i) in questTypes" :class="{active: currentQuestType === type.key}" :key="i">
          <a href="#" @click.prevent="changeQuestType(type.key)">{{ type.name }} quests</a>
        </li>
      </ul>
    </div>

    <div class="list">
      <div class="card">
        <div class="filter" v-if="renderFilter">
          <label for="completable-filter">Filter quests</label>
          <div class="filter-wrapper">
            <div class="property-selector flex" @click="renderFilterPropertyList = !renderFilterPropertyList">{{ currentFilterProperty.toTitleCase() }}</div>
            <ul class="property-list" v-if="renderFilterPropertyList">
              <li v-for="(property, i) in questFilterProperties" :key="i" @click="currentFilterProperty = property">{{ property.toTitleCase() }}</li>
            </ul>
            <input type="text" id="completable-filter" class="flex" @keyup="filterQuests($event.target.value)" v-model="filterValue">
          </div>
        </div>

        <div v-if="quests.length === 0">
          <p>No {{ friendlyQuestType }} quests</p>
        </div>
        <div v-else>
          <completable-list :completables="quests" :on-complete="complete"></completable-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import CompletableList from './CompletableList'

export default {
  name: 'quests',
  components: {CompletableList},
  data () {
    return {
      quests: [],
      filterValue: '',
      renderFilterPropertyList: false,
      currentFilterProperty: 'name',
      questTypes: [{name: 'Main', key: 'mainQuests'}, {name: 'Shrine', key: 'shrineQuests'}, {name: 'Side', key: 'sideQuests'}],
      currentQuestType: 'mainQuests',
      selectedRegion: 'All',
      regions: ['All', 'Akkala', 'Central', 'Dueling Peaks', 'Eldin', 'Faron', 'Gerudo', 'Wasteland', 'Great Hyrule Forest', 'Hateno', 'Hebra', 'Lake', 'Lanayru', 'Ridgeland', 'Ridgeland', 'Tabantha']
    }
  },
  computed: {
    ...mapGetters(['mainQuests', 'shrineQuests', 'sideQuests']),
    friendlyQuestType () {
      return this.questTypes.find(t => t.key === this.currentQuestType).name
    },
    questFilterProperties () {
      return Object.keys(this.quests[0])
    },
    renderFilter () {
      return process.env.LIST_FILTER_ENABLED
    }
  },
  methods: {
    ...mapActions(['toggleComplete']),
    changeQuestType (nextType) {
      this.currentQuestType = nextType
      this.quests = this.$store.getters[this.currentQuestType]
      this.filterValue = ''
    },
    hasRegions (quest) {
      return quest.hasOwnProperty('region')
    },
    complete (index) {
      this.toggleComplete({type: this.currentQuestType, index})
    },
    filterQuests (filterValue) {
      this.quests = this.$store.getters[this.currentQuestType].filter(q => q.name.toLowerCase().includes(filterValue.toLowerCase()))
    }
  },
  mounted () {
    this.quests = this.$store.getters[this.currentQuestType]
  }
}
</script>

<style lang="less" scoped>
@import '../less/colors';

.filter {
  margin-bottom: 20px;

  label {
    font-weight: bold;
    margin-bottom: 5px;
  }

  .filter-wrapper {
    display: flex;
    flex-direction: row;
    position: relative;

    .property-selector {
      background-color: #ccc;
      padding: 5px;
      font-size: 14px;
      cursor: pointer;
    }

    .property-list {
      position: absolute;
      top: 30px;
      border-radius: 0 0 4px 4px;
      box-shadow: 0 2px 5px 0px #999;
      background-color: white;

      li {
        padding: 5px;
        font-size: 14px;
        cursor: pointer;

        &:hover {
          background-color: #ccc;
        }
      }
    }
  }
}
</style>
