// グローバルに登録したコンポーネントを使用
<template>
  <div>
    <h4>グローバルコンポーネント</h4>
    <p>ローカルコンポーネントを使い回す</p>
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
  </style>