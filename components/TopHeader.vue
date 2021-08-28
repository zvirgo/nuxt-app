<template>
  <v-card class="mx-auto overflow-hidden">
    <v-app-bar color="deep-purple" dark>
      <v-toolbar-title> <nuxt-link to="/">Home </nuxt-link></v-toolbar-title>
      <v-spacer></v-spacer>
      <nuxt-link to="/mountains">
        <v-btn icon> <v-icon> mdi-image-filter-hdr </v-icon></v-btn>
      </nuxt-link>
      <nuxt-link to="/my-items">
        <v-btn v-tooltip="'Rated Mountain'" icon> <v-icon> mdi-heart   </v-icon></v-btn>
      </nuxt-link>
    </v-app-bar>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      group: null,
    };
  },
};
</script>

<style>
a {
  text-decoration: none;
  color: unset !important;
}
</style>