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
$card-width: 15rem;
article {
  min-width: $card-width;
  padding: 0.8rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 10px;
  background: white;
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
      max-width: 100%;
    }
    h1 {
      text-transform: capitalize;
      text-align: center;
      font-size: 1.5em;
    }
  }
 @media (max-width: 768px) {
    min-width: calc(100% - 2rem);
  }
}
</style>