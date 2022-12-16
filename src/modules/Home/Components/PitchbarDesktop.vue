<template>
  <div class="pitchbar bg-light d-flex flex-column">
    <div class="divider-t d-none d-md-block"></div>
    <div class="d-flex justify-content-center gap-5">
      <div
          class="d-none d-md-block"
          v-for="pitchbar in pitchbars"
      >
        <div class="pitchbar-item">
          <div class="divider-w"></div>
          <img :src="pitchbar.icone" alt="" class="icons">
          <div class="pitchbar-item-text">
            <p class="label">{{ pitchbar.label }}</p>
            <p class="destaque">{{ pitchbar.destaque }}</p>
          </div>
        </div>
      </div>
      <div class="divider-w d-none d-md-block"></div>
    </div>
    <div class="divider-b d-none d-md-block"></div>
  </div>
</template>

<script setup>

import {onMounted, ref} from "vue";

const props = defineProps({
  pitchbar: {
    type: Object,
    required: true
  }
})

const pitchbars = ref('')

onMounted(async () => {
  pitchbars.value = props.pitchbar
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

.divider-w {
  width: 2px;
  height: 3rem;
  margin-right: 1rem;
  background-color: #B8B8B8;
  color: #B8B8B8;
}

.pitchbar {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: auto;
  padding: 0.8rem;
}

.pitchbar-item {
  display: flex;
  align-items: center;
  gap: 2rem;
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