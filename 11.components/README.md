# 11.コンポーネント

[demo](https://peke-pon.github.io/vue.js/11.components/)

## View

![](https://i.imgur.com/0Q96QOQ.png)

## HTML

```html
<div id="container">
    <h2>11.コンポーネント</h2>
    <hr>
    <h4>templateプロパティ</h4>
    <div id="vm">
    </div>
    <p>ひとつしか読み込まれない</p>
    <div id="vm">
    </div>
    <hr>
    <div id="app">
      <h4>ローカルコンポーネント</h4>
      <p>ローカルのcomponentsにオブジェクト形式でプロパティを渡す</p>
      <counter2></counter2>
      <counter2></counter2>
      <counter></counter>
      <counter></counter>
    </div>
    <hr>
    <div id="app2">
      <h4>グローバルコンポーネント</h4>
      <p>dataはそれぞれのインスタンスで個別に値を持てるように、関数でオブジェクトを返します</p>
      <p>ローカルは読み込まれない</p>
      <counter2></counter2>
      <counter2></counter2>
      <counter></counter>
      <counter></counter>
    </div>
    <hr>
  </div>
```

## JavaScript

```javascript
 // component定義
  const component = {
      data: function () {
        return {
          count2: 2
        }
      },
      template: '<p>いいね ( {{ count2 }} ) <button @click="count2++">+</button></p>'
    }

  // グローバルcomponent
  Vue.component('counter', {
      data: function () {
        return {
          count: 6
        }
      },
      template: '<p>フォロー ( {{ count }} )<button @click="count++">+</button></p>'
    })

  // templateプロパティ
  const vm = new Vue({
    data: {
      temp: 'template'
    },
    template: '<p>{{temp}}で変数を出力する</p>'
  }).$mount('#vm')

  // ローカルcomponent
  const app = new Vue({
    data: {
      count2: 3
    },
    components: {
      'counter2': component
    }
  }).$mount('#app')

  // 別インスタンス
  const app2 = new Vue({
  }).$mount('#app2')
```
