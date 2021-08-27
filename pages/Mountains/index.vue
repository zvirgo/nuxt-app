<template>
  <v-container>
    <v-btn color="orange" dark @click="$fetch">Refresh</v-btn>
    <p v-if="$fetchState.pending">Fetching mountains...</p>
    <p v-else-if="$fetchState.error">An error occurred :(</p>
    <MountainCard
      v-else
      v-for="mountains in totalMountains"
      :key="mountains.title"
      :mountain="mountains"
    />
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      totalMountains: [],
    };
  },
  async fetch() {
    this.totalMountains = await fetch("https://api.nuxtjs.dev/mountains").then(
      (res) => res.json()
    );
  },
};
</script>

<style>
</style>