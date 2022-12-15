<template>
  <div class="d-flex justify-content-center">
    <div
        class="dropdown"
        v-for="(item, index) in itens" :key="item.id"
    >
      <button
          @click="irparapagina(index+1)"
          class="btn dropdown-toggle btn-sm p-3"
          type="button"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
      >
        <img :src="item.icone" alt="" class="size d-none d-sm-block">
        {{ item.label }}
      </button>

      <div class="dropdown-menu" v-show="item.sub.length">
        <div class="d-flex">
          <div v-for="i in item.sub">
            <div class="dropdown-header">{{ i.label }}</div>
            <div>{{ i.icone }}</div>

            <div v-for="i in i.sub" class="dropdown-item">
              <img :src="i.icone" alt="">
              {{ i.label }}
            </div>
          </div>
        </div>
      </div>

      <div class="d-flex">
        <div class="divider-w d-md-none d-lg-block d-lg-none d-xl-block d-xl-none"></div>
      </div>
    </div>
  </div>
</template>

<script setup>

import {inject, onMounted, ref} from 'vue'
import router from "../../router.js";

const axios = inject('axios')
const itens = ref([])
const subs = ref('')

function irparapagina(idItem) {
  router.push({
    name: 'NewPage',
    params: {
      id: idItem,
    }
  })
}

onMounted(async () => {
  await axios
      .get('https://tools.wellcommerce.com.br/teste/menu.json')
      .then(response => {
        itens.value = response.data.menu.itens
        subs.value = response.data.menu.itens.sub
      })
  console.log(itens.value, 'menu')
})


</script>

<style scoped>
.divider-w {
  display: flex;
  background-color: #B8B8B8;
  width: 18rem;
  height: 0.2px;
  justify-items: center;
}

.btn {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}
</style>