# 1.テンプレート構文

## View

![](https://i.imgur.com/4XRBtbT.png)


## HTML

```html
  <div id="app">
    <h2>1.テンプレート構文</h2>
    <p>マスタッシュ構文</p>
    <p>{{ text }}</p>
    <hr />
    <p>数値の表示</p>
    <p>{{ number * 3 }} という数値の表示や簡単な計算もできる</p>
    <hr />
    <p>三項演算子</p>
    <p>三項演算子で分岐が{{ flag ? 'できる' : 'できない' }}</p>
    <hr />
    <p>メソッド</p>
    <p>{{ speak() }}</p>
    <hr />
  </div>
```

## JavaScript

```javascript
const app = new Vue({
      el: "#app",
      data: {
        text: "2重中括弧の中に変数名でVueインスタンスの変数の中身を表示する",
        content: "メソッドの挿入も可能。ただし単一の式しか入れることはできない",
        number: 100,
        flag: true
      },
      methods: {
        speak() {
          return this.content;
        }
      }
    });
```
