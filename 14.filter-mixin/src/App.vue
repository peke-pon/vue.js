<template>
  <div id="app">
    <h2>14.filter/mixin</h2>
    <h3>・filtersオプション</h3>
    <p>フィルターはパイプで複数つなぐことができる</p>
    <p>価格: <span class="price">{{price | taxPrice | numberFormat}}</span>円(税込)</p>
    <small>※ただし、メソッドのように再描画される度に実行されるので注意</small>
    <hr>
    <mixin></mixin>
  </div>
</template>

<script>
import mixin from '@/mixin.vue';
import mix from '@/mix.js';

export default {
  name: 'App',
  components: {
    mixin,
  },
  mixins: [mix],
};
</script>

<style>
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
