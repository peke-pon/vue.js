# 5.スタイル

[demo](https://peke-pon.github.io/vue.js/5.style/)

## View

![](https://i.imgur.com/dxFWfs5.png)

## HTML

```html
<div id="app">
    <h2>5.スタイル</h2>
    <h4>配列形式でクラスの複数指定</h4>
    <p><strong :class="[colors, size]">配列形式</strong> 
    でプロパティから複数のクラスが指定できます
    </p>
    <hr />
    <h4>オブジェクト形式でクラスの複数指定</h4>
    <p><strong :class="{ color: true, size: true}">オブジェクト形式</strong> 
    でも複数のクラスが指定できます
    </p>
    <hr />
    <h4>クラスの動的な変更</h4>
    <p>オブジェクトのなかの<strong :class="{ color: active, 'font-rotate': !active}">ture,falseを変更</strong> することで動的にクラスを付与できる
    </p>
    <button @click="active = !active">クリック</button>
    <hr />
    <h4>computedでクラスを変更</h4>
    <p>computedで<strong :class="addClass">オブジェクトをreturnで返す</strong> 
    ことでもクラスを付与できる
    </p>
    <button @click="active2 = !active2">クリック</button>
    <hr />
    <h4>インラインのstyle属性を変更</h4>
    <p><strong :style="{color: white, backgroundColor: bg}">style属性</strong> にプロパティから複数のインラインスタイルが指定できます
    </p>
    <hr />
    <h4>オブジェクト形式でstyle属性を変更</h4>
    <p><strong :style="styleObj">オブジェクト形式</strong> でも指定できます。
    </p>
    <hr />
  </div>
```

## JavaScript

```javascript
    const app = new Vue({
      el: "#app",
      data: {
        colors: 'color2',
        size: 'size',
        white: '#fafafa',
        bg: 'rgb(23, 116, 116)',
        active: true,
        active2: true,
        styleObj: {　color: '#fafafa', backgroundColor: 'rgb(23, 116, 116)'　},
      },
      computed: {
        addClass() {
          return { color: this.active2, 'font-rotate': !this.active2 }
        }
      },
    });
```
