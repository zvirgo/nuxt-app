<template>
  <div>
    <h3>Custom Rates</h3>
    <div v-if="!$fetchState.pending">
        <ReviewCard
        v-for="reviewer in reviewers.results"
        :key="reviewer.login.uuid"
        :review="reviewer"/>
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import ReviewCard from "./ReviewCard.vue";
export default {
  components: {
    ReviewCard,
  },
  data() {
    return {
      reviewers: [],
    };
  },
  async fetch() {
    this.reviewers = await fetch("https://randomuser.me/api/?results=5").then(
      (res) => res.json()
    );
  },
};
</script>

<style>
</style>