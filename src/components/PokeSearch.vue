<template>
  <form @submit.prevent="handleSubmit">
    <h1>Pokemon</h1>
    <input type="text" v-model="name" placeholder="Digite o nome de um pokemon"/>
    <button type="submit">Buscar</button>
  </form>
</template>
<script>
export default {
  data() {
    return {
      name: "",
    };
  },
  methods: {
    handleSubmit() {
      this.$emit("search", this.name);
    },
  },
};
</script>

<style lang="scss" scoped>

form {
  h1 {
    color: #ffff;
  }
  input {
    margin: 1rem;
    padding: 0.3rem;
    border: 2px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    width: 300px;
    outline: 0;
  }
  button {
    padding: 8px;
    border: none;
    background-color: #4caf50;
    color: white;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
      cursor: pointer;
      background-color: #3e8341;
    }
  }
}
</style>
