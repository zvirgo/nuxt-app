<template>
  <div v-if="product" class="container py-5">
    <div class="hero-container">
      <img
        :src="require(`@/assets/images/${product.image}`)"
        alt=""
        class="image"
      />
      <div class="info-box">
        <h1>{{ product.title }}</h1>
        <p class="snippet">{{ product.snippet }}</p>
        <v-btn color="success" dark @click="showRentalModal">Rate It</v-btn>
        <RentModal
          :showModal="showModal"
          :product="product"
          @closeModal="showModal = false"
        />
      </div>
    </div>
    <div class="whats-included-container">
      <div class="included-container">
        <h6>Height:</h6>
        <p>
          {{ product.height }}
        </p>
      </div>
      <div class="included-container">
        <h6>continent</h6>
        <p>
          {{ product.continent }}
        </p>
      </div>
    </div>
    <div class="description-container">
      <p>
        {{ product.description }}
      </p>
    </div>
    <Reviews />
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
};
</script>

<style scoped>
.hero-container {
  display: flex;
  justify-content: space-between;
}

.image {
  width: 59%;
  height: 25rem;
}

.info-box {
  width: 39%;
  background-color: rgba(207, 201, 201, 0.322);
  padding: 1rem;
  border-radius: 0.5rem;
}

.whats-included-container {
  border-bottom: 0.1rem solid rgba(128, 128, 128, 0.151);
}

.description-container {
  border-bottom: 0.1rem solid rgba(128, 128, 128, 0.151);
  padding-bottom: 2rem;
  margin-bottom: 2rem;
}

.included-container {
  margin-top: 1.5rem;
}

h1 {
  font-size: 1.75rem;
}

h6 {
  font-size: 1.15rem;
  font-weight: 400;
}

p {
  color: grey;
}

.snippet {
  color: rgba(0, 0, 0, 0.774);
  margin-top: 1rem;
}

button {
  width: 100%;
  border: none;
  padding: 0.5rem;
  color: white;
  font-weight: 700;
  padding: 1rem 4rem;
  border-radius: 100rem;
  background-color: rgb(231, 81, 43);
  color: white;
  font-weight: 700;
  transition: 0.5s;
}

.description-container {
  margin-top: 3rem;
  color: grey;
}

.padding {
  padding: 10rem 0;
}
</style>