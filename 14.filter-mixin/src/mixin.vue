<template>
  <div>
    <h3>・mixinsオプション</h3>
    <p>オプションを共通化したい場合はmixinを使う</p>
    <p>
      価格:
      <span class="price">{{price | taxPrice | numberFormat}}</span>円(税込)
    </p>
    <p>コンフリクトしたデータはインスタンスが優先される</p>
    <hr>
    <p>※ライフサイクルフックの場合はmixinとインスタンス両方実行される。<br>
    (コンソールを確認する) </p>
  </div>
</template>

<script>
import mix from '@/mix.js';

export default {
  mixins: [mix],
  data() {
    return {
      price: 3600,
    };
  },
  created() {
    console.log('インスタンス内のcreated');
  },
};
</script>

<style>
</style>
