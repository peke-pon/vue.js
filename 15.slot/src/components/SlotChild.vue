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
</script>

<style scoped lang="scss"></style>
