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
@import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Karla&family=PT+Sans+Narrow:wght@700&family=Quicksand:wght@700&family=Source+Code+Pro&display=swap');
form{
  h1 {
    font-family: 'Fredoka One', cursive;
    color: white;
  }
  input {
  font-family: 'Fredoka One', cursive;
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
  background-color: #4CAF50;
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
