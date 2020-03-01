<template>
  <p>???? ( {{ count }} )<button @click="count++">+</button></p>
</template>

<script>
export default {
  data() {
    return {
      count: 12
    };
  }
};
</script>

<style>

</style>