<template>
  <div>
    <h4>商品: {{ product }}</h4>
    <p>在庫数: {{ totalNumber }}</p>
    <button @click="decrement">購入</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      emitData: '子コンポーネントからデータを渡す'
    }
  },
  props: {
    totalNumber: Number,
    product: {
      type: String,
      default: '在庫なし',
    }
  },
  methods: {
    decrement() {
      if(this.totalNumber <= 0) {
        return
      }
      this.$emit('my-click', this.emitData)
    }
  },
}
</script>