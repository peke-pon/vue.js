<template>
    <div>
    <h4>ローカルコンポーネント</h4>
      <p>ローカルに登録したコンポーネントを使用</p>
      <counter2></counter2>
      <counter2></counter2>
      <p>グローバルに登録したコンポーネントを使用</p>
      <counter></counter>
      <counter></counter>
      <hr>
  </div>
</template>

<script>
import counter2 from './components/couter2.vue'

export default {
  components: {
    counter2
  }
}
</script>

<style>

</style>