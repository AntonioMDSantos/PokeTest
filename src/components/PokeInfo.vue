<template>
  <div v-if="showInfo">
    <h2>{{ selectedPokemon.name }}</h2>
    <img :src="selectedPokemon.sprites.front_default" />
    <p>HP: {{ selectedPokemon.stats[5].base_stat }}</p>
    <p>Ataque: {{ selectedPokemon.stats[4].base_stat }}</p>
    <p>Defesa: {{ selectedPokemon.stats[3].base_stat }}</p>
    <p>Ataque especial: {{ selectedPokemon.stats[2].base_stat }}</p>
    <p>Defesa especial: {{ selectedPokemon.stats[1].base_stat }}</p>
    <p>Velocidade: {{ selectedPokemon.stats[0].base_stat }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedPokemon: null,
      showInfo: false
    };
  },
  methods: {
    showPokemonInfo(pokemon) {
      this.selectedPokemon = pokemon;
      this.showInfo = true;
    },
    hidePokemonInfo() {
      this.selectedPokemon = null;
      this.showInfo = false;
    }
  },
  created() {
    this.$on('select', this.showPokemonInfo);
    this.$on('hide', this.hidePokemonInfo);
  }
};
</script>

<style scoped lang="scss">
  .poke-card {
    background-color: white;
    border: 1px solid black;
    padding: 20px;
    text-align: center;
    width: 300px;
  }
</style>