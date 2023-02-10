<template>
  <div>
    <ul>
      <li v-for="evolution in evolutions" :key="evolution.name">
        <PokeCard :evolution="evolution" :selectedPokemon="selectedPokemon" />
      </li>
    </ul>
  </div>
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