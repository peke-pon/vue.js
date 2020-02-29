# 8.フォーム入力

[demo](https://peke-pon.github.io/vue.js/8.form/)

## View

![](https://i.imgur.com/5fRjv0x.png)

## HTML

```html
  <div id="app">
    <h2>7.フォーム入力</h2>
    <h4>v-model</h4>
    <p>双方向バインディングで表示内容を書き換える</p>
    <p>{{ msg }}</p>
    <input type="text" v-model="msg" class="input">
    <hr />
    <h4>v-modelを使わない</h4>
    <p>日本語をリアルタイム変換する</p>
    <input type="text" @input="display" :value="msg2" class="input">
    <p>{{ msg2 }}</p>
    <hr />
    <h4>textarea</h4>
    <div class="flex">
      <textarea v-model="msg3"></textarea>
      <p>
        <pre>{{ msg3 }}</pre>
      </p>
    </div>
    <hr />
    <h4>checkbox</h4>
    <p>アンケート（複数回答可）</p>
    <input type="checkbox" name="answer" id="check1" value="Google検索" 　v-model="answers">
    <label for="check1">Google検索</label>
    <input type="checkbox" name="answer2" value="口コミ" id="check2" v-model="answers">
    <label for="check2">口コミ</label>
    <input type="checkbox" name="answer3" value="その他" id="check3" v-model="answers">
    <label for="check3">その他</label>
    <p>{{ answers }}</p>
    <hr />
    <h4>radio</h4>
    <p>質問にお答えください : {{ answers2 }}</p>
    <input type="radio" name="answer2" value="はい" id="radio1" v-model="answers2">
    <label for="radio1">はい</label>
    <input type="radio" name="answer2" value="いいえ" id="radio2" v-model="answers2">
    <label for="radio2">いいえ</label>
    <hr />
    <h4>select</h4>
    <p>質問にお答えください : {{ answers3 }}</p>
    <select v-model="answers3">
      <option disabled value="">当店のご利用は何回目ですか</option>
      <option value="1">初めてのご利用</option>
      <option>2回以上5回未満</option>
      <option value="5">5回以上</option>
    </select>
    <hr />
  </div>
```

## JavaScript

```javascript
const app = new Vue({
      el: "#app",
      data: {
        msg: '双方向バインディング',
        msg2: 'イベントオブジェクトでvalue値を取得',
        msg3: 'textareaはタグの属性にv-modelを指定する',
        yes: 'Google検索',
        no: 'チェックなし',
        answers: [],
        answers2: [],
        answers3: ''
      },
      methods: {
        display($event) {
          this.msg2 = $event.target.value
        }
      }
    });
```
