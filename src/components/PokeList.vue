<template>
  <section>
    <div class="card-list">
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
    PokeCard
  },
  props: {
    evolutions: {
      type: Array,
      required: true
    },
    selectedPokemon: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss">
.card-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem; 
}

.card {
  width: calc(100% / 3 - 1rem);

}
</style>