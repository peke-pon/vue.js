# ６.条件付きレンダリング

## View

![](https://i.imgur.com/q71mLBB.png)

## HTML

```html
<div id="app">
    <h2>6.条件付きレンダリング</h2>
    <h4>v-if/else-if/v-else</h4>
    <p>在庫数　<span>{{ stock }}</span>個</p>
    <button @click="stock--" v-if="stock > 0">購入</button>
    <p v-if="stock >= 3">{{ message }}</p>
    <p v-else-if="stock < 3 && stock > 0" style="color: tomato;">{{ message2 }}</p>
    <p v-else :style="styleobj">{{ message3 }}</p>
    <hr />
    <h4>v-ifをture/falseで分岐させる</h4>
    <p v-if="ok">条件によってdom要素を書き換える <strong>条件{{ ok }}</strong></p>
    <p v-else>dom自体の内容が書き換えられる <strong>条件{{ ok }}</strong></p>
    <button @click="ok = !ok">クリック</button>
    <hr />
    <h4>v-ifでtemplateタグ</h4>
    <template v-if="disp">
    <p><strong>templateタグ</strong>で囲ったブロックを出力する</p>
    <p>複数の要素を分岐させるのに役立ちます</p>
    </template>
    <button @click="disp = !disp">クリック</button>
    <hr />
    <h4>v-show</h4>
    <div v-show="disp2">
      <p><strong>v-show</strong>はdomのdisplayプロパティを書き換えます</p>
      <p>何度も表示/非表示する際に描画コストを抑えられます</p>
    </div>
    <button @click="disp2 = !disp2">クリック</button>
    <hr />
  </div>
```

## JavaScript

```javascript
const app = new Vue({
      el: "#app",
      data: {
        stock: 5,
        message: '在庫あります',
        message2: '在庫残りわずかです',
        message3: '完売しました',
        styleobj: { color: 'tomato', 'text-decoration': 'line-through'},
        ok: true,
        disp: true,
        disp2: true,
      },
      computed: {
      }
    });
```
