<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h4>{{ cardsSection.title }}</h4>
      </v-col>
      <v-col cols="12">
        <p>{{ cardsSection.snippet }}</p>
      </v-col>
      <v-col cols="4"  v-for="card in cardsSection.cards"
          :key="card.id">
        <LargeCard
          :card="card"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import LargeCard from "./LargeCard.vue";
export default {
  components: { LargeCard },
  data() {
    return {};
  },
  props: ["cardsSection"],
};
</script>

<style>

</style>