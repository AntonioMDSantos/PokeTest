<template>
  <section>
    <div :style="cardListStyle" class="card-list">
      <div class="card" v-for="evolution in evolutions" :key="evolution.name">
        <PokeCard :evolution="evolution" :selectedPokemon="selectedPokemon" />
      </div>
    </div>
  </section>
</template>

<script>
import PokeCard from "./PokeCard.vue";

export default {
  components: {
    PokeCard,
  },
  props: {
    evolutions: {
      type: Array,
      required: true,
    },
    selectedPokemon: {
      type: Object,
      required: true,
    },
  },
  computed: {
    cardListStyle() {
      const cardCount = this.evolutions.length;
      if (cardCount === 3) {
        return {
          display: "flex",
          "flex-wrap": "wrap",
          gap: "1rem",
        };
      } else if (cardCount === 2) {
        return {
          display: "flex",
          "flex-wrap": "wrap",
          gap: "6rem",
        };
      } else {
        return {
          display: "flex",
          "flex-wrap": "wrap",
          gap: "1rem",
        };
      }
    },
  },
};
</script>

<style lang="scss">
.card {
  width: calc(100% / 3 - 1rem);
}
</style>