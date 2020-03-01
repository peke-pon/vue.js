<template>
  <div id="app">
    <h1>13.props-$emit</h1>
    <p>総在庫数: {{ totalCount }}</p>
    <Number :total-number="counter1" :product="products[0]" @my-click="count1"></Number>
    <Number :total-number="counter2" :product="products[1]" @my-click="count2"></Number>
    <Number @my-click="disp = $event"></Number>
    <p>{{ disp }}</p>
  </div>
</template>

<script>
import Number from './components/Number.vue'

export default {
  name: 'App',
  data() {
    return {
      counter1: 10,
      counter2: 7,
      products: ['vue.js入門','Nuxt.js入門'],
      disp: '親のデータを表示'
    }
  },
  components: {
    Number
  },
  methods: {
    count1() {
      this.counter1--
    },
    count2() {
      this.counter2--
    }
  },
  computed: {
    totalCount: function() {
      return (this.counter1 + this.counter2)
    }
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
      text-align: center;
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