<template>
  <div class="">
    <div class="card no-border">
      <h1 class="page-header">Hyrule Compendium</h1>

      <ul class="tabs">
        <li v-for="(type, i) in compendiumTypes" :class="{active: currentCompendiumType === type}" :key="i">
          <a href="#" @click.prevent="changeCompendiumType(type)">{{ type.toTitleCase() }}</a>
        </li>
      </ul>
    </div>

    <div class="list">
      <div class="card">
        <div v-if="items.length === 0">
          <p>No compendium items</p>
        </div>
        <div v-else>
          <completable-list :completables="items" :on-complete="complete"></completable-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import CompletableList from './CompletableList'

export default {
  name: 'hyrule-compendium',
  components: {
    CompletableList
  },
  data () {
    return {
      compendiumTypes: ['creatures', 'equipment', 'materials', 'monsters', 'treasure'],
      currentCompendiumType: 'creatures'
    }
  },
  computed: {
    items () {
      return this.$store.getters[this.currentCompendiumType]
    }
  },
  methods: {
    ...mapActions(['toggleComplete']),
    changeCompendiumType (type) {
      this.currentCompendiumType = type
    },
    complete (index) {
      this.toggleComplete({type: this.currentCompendiumType, index})
    }
  }
}
</script>
