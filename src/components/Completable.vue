<template>
  <div class="completable">
    <label>
      <input @change="onComplete(index)" type="checkbox" :checked="completable.complete" :value="index">

      <span :class="{complete: completable.complete}">{{ completable.name }}</span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'completable',
  props: ['completable', 'onComplete', 'index']
}
</script>

<style lang="less" scoped>
.completable {
  padding: 5px 0;

  label {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  input {
    margin-right: 5px;
    width: 25px;
    height: 25px;
  }

  .complete { text-decoration: line-through; }
}
</style>
