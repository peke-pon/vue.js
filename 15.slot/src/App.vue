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

<style lang="scss">
body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fbfbfc;
  color: #454659;
  height: 100vh;
}

h2 {
  margin-top: 1em;
  margin-bottom: 1em;
}

a {
  text-decoration: none;
}

p {
  padding: 0 1em;
}

ul {
  list-style: none;
  margin-left: -1.5em;
}

li {
  font-weight: bold;
  margin-bottom: 0.5em;
}

hr {
  margin: 30px 0;
}

button {
  margin-left: 2em;
}

td {
  padding: 0 1em;
}

strong {
  padding: 0.5em;
}

.price {
  font-size: 2.4em;
  font-weight: bold;
  color: rgb(255, 84, 16);
}
</style>
