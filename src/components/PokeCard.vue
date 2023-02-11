<template>
  <article :class="{ showInfo: showInfo }" @click="showInfo = !showInfo">
    <div
      class="pokeCard"
      :style="{ backgroundColor: getBackgroundColor(evolution.type) }"
    >
      <div class="image">
        <img :src="evolution.image" />
      </div>
      <h1>
        {{ evolution.name }}
      </h1>
    </div>
    <div class="info" v-if="showInfo">
      <p>HP: <span>{{ selectedPokemon?.stats[5].base_stat }}</span></p>
      <p>Ataque: {{ selectedPokemon.stats[4].base_stat }}</p>
      <p>Defesa: {{ selectedPokemon.stats[3].base_stat }}</p>
      <p>Atq especial: {{ selectedPokemon.stats[2].base_stat }}</p>
      <p>Def especial: {{ selectedPokemon.stats[1].base_stat }}</p>
      <p>Velocidade: {{ selectedPokemon.stats[0].base_stat }}</p>
      <p>Altura: {{ selectedPokemon.height }}</p>
      <p>Peso: {{ selectedPokemon.weight }}</p>
    </div>
  </article>
</template>

<script>
export default {
  data() {
    return {
      showInfo: false,
    };
  },
  props: {
    evolution: {
      type: Object,
      required: true,
    },
    selectedPokemon: {
      type: Object,
      required: true,
      default: () => {},
    },
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
    border-radius: 0.3rem;
    width: 100%;
    display: grid;
    align-items: center;
    justify-content: center;
    .image {
      background: white;
      border-radius: 50%;
      width: 11vh;
      height: 11vh;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        max-width: 100%;
      }
    }

    h1 {
      text-transform: capitalize;
      text-align: center;
      font-size: 2.6vh;
    }
  }
  .info {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    p{
      text-align: center;
      padding: .5rem;
      border-radius: .3rem;
      background: rgb(194, 194, 194);
      margin: .3rem;
      margin-top: .7rem;
    }
  }
  @media (max-width: 768px) {
      min-width: calc(100% - 2rem);
      .info {
        display: initial;
      }
      h1 {
        font-size: 1rem;
      }
      .image {
        width: 7vh;
        height: 7vh;
      }
  }
}
</style>