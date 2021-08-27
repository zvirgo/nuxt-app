<template>
  <v-container>
    <MyItem v-for="item in myRentals" :key="item.id" :item="item" />
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import MyItem from "../components/MyItem.vue";
export default {
  components: { MyItem },
  layout: "no-nav",
  computed: {
    ...mapState(["myRentals"]),
  },
};
</script>

<style>
</style>