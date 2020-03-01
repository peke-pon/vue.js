# 12.単一ファイルコンポーネント

[demo](https://peke-pon.github.io/vue.js/12.singleFileComponent/dist/)

## View

![](https://i.imgur.com/qWRT5Ct.png)

## public/index.html

```html
<h2>12.単一ファイルコンポーネント</h2>
  <div id="app2">
  </div>
  <div id="app">
  </div>
```

## src/main.js

```javascript
import Vue from 'vue'
import App from './App.vue'
import App2 from "./App2.vue";

Vue.config.productionTip = false
// コンポーネントの読み込み
import counter from "./components/counter.vue";
// 読み込んだオブジェクトを第２引数へ設定
Vue.component("counter", counter);

new Vue({
  render: h => h(App),
}).$mount('#app')

new Vue({
  render: h => h(App2)
}).$mount("#app2");
```

## src/App.vue

```html
<template>
  <div>
    <h4>グローバルコンポーネント</h4>
    <p>ローカルコンポーネントを使い回す</p>
      <counter2></counter2>
      <counter2></counter2>
      <p>グローバルに登録したコンポーネントを使用</p>
      <counter></counter>
      <counter></counter>
      <hr>
  </div>
</template>

<script>
import counter2 from './components/couter2.vue'
export default {
  components: {
    counter2
  }
}
</script>
```

## src/App2.vue

```html
<template>
    <div>
    <h4>ローカルコンポーネント</h4>
      <p>ローカルに登録したコンポーネントを使用</p>
      <counter2></counter2>
      <counter2></counter2>
      <p>グローバルに登録したコンポーネントを使用</p>
      <counter></counter>
      <counter></counter>
      <hr>
  </div>
</template>

<script>
import counter2 from './components/couter2.vue'
export default {
  components: {
    counter2
  }
}
</script>
```

## src/components/counter.vue

```javascript
<template>
  <p>フォロー ( {{ count }} )<button @click="count++">+</button></p>
</template>

<script>
export default {
  data() {
    return {
      count: 12
    };
  }
};
</script>
```

## src/components/counter2.vue

```html
<template>
  <div>
    <p>いいね ( {{ count2 }} ) <button @click="count2++">+</button></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count2: 7
    }
  },
}
</script>

// scoped属性でこのコンポーネントだけにスタイルを定義（カスタムデータ属性で設定される）
<style scoped>
  button {
  border: 1px solid rgb(32, 161, 133);
  background: rgb(29, 163, 141);
  border-radius: 5px;
  padding: 1em, 2em;
  color: #ffffff;
}
</style>
```
