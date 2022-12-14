<template>
  <div class="newPage">
    <p>Voce esta na pagina: {{ pageNumber }}</p>
  </div>
</template>

<script setup>

import {computed, onMounted, ref, watch} from 'vue';
import {useRoute} from 'vue-router'

const route = useRoute()

const pageNumber = computed(() => route.params.id)

</script>

<style scoped>
.newPage {
  display: flex;
  align-items: center;
  justify-items: center;
  width: 100%;
  justify-content: center;
  padding: 2rem;
}
</style>