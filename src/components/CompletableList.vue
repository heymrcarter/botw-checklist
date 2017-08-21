<template>
  <ul class="completable-list">
    <li v-for="(completable, i) in completables" :key="i">
      <completable :completable="completable" :on-complete="onComplete" :index="i"></completable>
    </li>
  </ul>
</template>

<script>
import Completable from './completable'

export default {
  name: 'completable-list',
  props: ['completables', 'onComplete'],
  components: {Completable}
}
</script>

<style scoped lang="less">
.completable-list {
  li {
    border-bottom: 1px solid #494b4b;
  }
}
</style>
