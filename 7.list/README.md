# 7.リストレンダリング

[demo](https://peke-pon.github.io/vue.js/7.list/)

## View

![](https://i.imgur.com/y0bAQUs.png)


## HTML

```html
  <div id="app">
    <h2>7.リストレンダリング</h2>
    <h4>v-for</h4>
    <p>配列のデータを繰り返し表示する</p>
    <ol>
      <li v-for="item in list">{{ item }}</li>
    </ol>
    <hr />
    <h4>インデックスの値を取得</h4>
    <p>引数の2番めでインデックスが取得できます</p>
    <ul>
      <li v-for="(value, key) in list2">{{ key + 4 }}.{{ value }}</li>
    </ul>
    <hr />
    <h4>オブジェクトからデータを取得</h4>
    <p>item.nameのようなオブジェクト形式で指定する</p>
    <table>
      <tr v-for="item in list3">
        <td>商品: {{item.name}}</td>
        <td>{{item.price}}円</td>
      </tr>
    </table>
    <hr />
    <h4>要素を削除する際はkey属性を指定する</h4>
    <p>:key="item.id"の様にオブジェクトのユニークキーを指定する</p>
    <table>
      <tr v-for="item in list4" :key="item.id">
        <td>商品: {{item.name}}</td>
        <td>{{item.price}}円</td>
      </tr>
    </table>
    <button @click="del">削除</button>
    <hr />
  </div>
```

## JavaScript

```javascript
    const app = new Vue({
      el: "#app",
      data: {
        list: ['テンプレート構文', 'ディレクティブ', 'イベント処理'],
        list2: ['メソッド', 'スタイル', '条件付きレンダリング'],
        list3: [
          { name: 'JavaScript入門', price: 2300 },
          { name: 'vue.js入門', price: 2000 },
          { name: 'Node.js', price: 1800 }
        ],
        list4: [
          { id: 1, name: 'JavaScript入門', price: 2300 },
          { id: 2, name: 'vue.js入門', price: 2000 },
          { id: 3, name: 'Node.js', price: 1800 }
        ],
      },
      methods: {
        del() {
          this.list4.shift()
        }
      }
    });
```
