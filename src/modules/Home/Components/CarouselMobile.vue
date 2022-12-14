<template>
  <div id="carouselMobile" class="carousel slide carousel-dark" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div v-for="(mobile, index) in mobiles"
           class="carousel-item"
           :class="{ active: index === 0 }">
        <div class="d-lg-none d-xl-block d-xl-none d-md-none d-lg-block">
          <img :src="mobile" class="d-block w-100" alt="...">
        </div>
      </div>
    </div>

    <button class="carousel-control-prev control d-lg-none d-xl-block d-xl-none d-md-none d-lg-block" type="button" data-bs-target="#carouselMobile" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next control d-lg-none d-xl-block d-xl-none d-md-none d-lg-block" type="button" data-bs-target="#carouselMobile" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>

  </div>
</template>

<script setup>
import {onMounted, ref, watch} from "vue";

const props = defineProps({
  banner: {
    type: Object,
    required: true
  }
})

const mobiles = ref('')

onMounted(async () => {
  mobiles.value = props.banner.home[0].mobile.default
})
</script>

<style scoped>
.carousel {
  width: 100%;
  height: auto;
}
</style>