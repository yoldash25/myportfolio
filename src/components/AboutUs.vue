<template>
  <div class="grid grid-cols-2">
    <div class="relative">
      <div class="pt-20">
        <img
          src="../../public/images/aboutus.jpg"
          alt=""
          class="rotate-90 w-[600px] absolute left-[100px] z-10 shadow-xl"
        />
      </div>
      <div
        class="w-[450px] h-[600px] bg-gray-900/20 absolute top-[50px] left-[130px] shadow-xl"
      ></div>
      <div class="pt-[750px]">
        <img
          src="../../public/images/ozim.jpg"
          alt=""
          class="w-[450px] absolute left-[190px] z-10 shadow-xl"
        />
      </div>
      <div
        class="w-[450px] h-[600px] bg-gray-900/20 absolute top-[870px] left-[140px] shadow-xl"
      ></div>
    </div>
    <div class="relative">
      <div class="my-[100px]">
        <p class="text-3xl">About Me</p>
        <hr class="border-2 mb-10" />
        <pre>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione blanditiis
          molestias corrupti velit harum reiciendis cupiditate, laudantium odit. Nisi sit
          repudiandae iusto voluptate, tenetur in cupiditate quisquam dolores! Omnis,
          soluta. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil sint
          quidem molestiae minus et dolor voluptatum itaque! Unde dolores rem consectetur,
          accusamus eius consequuntur sit laudantium ullam, laboriosam animi adipisci.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus rerum culpa facere 
          in architecto. Officiis dignissimos atque quas vitae molestiae eligendi quasi! 
          Quasi, aperiam obcaecati rerum quisquam nulla amet sint?
        </pre>
        <p class="text-3xl">Skills</p>
        <hr class="border-2 mb-10" />
        <Intersection />
        <div>
          <p class="text-3xl mt-10 mb-5">Certificate</p>
          <img src="../../public/images/html.jpg" alt="" class="w-[850px] rounded-3xl" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Здесь можно писать JavaScript код напрямую, без export default
import { ref } from "vue";

const message = ref("Привет!");
import Intersection from "./Intersection.vue";
</script>

<style scoped>
/* Стили */
</style>
