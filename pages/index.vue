<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <LargeCardDisplay
            v-for="cardInfo in largeCardInfo"
            :key="cardInfo.id"
            :cardsSection="cardInfo"
          />
        </v-col>
        <v-col cols="12">
          <SmallCardDisplay
            v-for="cardInfo in smallCardInfo"
            :key="cardInfo.id"
            :cardsSection="cardInfo"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { largeCardSections, smallCardSections } from "../assets/data";
import LargeCardDisplay from "../components/LargeCardDisplay.vue";
import SmallCardDisplay from "../components/SmallCardDisplay.vue";
import TopHeader from "../components/TopHeader.vue";
export default {
  components: { LargeCardDisplay, SmallCardDisplay, TopHeader },
  data() {
    return {
      largeCardInfo: largeCardSections,
      smallCardInfo: smallCardSections,
    };
  },
};
</script>

<style lang="scss" scoped>
a {
  text-decoration: none;
  color: unset !important;
}
</style>