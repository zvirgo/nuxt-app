<template>
  <nuxt-link :to="`/products/${card.id}`">
    <v-card class="mx-auto" max-width="400">
      <v-img
        class="white--text align-end"
        height="200px"
        :src="require(`@/assets/images/${card.image || 'fe1.jpg'}`)"
      >
      </v-img>
      <v-card-title>{{ card.title }}</v-card-title>
      <v-card-text class="text--primary">
        <div>{{ card.snippet }}</div>
      </v-card-text>
    </v-card>
  </nuxt-link>
</template>

<script>
export default {
  props: ["card"],
};
</script>

<style lang="scss" scoped>
</style>