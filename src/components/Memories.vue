<template>
  <div>
    <div class="card">
      <h1 class="page-header">Memories</h1>
    </div>

    <div class="memories-list">
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

<style lang="less" scoped>
.memories-list {
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
