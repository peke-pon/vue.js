# 2.ディレクティブ

## View

![](https://i.imgur.com/Qu1D8CB.png)


## HTML

```html
  <div id="app">
    <h2>2.ディレクティブ</h2>
    <p>v-text</p>
    <p v-text="text"></p>
    <hr />
    <p>v-html</p>
    <p v-html="text2"></p>
    <hr />
    <p>v-bind</p>
    <p><a v-bind:href="url">v-bind</a> は属性値を変数から適用させる</p>
    <hr />
    <p>v-bind省略形</p>
    <p><a :href="url" :style="color">v-bind</a> :(コロン)で省略して書くこともできる</p>
    <hr />
    <p>v-bindオブジェクト構文</p>
    <p><a v-bind="{href: url, style }">v-bind</a> オブジェクト形式で属性値を複数指定する</p>
    <hr />
    <p>v-bindオブジェクト変数</p>
    <p><a v-bind="link">v-bind</a> オブジェクト形式のvue変数から属性値を指定する</p>
    <hr />
    <p>属性を変数指定</p>
    <p>タグの属性は<span :[attr]="style">:[変数名]</span>から指定ができる</p>
    <hr />
  </div>
```

## JavaScript

```javascript
const app = new Vue({
      el: "#app",
      data: {
        text: 'v-textは変数の値を表示できる（マスタッシュ構文と同じ）',
        text2: '<span style="font-weight: bold;">v-html</span>はタグの表示ができる (ただしXSSに注意!)',
        url: 'https://jp.vuejs.org/v2/guide/class-and-style.html',
        color: 'color: navy',
        link: { href: 'https://jp.vuejs.org/v2/guide/class-and-style.html', style: 'color: navy' },
        style: 'color: teal; font-weight: bold;',
        attr: 'style'
      }
    });
```
