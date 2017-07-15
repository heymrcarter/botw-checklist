<template>
  <div>
    <h1>Quests</h1>

    <ul class="quest-tabs">
      <li class="active"><a href="#">Shrine quests</a></li>
    </ul>

    <div class="quest-list">
      <ul>
        <li v-for="(quest, i) in shrineQuests" :key="i">
          <input type="checkbox" :checked="quest.found" :value="i">
          <span :class="{found: quest.found}">{{ quest.name }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'quests',
  computed: {
    ...mapGetters(['shrineQuests'])
  }
}
</script>

<style lang="less" scoped>
h1 {
  margin-bottom: 15px;
  font-size: 36px;
}

.quest-tabs {
  display: flex;
  flex-direction: row;
  margin-left: 5px;

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
  margin: 35px 5px 0 5px;

  li {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 5px 0;
    border-bottom: 1px solid #494b4b;

    input {
      margin-right: 10px;
    }
  }
}

ul {
  list-style: none;
}
</style>
