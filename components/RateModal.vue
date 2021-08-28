<template>
  <v-row justify="center">
    <v-dialog v-model="showModal" persistent max-width="400">
      <v-card>
        <v-card-title class="text-h5">
          You can Rate to this mountain
        </v-card-title>
        <div class="d-flex justify-center align-center pa-2">
          <vc-date-picker :value="null" color="indigo" is-dark is-range />
        </div>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            dark
            @click="
              () => {
                addItem(product.id);
                closeModal();
              }
            "
          >
            Rate it
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      dialog: false,
    };
  },
  props: {
    showModal: {
      type: Boolean,
      default: false,
    },
    product: {},
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
    ...mapMutations(["addItem"]),
  },
};
</script>

<style lang="scss">
.v-btn {
    text-transform: none !important;
}
</style>