<template>
  <div class="d-flex justify-content-center gap-5">
    <div
        class="dropdown"
        v-for="(item, index) in itens" :key="item.id"
    >
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
    </div>
  </div>
</template>

<script setup>

import {inject, onMounted, ref} from 'vue'
import router from "../../router.js";
import {useRoute} from 'vue-router'

const route = useRoute()
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
.dropdown-menu {

}

</style>