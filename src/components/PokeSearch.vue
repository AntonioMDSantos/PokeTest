<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" v-model="name" />
    <button type="submit">Buscar</button>
  </form>
</template>
<script>
export default {
  data() {
    return {
      name: ''
    };
  },
  methods: {
    handleSubmit() {
      this.$emit('search', this.name);
    }
  }
};
</script>

<style lang="scss" scoped>

</style>