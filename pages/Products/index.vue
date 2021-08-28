<template>
  <div>
    <v-container>
      <v-row>
        <LargeCardDisplay
          v-for="cardInfo in largeCardInfo"
          :key="cardInfo.id"
          :cardsSection="cardInfo"
        />
        <SmallCardDisplay
          v-for="cardInfo in smallCardInfo"
          :key="cardInfo.id"
          :cardsSection="cardInfo"
        />
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { largeCardSections, smallCardSections } from "../../assets/data.js";
import LargeCardDisplay from "../../components/LargeCardDisplay.vue";
import SmallCardDisplay from "../../components/SmallCardDisplay.vue";
import TopHeader from "../../components/TopHeader.vue";
export default {

  components: { LargeCardDisplay, SmallCardDisplay,TopHeader},

  data() {
    return {
      largeCardInfo: largeCardSections,
      smallCardInfo: smallCardSections,
    };
  },
   head: {
    titleTemplate: "%s | nuxt-app",
    title: "Products Page",
     htmlAttrs: {
      lang: 'en',
      amp: true
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
a {
  text-decoration: none;
}
</style>