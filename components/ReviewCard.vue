<template>
  <div class="review-card">
    <div class="image-container">
      <img :src="review.picture.large" alt="" />
    </div>
    <div class="text-container">
      <h4>{{ review.login.username }}</h4>
      <v-rating
        v-model="rating"
        background-color="orange lighten-3"
        color="orange"
        medium
      ></v-rating>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rating: 0,
    };
  },
  props: ["review"],
};
</script>

<style scoped>
.review-card {
  margin-top: 1.5rem;
  height: 4rem;
  display: flex;
}
.text-container {
  margin-left: 2rem;
}
img {
  width: 4rem;
  height: 4rem;
  border-radius: 100%;
}
p {
  color: grey;
}
</style>