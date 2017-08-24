<template>
  <div>
    <div class="card no-border">
      <h1 class="page-header">Shrines</h1>
    </div>

    <div class="list">
      <div class="card">

        <div v-if="shrines.length === 0">
          <p>No shrines</p>
        </div>
        <div v-else>
          <completable-list :completables="shrines" :on-complete="complete"></completable-list>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import CompletableList from './CompletableList'

export default {
  name: 'shrines',
  components: {CompletableList},
  computed: {
    ...mapGetters(['shrines'])
  },
  methods: {
    ...mapActions(['toggleComplete']),
    complete () {

    }
  }
}
</script>

<style>
.shrine-list {
  margin: 25px;
}
</style>
