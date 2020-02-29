<template>
  <div>
    <p>いいね ( {{ count2 }} ) <button @click="count2++">+</button></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count2: 7
    }
  },
}
</script>

<style scoped>
  button {
  border: 1px solid rgb(32, 161, 133);
  background: rgb(29, 163, 141);
  border-radius: 5px;
  padding: 1em, 2em;
  color: #ffffff;
}
</style>