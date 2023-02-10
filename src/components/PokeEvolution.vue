<template>
  <div class="card" @click="emitSelectedPokemon">
    <div
      class="pokeCard"
      :style="{ backgroundColor: getBackgroundColor(evolution.type) }"
    >
      <img :src="evolution.image" />
      <h1>
        {{ evolution.name }}
      </h1>
    </div>
  </div>
</template>
  
  <script>
export default {
  props: {
    evolution: {
      type: Object,
      required: true,
    },
  },
  methods: {
    getBackgroundColor(type) {
      console.log(type);
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
    emitSelectedPokemon() {
      this.$emit('select', this.evolution);
    },
  },
};
</script>

  <style lang="scss" scoped>
$black: rgb(46, 46, 46);
.card {
  display: inline-block;
  width: 15rem;
  height: 21rem;
  border-radius: 10px;
  text-align: center;
  margin: 3rem;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
  .pokeCard {
    border-radius: 10px;
    height: 21rem;

    img {
      margin: 2rem;
      height: 10rem;
      object-fit: cover;
      border-radius: 50%;
      border: 2px solid rgba(255, 255, 255, 0.9);
      background-color: rgba(255, 255, 255, 0.6);
    }

    h1 {
      text-transform: capitalize;
      color: $black;
    }
  }
}
</style>
  