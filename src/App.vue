<template>
  <div id="app">
    <top-navigation></top-navigation>

    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import TopNavigation from './components/TopNavigation'

export default {
  name: 'app',
  components: { TopNavigation }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  background-color: #eee;
}
</style>
