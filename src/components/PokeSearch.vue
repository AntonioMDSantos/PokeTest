<template>
  <form @submit.prevent="handleSubmit">
    <h1>Pokemon</h1>
    <input 
      type="text" 
      v-model="name" 
      placeholder="Digite o nome de um pokemon"
      @input="searchPokemon"
    />
    <ul 
      v-if="showAutocomplete" 
      v-bind:style="{ maxHeight: isMobile ? '5rem' : '10rem' }"
    >
      <li v-for="option in autocompleteOptions" :key="option" @click="selectOption(option)">
        {{ option }}
      </li>
    </ul>
    <button type="submit">Buscar</button>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      name: "",
      autocompleteOptions: [],
      showAutocomplete: false,
      isMobile: false,
    };
  },
  methods: {
    async searchPokemon() {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=1000`);
        const pokemons = response.data.results;
        this.autocompleteOptions = pokemons
          .filter(pokemon => pokemon.name.includes(this.name))
          .map(pokemon => pokemon.name)
          .slice(0, this.isMobile ? 5 : 10); 
        this.showAutocomplete = true;
      } catch (error) {
        console.error(error);
      }
    },
    selectOption(option) {
      this.name = option;
      this.showAutocomplete = false;
    },
    handleSubmit() {
      this.$emit("search", this.name);
    },
    checkMobile() {
      this.isMobile = window.innerWidth < 768; 
    },
  },
  mounted() {
    this.checkMobile(); 
    window.addEventListener("resize", this.checkMobile); 
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.checkMobile); 
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

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  padding: 0.5rem;
  background-color: #f2f2f2;
  border: 1px solid #ccc;
  cursor: pointer;

  &:hover {
    background-color: #e6e6e6;
  }
}

@media (max-width: 768px) {
  .autocomplete {
    position: absolute;
    z-index: 1;
    width: 100%;
  }
}
</style>
