# 14.filter/mixin

[demo](https://peke-pon.github.io/vue.js/15.slot/dist/)

## View
![](https://i.imgur.com/rT50OQ9.png)

## src/App.vue

```html
<template>
  <div id="app">
    <h2>15.slot</h2>
    <slot-child>
      <h3>デフォルトslot</h3>
      <p>{{ message }}</p>
      <template v-slot:name>
        <h3>名前付きスロット</h3>
        <p>templateタグに<strong>v-slot:slot名</strong>で指定したスロットへ渡す</p>
        <hr />
      </template>
      <template v-slot:[fall]>
      </template>
      <p>タグ内の<strong>名前のついていない要素</strong>はまとめてv-slot:defaltへ渡される</p>
      <hr />
      <template #props="slotProps">
        <h3>スロットプロパティ</h3>
        <p>{{ slotProps.message2.msg2 }}</p>
        <p>{{ slotProps }}</p>
      </template>
    </slot-child>
    <hr />
  </div>
</template>

<script>
import SlotChild from "@/components/SlotChild.vue";
export default {
  name: "App",
  components: {
    SlotChild
  },
  data() {
    return {
      message: "HTML要素を子コンポーネントへ渡し、子要素のslotで受け取る",
      fall: 'fallback'
    };
  }
};
</script>
```

## src/components/SlotChild.vue

```html
<template>
  <div>
    <slot></slot>
    <slot name="name"></slot>
    <slot name="fallback">
      <h3>フォールバックコンテンツ</h3>
      <p>親要素のslot内に要素がない場合は表示される</p>
      <hr>
    </slot>
    <slot name="props" :message2="message2"></slot>
  </div>
</template>

<script>
export default {
  name: "SlotChild",
  data() {
    return {
      message: "子コンポーネントの変数で書き換えはされない",
      message2: {
        msg2: "slotタグの属性を指定することでデータを渡す"
      }
    };
  }
};
```
