<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h4>{{ cardsSection.title }}</h4>
      </v-col>
      <v-col cols="3" v-for="card in cardsSection.cards" :key="card.id">
        <SmallCard :card="card" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import SmallCard from "./SmallCard.vue";
export default {
  components: { SmallCard },
  data() {
    return {};
  },
  props: ["cardsSection"],
};
</script>

<style>
</style>