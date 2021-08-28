<template>
  <v-container>
     <SocialHead
      :title="mountain.title"
      :description="mountain.description"
      :image="mountain.image"
    />
    <v-card class="mx-auto" max-width="1000">
      <v-img
        class="white--text align-end"
        height="500px"
        :src="mountain.image"
        :alt="mountain.title"
      >
      </v-img>
      <v-card-title>{{ mountain.title }} </v-card-title>
      <v-card-text class="text--primary">
        <h3>{{ mountain.continent }}</h3>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title
              >Height: <span> {{ mountain.height }} </span></v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title
              >Country:
              <span v-for="country in mountain.countries" :key="country">{{
                country
              }}</span></v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
        <p>{{ mountain.description }}</p>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
export default {
  async asyncData({ params, $axios }) {
    const mountain = await $axios.$get(
      `https://api.nuxtjs.dev/mountains/${params.slug}`
    );
    return { mountain };
  },
  head: {
    titleTemplate: "%s | nuxt-app",
    title: "Detail's Mountain Page",
    htmlAttrs: {
      lang: "en",
      amp: true,
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "My first Nuxt application",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
};
</script>

<style>
</style>