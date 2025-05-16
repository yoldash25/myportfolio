<script setup>
import NavBar from "./components/NavBar.vue";
</script>

<template>
  <!-- <div class="background-container">
  </div> -->
    <NavBar />
    <RouterView />
</template>

<style scoped>
.background-container {
  background-image: url("../../public/images/fon.jpg");
  background-size: cover;
  background-position: center center;
  background-repeat:space;
  position: absolute ;
  width: 100%;
  min-height: 100vh; /* Пример: занимает всю высоту видимой части экрана */
  display: flex; /* Пример для центрирования контента */
  justify-content: center;
  align-items: center;
  color: white; /* Пример: цвет текста на темном фоне */
}
</style>
