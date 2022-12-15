<template>
  <nav class="navbar pb-0 bg-light navbar-expand-md fixed-top align-middle align-center">
    <div class="container p-3">
      <button class="navbar-toggler p-2 m-2"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="toggle offcanvasNavbar"
              aria-expanded="false"
              aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <router-link to="/" ><img src="../../assets/web-logo-toopo.svg" alt="" class="img-fluid"></router-link>

      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>

      <div class="offcanvas-lg d-flex gap-4">
        <div class="itemsOptions">
          <font-awesome-icon icon="fa-solid fa-location-dot fa-2xl" class="icons"/>
          <p>2 Lojas Fisicas</p>
        </div>
        <div class="itemsOptions">
          <font-awesome-icon icon="fa-solid fa-star fa-2xl" class="icons"/>
          <p>Lista de Desejos</p>
        </div>
        <div class="itemsOptions">
          <font-awesome-icon icon="fa-solid fa-user fa-2xl" class="icons"/>
          <p>Entrar</p>
        </div>
      </div>


      <!--      QUANDO ABRIR-->
      <div
          class="offcanvas offcanvas-start collapse"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
      >
        <div class="d-flex justify-content-end p-2 position-absolute flex-row-reverse btn">
          <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
          />
        </div>

        <offcanvas-header class="offcanvas-header"/>

        <div class="offcanvas-body p-0 menubar-mobile">
          <menu-bar class="menubar-mobile"/>
        </div>
      </div>
      <!--        ate aq-->
      <font-awesome-icon icon="fa-solid fa-cart-shopping fa-2xl" class="icons cart"/>
    </div>

    <div class="bg-warning teste offcanvas-lg justify-content-center" >
      <menu-bar class="menubar-desktop"/>
    </div>

  </nav>



</template>

<script setup>
import MenuBar from "./Menubar.vue";
import OffcanvasHeader from './Components/OffcanvasHeader.vue'


</script>

<style scoped>
.menubar-mobile {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  justify-items: center;
  margin: 2px;
  gap: 1.2rem;
}

.menubar-desktop {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px
}

.btn {
  right: 2px;
}

.offcanvas {
  max-width: 90%;
}

.img-fluid{
  height: 2.6rem;
}

.itemsOptions {
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: center;
  justify-items: center;
  margin-bottom: -16px;
  gap: 6px;
}
.teste {
  width: 100%;
  height: 2.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  gap: 2rem;
}

.navbar {
  display: flex;
  flex-direction: column;
}

.container {
  align-items: center;
}

.icons {
  width: 1.3em;
  height: 1.3em;
}

.cart {
  width: 2em;
  height: 2em;
  margin-right: 1em;
}
</style>