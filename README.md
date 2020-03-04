# 14.filter/mixin

[demo](https://peke-pon.github.io/vue.js/14.filter-mixin/dist/)

## View

![](https://i.imgur.com/vdGwR77.png)

## src/App.vue

```html
// 親コンポーネント
<template>
  <div id="app">
    <h2>14.filter/mixin</h2>
    <h3>・filtersオプション</h3>
    <p>フィルターはパイプで複数つなぐことができる</p>
    <p>価格: <span class="price">{{price | taxPrice | numberFormat}}</span>円(税込)</p>
    <small>※ただし、メソッドのように再描画される度に実行されるので注意</small>
    <hr>
    <mixin></mixin>
  </div>
</template>

<script>
import mixin from '@/mixin.vue';
import mix from '@/mix.js';

export default {
  name: 'App',
  components: {
    mixin,
  },
  mixins: [mix],
};
</script>
```

## src/mixin.vue

```html
<template>
  <div>
    <h3>・mixinsオプション</h3>
    <p>オプションを共通化したい場合はmixinを使う</p>
    <p>
      価格:
      <span class="price">{{price | taxPrice | numberFormat}}</span>円(税込)
    </p>
    <p>コンフリクトしたデータはインスタンスが優先される</p>
    <hr>
    <p>※ライフサイクルフックの場合はmixinとインスタンス両方実行される。<br>
    (コンソールを確認する) </p>
  </div>
</template>

<script>
import mix from '@/mix.js';

export default {
  mixins: [mix],
  data() {
    return {
      // データの上書き
      price: 3600,
    };
  },
  created() {
    console.log('インスタンス内のcreated');
  },
};
</script>
```

## src/mix.js

```javascript
// オプションを共通化
export default {
  data() {
    return {
      price: 2480,
    };
  },
  // mixinには適さない
  created() {
    console.log('mixin内のcreated');
  },
  filters: {
    numberFormat(value) {
      return value.toLocaleString();
    },
    taxPrice(value) {
      return Math.round(value * 1.08);
    },
  },
};
```
