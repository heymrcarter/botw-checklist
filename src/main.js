// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './less/app.less'

Vue.config.productionTip = false

String.prototype.toTitleCase = function () { // eslint-disable-line no-extend-native
  const words = this.split(' ')
  const sentence = []
  words.forEach(w => {
    const word = w.substr(0, 1).toUpperCase() + w.substr(1)
    sentence.push(word)
  })
  return sentence.join(' ')
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
