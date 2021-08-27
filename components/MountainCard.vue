<template>
  <v-container>
    <v-row class="d-flex align-center justify-center">
      <v-col cols="3">
        <img
          class="rounded"
          contain
          height="200"
          width="250"
          :src="mountain.image"
          :alt="mountain.title"
        />
      </v-col>
      <v-col cols="9">
        <h3 class="cyan--text darken-1">{{ mountain.continent }}</h3>
        <nuxt-link :to="`/mountains/${mountain.slug}`">{{ mountain.title }} </nuxt-link>
        <p>{{ mountain.description }}</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ['mountain']
};
</script>

<style>
</style>