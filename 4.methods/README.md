# 4.メソッド

## View

![](https://i.imgur.com/dJyEY46.png)


## HTML

```html
<div id="app">
    <h2>4.メソッド</h2>
    <h4>methodsプロパティ</h4>
    <p><strong>methodsプロパティ</strong>は画面が書き換わる度に毎回すべて実行される
    </p>
    <p>{{ addText() }}</p>
    <hr />
    <h4>computedプロパティ</h4>
    <p><strong>computedプロパティ</strong>は対象データが書き換わる時だけ実行される
    </p>
    <p>{{ addText2 }}</p>
    <hr />
    <h4>watchプロパティ</h4>
    <p><strong>watchプロパティ</strong>{{ text3 }}
    </p>
    <hr />
    <h4>実行タイミングの比較</h4>
    <p>コンソールを表示してボタンをクリック {{ count }}</p>
    <button @click="count++">カウント</button>
    <hr />
  </div>
```

## JavaScript

```javascript
    const app = new Vue({
      el: "#app",
      data: {
        text: 'キャッシュされないので処理が重くなる',
        text2: 'さらにキャッシュされるので処理を軽く実装できる',
        text3: '',
        count: 0,
      },
      methods: {
        addText() {
          console.log('methods実行')
          return this.text
        }
      },
      computed: {
        addText2() {
          console.log('computed実行')
          return this.text2
        }
      },
      watch: {
        count() {
          console.log('watch実行')
          setTimeout( ()=> this.text3 = 'はデータを監視して、変更されたら実行される', 500)
        },
        text3() {
          setTimeout(() => this.text3 = '', 3000)
        }
      }
    });
```
