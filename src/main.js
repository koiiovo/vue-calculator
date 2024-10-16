import Vue from 'vue'
import App from './App.vue'
import './assets/styles.css'; // 引入全局样式

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
