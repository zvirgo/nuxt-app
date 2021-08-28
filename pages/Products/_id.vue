<template>
  <div v-if="product">
    <v-card class="mx-auto my-12" max-width="800">
      <v-img
        height="250"
        :src="require(`@/assets/images/${product.image}`)"
      ></v-img>
      <v-card-title>{{ product.title }}</v-card-title>
      <v-card-text>
        <div>
          {{ product.description }}
        </div>
        <div>
          <v-chip-group active-class="deep-purple accent-4 white--text" column>
            <v-chip>Height: {{ product.height }}</v-chip>
          </v-chip-group>
        </div>
      </v-card-text>
      <v-divider class="mx-4"></v-divider>
      <v-card-text>
        <Reviews />
      </v-card-text>
      <v-card-actions>
        <v-btn color="success" dark @click="showRentalModal">Rate It</v-btn>
        <RateModal
          :showModal="showModal"
          :product="product"
          @closeModal="showModal = false"
        />
      </v-card-actions>
    </v-card>
  </div>

  <div v-else class="container padding">
    <PageNotFound />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      showModal: null,
    };
  },
  computed: {
    product() {
      return this.$store.getters.getProductById(this.$route.params.id);
    },
  },
  methods: {
    showRentalModal() {
      this.showModal = true;
    },
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