<template>
  <div id="carouselDesktop" class="carousel slide carousel-dark" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div v-for="(desktop, index) in desktops"
           class="carousel-item"
           :class="{ active: index === 0 }">
        <div class="d-none d-md-block">
          <img :src="desktop" class="d-block w-100" alt="...">
        </div>
      </div>
    </div>

    <button class="carousel-control-prev control" type="button" data-bs-target="#carouselDesktop" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next control" type="button" data-bs-target="#carouselDesktop" data-bs-slide="next">
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

const desktops = ref('')

onMounted(async () => {
  desktops.value = props.banner.home[0].desktop.default
})
</script>

<style scoped>
.carousel {
  width: 100%;
  height: auto;
}
</style>