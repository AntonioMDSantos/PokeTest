<!-- <template>
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
      console.log(pokemon)
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
</style> -->

<template>
  <article
  :class="{ showInfo: showInfo}"
  @click="showInfo = !showInfo">
  <div
      class="pokeCard"
      :style="{ backgroundColor: getBackgroundColor(evolution.type) }"
    >
      <img :src="evolution.image" />
      <h1>
        {{ evolution.name }}
      </h1>
    </div>
    <div class="info" v-if="showInfo">
    <p>HP: {{ selectedPokemon?.stats[5].base_stat }}</p>
    <p>Ataque: {{ selectedPokemon.stats[4].base_stat }}</p>
    <p>Defesa: {{ selectedPokemon.stats[3].base_stat }}</p>
    <p>Ataque especial: {{ selectedPokemon.stats[2].base_stat }}</p>
    <p>Defesa especial: {{ selectedPokemon.stats[1].base_stat }}</p>
    <p>Velocidade: {{ selectedPokemon.stats[0].base_stat }}</p>
    </div>
  </article>
</template>

<script>
export default {
  data() {
    return {
      showInfo: false
    }
  },
  props: {
    evolution: {
      type: Object,
      required: true,
    },
    selectedPokemon: {
      type: Object,
      required: true,
      default: () => {}
    }
  },
  methods: {
    getBackgroundColor(type) {
      switch (type) {
        case "fire":
          return "#e95c4d";
        case "water":
          return "#43ccff";
        case "grass":
          return "#00ca91";
        case "electric":
          return "#ffcc33";
        default:
          return "#a5a5a5";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
article {
  min-width: 300px;
  padding: 0.8rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 3px;
  &:hover {
    cursor: pointer;
    box-shadow: 5px 5px 5px 2px #3335;
  }
  .pokeCard {
    width: 100%;
    display: grid;
    align-items: center;
    justify-content: center;

    img {
      width: 10rem;
    }
    h1 {
      text-align: center;
    }
  }
}
</style>