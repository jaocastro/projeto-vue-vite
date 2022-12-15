<template>
  <div id="carouselPitchbar" class="carousel slide carousel-dark" data-bs-ride="carousel">
    <div class="carousel-inner bg-light pitchbar">
      <div v-for="(pitchbar, index) in pitchbars"
           class="carousel-item"
           :class="{ active: index === 0 }">
        <div class="d-lg-none d-xl-block d-xl-none d-md-none d-lg-block">
          <div class="divider-t"></div>
          <div class="pitchbar-item">
            <img :src="pitchbar.icone" alt="" class="icons">
            <div class="pitchbar-item-text">
              <p class="label">{{ pitchbar.label }}</p>
              <p class="destaque">{{ pitchbar.destaque }}</p>
            </div>
          </div>
          <div class="divider-b"></div>
        </div>
      </div>
    </div>

    <button class="carousel-control-prev control d-lg-none d-xl-block d-xl-none d-md-none d-lg-block" type="button" data-bs-target="#carouselPitchbar" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </button>
    <button class="carousel-control-next control d-lg-none d-xl-block d-xl-none d-md-none d-lg-block" type="button" data-bs-target="#carouselPitchbar" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </button>
  </div>
</template>

<script setup>
import {onMounted, ref, watch} from "vue";

const props = defineProps({
  pitchbar: {
    type: Object,
    required: true
  }
})

const pitchbars = ref('')

onMounted(async () => {
  pitchbars.value = props.pitchbar.itens
})
</script>

<style scoped>
.divider-t {
  height: 1px;
  margin-bottom: 1rem;
  background-color: #B8B8B8;
}

.divider-b {
  height: 1px;
  margin-top: 1rem;
  background-color: #B8B8B8;
}

.pitchbar {
  display: flex;
  /*align-items: center;*/
  justify-items: center;
  padding: 0.5rem;
}

.carousel {
  width: 100%;
  height: auto;
}

.pitchbar-item {
  display: flex;
  align-items: center;
  gap: 2rem;
  justify-content: center;
  padding: 5px;
  justify-items: center;
}

.pitchbar-item-text {
  text-align: start;
}

.label {
  margin: 0px;
  font-size: 0.9rem;
}

.destaque {
  margin: 0px;
  font-size: 1.1rem;
  font-weight: 640;
}

.icons {
  width: 3em;
  height: 3em;
}

</style>