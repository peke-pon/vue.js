# 13.props-$emit

[demo](https://peke-pon.github.io/vue.js/13.props/dist/)

## View

![](https://i.imgur.com/BYwyzLO.png)

## src/App.vue

```html
// 親コンポーネント
<template>
  <div id="app">
    <h1>13.props-$emit</h1>
    <p>総在庫数: {{ totalCount }}</p>
    <Number :total-number="counter1" :product="products[0]" @my-click="count1"></Number>
    <Number :total-number="counter2" :product="products[1]" @my-click="count2"></Number>
    <Number @my-click="disp = $event"></Number>
    <p>{{ disp }}</p>
  </div>
</template>

<script>
// 子コンポーネント読み込み
import Number from './components/Number.vue'

export default {
  name: 'App',
  data() {
    return {
    // propsにバインドするデータ
      counter1: 10,
      counter2: 7,
      products: ['vue.js入門','Nuxt.js入門'],
      // 子コンポーネントからのイベントオブジェクトでデータ表示を変える
      disp: '親のデータを表示'
    }
  },
  // 子コンポーネント読み込み
  components: {
    Number
  },
  methods: {
  // カスタムイベントにメソッドを設定
    count1() {
      this.counter1--
    },
    count2() {
      this.counter2--
    }
  },
  computed: {
    totalCount: function() {
      return (this.counter1 + this.counter2)
    }
  }
}
</script>
```

## src/component/Number.vue

```html
// 子コンポーネント
<template>
  <div>
    <h4>商品: {{ product }}</h4>
    <p>在庫数: {{ totalNumber }}</p>
    <button @click="decrement">購入</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
    // $emitメソッドの第２引数に渡す
      emitData: '子コンポーネントからデータを渡す'
    }
  },
  // propsでは型やデフォルト値、必須項目の指定ができる
  props: {
    totalNumber: Number,
    product: {
      type: String,
      default: '在庫なし',
    }
  },
  methods: {
    decrement() {
      if(this.totalNumber <= 0) {
        return
      }
      // $emitでカスタムイベントを設定
      this.$emit('my-click', this.emitData)
    }
  },
}
</script>
```
