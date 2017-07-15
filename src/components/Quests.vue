<template>
  <div>
    <div class="card">
      <h1>Quests</h1>

      <ul class="quest-tabs">
        <li class="active"><a href="#">Shrine quests</a></li>
      </ul>
    </div>
    
    <div class="quest-list">
      <div class="card">
        <div class="region-filter">
          <label>Region</label>
          <select v-model="selectedRegion">
            <option v-for="(region, i) in regions" :key="i" :value="region">{{ region }}</option>
          </select>
        </div>

        <ul v-if="quests.length > 0">
          <li v-for="(quest, i) in quests" :key="i">
            <label>
              <input @change="toggleFound({ type: 'shrineQuests', index: i })" type="checkbox" :checked="quest.found" :value="i">

              <span :class="{complete: quest.found}">{{ quest.name }}</span>
            </label>
          </li>
        </ul>

        <p v-else>No shrine quests in {{ selectedRegion }} region</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'quests',
  data () {
    return {
      quests: [],
      selectedRegion: 'All',
      regions: ['All', 'Akkala', 'Central', 'Dueling Peaks', 'Eldin', 'Faron', 'Gerudo', 'Wasteland', 'Great Hyrule Forest', 'Hateno', 'Hebra', 'Lake', 'Lanayru', 'Ridgeland', 'Ridgeland', 'Tabantha']
    }
  },
  watch: {
    selectedRegion (nextRegion) {
      if (nextRegion === 'All') {
        this.quests = this.shrineQuests
        return
      }

      this.quests = this.shrineQuests.filter(q => q.region === nextRegion)
    }
  },
  computed: {
    ...mapGetters(['shrineQuests'])
  },
  methods: {
    ...mapActions(['toggleFound'])
  },
  mounted () {
    this.quests = this.shrineQuests
  }
}
</script>

<style lang="less" scoped>
.card {
  background-color: white;
  border-radius: 0 0 4px 4px;
  box-shadow: 0 2px 5px 0px #999;
  padding: 15px;
}

h1 {
  margin-bottom: 15px;
  font-size: 36px;
}

.region-filter {
  margin-bottom: 20px;

  label {
    display: block;
  }
}

.quest-tabs {
  display: flex;
  flex-direction: row;
  margin-left: 5px;
  margin-bottom: -15px;

  li {
    margin-right: 15px;
    border-bottom: 3px solid #0d9263;

    &.active {
      a {
        color: #0d9263;
      }
    }

    a {
      color: #494b4b;
      text-decoration: none;
      font-weight: bold;
      font-size: 18px;
    }
  }
}

.quest-list {
  margin: 25px 20px;

  li {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 5px 0;
    border-bottom: 1px solid #494b4b;

    input {
      margin-right: 10px;
    }

    .complete { text-decoration: line-through; }
  }
}

ul {
  list-style: none;
}
</style>
