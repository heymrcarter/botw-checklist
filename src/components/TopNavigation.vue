<template>
  <nav>
    <router-link to="/">BOTW Checklist</router-link>
    <ul>
      <li><router-link :to="{ name: 'Quests' }">Quests</router-link></li>
      <li><router-link :to="{ name: 'Memories' }">Memories</router-link></li>
      <li><router-link :to="{ name: 'HyruleCompendium' }">Hyrule Compendium</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'top-navigation'
}
</script>

<style lang="less" scoped>
nav {
  background-color: #494b4b;
  height: 50px;
  box-shadow: 0px 2px 5px 0px #999;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 15px;

  &> a {
    height: 100%;
    display: flex;
    color: white;
    text-decoration: none;
    letter-spacing: 1px;
    font-weight: bold;
    align-items: center;
  }

  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
    flex: 1;
    margin-left: 20px;

    li {
      display: flex;
      padding: 0 10px;

      a {
        color: white;
        text-decoration: none;
        letter-spacing: 1px;
      }
    }
  }
}
</style>
