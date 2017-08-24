<template>
  <div>
    <div class="card">
      <h1 class="page-header">Memories</h1>
    </div>

    <div class="list">
      <div class="card">
        <completable-list :completables="memories" :on-complete="complete"></completable-list>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import CompletableList from './CompletableList'

export default {
  name: 'memories',
  components: {CompletableList},
  computed: {
    ...mapGetters(['memories'])
  },
  methods: {
    ...mapActions(['toggleComplete']),
    complete (index) {
      this.toggleComplete({type: 'memories', index})
    }
  }
}
</script>
