export default {
  data() {
    return {
      price: 2480,
    };
  },
  created() {
    console.log('mixin内のcreated');
  },
  filters: {
    numberFormat(value) {
      return value.toLocaleString();
    },
    taxPrice(value) {
      return Math.round(value * 1.08);
    },
  },
};
