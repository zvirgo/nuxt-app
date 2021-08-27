<template>
<nuxt-link :to="`/products/${card.id}`">
  <img
    class="white--text align-end"
    height="250px"
    width="250px"
    :src="require(`@/assets/images/${card.image}`)"
    alt=""
  />
  </nuxt-link>
</template>

<script>
export default {
  props: ["card"],
};
</script>

<style>
</style>