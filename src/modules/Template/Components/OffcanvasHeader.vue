<template>
  <div class="d-flex flex-column justify-content-center header">
    <div class="p-2 mt-3">
      <router-link to="/" >
        <img src="src/assets/web-logo-toopo.svg"
             alt=""
             class="img-fluid">
      </router-link>
    </div>

    <div class="d-flex mt-3 gap-2 bg-warning px-2">
      <div class="item">
        <font-awesome-icon icon="fa-solid fa-user fa-2xl" class="icons"/>
        <p class="m-0">Ola, entre ou cadastre-se!!</p>
      </div>

      <div class="item">
        <font-awesome-icon icon="fa-solid fa-star fa-2xl" class="icons"/>
        <p class="m-0">Lista de desejos</p>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.header {
  width: 100%;
  padding: 0px;
}

.img-fluid{
  height: 2.6rem;
}

.item {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 50%;
}

.icons {
  width: 1.3em;
  height: 1.3em;
  padding: 0.4rem;
}
</style>