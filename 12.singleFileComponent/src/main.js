import Vue from 'vue'
import App from './App.vue'
import App2 from "./App2.vue";

Vue.config.productionTip = false
// コンポーネントの読み込みとグローバルへの登録
import counter from "./components/counter.vue";
// 読み込んだオブジェクトを第２引数へ設定
Vue.component("counter", counter);

new Vue({
  render: h => h(App),
}).$mount('#app')

new Vue({
  render: h => h(App2)
}).$mount("#app2");