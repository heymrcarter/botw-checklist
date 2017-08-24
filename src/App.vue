<template>
  <div id="app">
    <div class="wrapper">
      <top-navigation class="topbar"></top-navigation>

      <main>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script>
import TopNavigation from './components/TopNavigation'

export default {
  name: 'app',
  components: { TopNavigation }
}
</script>

<style lang="less">
@import './less/variables';
* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow-y: hidden;

  .wrapper {
    overflow-y: scroll;
    background-color: #eee;
    background-image: url("@{imgBaseUrl}botw.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
  }

  main {
    height: ~"calc(100vh - 50px)";
  }
}
</style>
