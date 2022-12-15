<template>
  <img :src="item.icone" alt="" class="size">
  <button
      @click="irparapagina(index+1)"
      class="btn dropdown-toggle btn-sm"
      type="button"
      data-bs-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
  >
    {{ item.label }}
  </button>
</template>

<script setup>

</script>

<style scoped>

</style>