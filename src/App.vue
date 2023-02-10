<template>
  <div id="app">
    <div class="searchText">
      <PokeSearch @search="getPokemon" />
    </div>
    <PokeInfo v-if="showInfo" v-bind:pokemon="selectedPokemon"  />
    <div class="evolutionPoke">
      <ul>
        <PokeEvolution
        v-for="evolution in evolutions"
          v-bind:key="evolution.id"
          v-bind:evolution="evolution"
          @select="showPokemonInfo"
        />
      </ul>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import PokeSearch from "./components/PokeSearch.vue";
import PokeInfo from "./components/PokeInfo.vue";
import PokeEvolution from "./components/PokeEvolution.vue";

export default {
  components: {
    PokeSearch,
    PokeInfo,
    PokeEvolution,
  },
  data() {
    return {
      selectedPokemon: null,
      evolutions: [],
      showInfo: false

    };
  },
  methods: {
    showPokemonInfo(pokemon) {
    this.selectedPokemon = pokemon;
    this.showInfo = true;
  },
   
    async getPokemon(name) {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`
        );
        const pokemon = response.data;
        this.selectedPokemon = pokemon;

        const speciesResponse = await axios.get(pokemon.species.url);
        const evolutionChainResponse = await axios.get(
          speciesResponse.data.evolution_chain.url
        );
        this.evolutions = [];

        const traverseChain = async (evolution) => {
          const evolutionResponse = await axios.get(
            `https://pokeapi.co/api/v2/pokemon/${evolution.species.name}`
          );
          this.evolutions.push({
            name: evolution.species.name,
            image: evolutionResponse.data.sprites.front_default,
            type: evolutionResponse.data.types[0].type.name,
          });
          if (evolution.evolves_to.length > 0) {
            evolution.evolves_to.forEach(traverseChain);
          }
        };

        traverseChain(evolutionChainResponse.data.chain);
      } catch (error) {
        console.error(error);
      }
      this.showInfo = false;
    },
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  ul {
    position: absolute;
  
  }
}


</style>