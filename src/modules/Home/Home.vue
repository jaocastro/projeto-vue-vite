<template>
  <div class="d-flex flex-column align-items-top size">
    <carousel-desktop
        v-for="(banner, index) in banners"
        :key="index"
        :banner="banner"
    />

    <carousel-mobile
        v-for="(banner, index) in banners"
        :key="index"
        :banner="banner"
    />

    <pitchbar-desktop
        v-for="(pitchbar, index) in pitchbars"
        :key="index"
        :pitchbar="pitchbar"
    />

    <pitchbar-mobile
        v-for="(pitchbar, index) in pitchbars"
        :key="index"
        :pitchbar="pitchbar"
    />

  </div>
</template>

<script setup>
import {inject, onMounted, ref} from 'vue'
import CarouselDesktop from './Components/CarouselDesktop.vue'
import CarouselMobile from './Components/CarouselMobile.vue'
import PitchbarDesktop from "./Components/PitchbarDesktop.vue";
import PitchbarMobile from "./Components/PitchbarMobile.vue";

const axios = inject('axios')
const banners = ref([])
const pitchbars = ref([])

// onMounted(async () => {
//   await axios
//       .get('https://tools.wellcommerce.com.br/teste/banner.json')
//       .then(response => {
//         banners.value = response.data
//       })
// })
//
// onMounted(async () => {
//   await axios
//       .get('https://tools.wellcommerce.com.br/teste/pitchbar.json')
//       .then(response => {
//         pitchbars.value = response.data
//       })
// })

onMounted(async () => {
  await axios
      .get('http://localhost:3000/banners')
      .then(response => {
        banners.value = response.data.home
      })
  console.log(banners.value, 'banners')
})

onMounted(async () => {
  await axios
      .get('http://localhost:3000/pitchbar')
      .then(response => {
        pitchbars.value = response.data
      })
  console.log(pitchbars.value, 'pitcbars')
})




</script>

<style scoped>
.size {
width: 100%;
}
</style>