<template>
  <header class="mb-20">
    <!-- Menu -->
    <nav
      class="relative mx-auto top-10 flex justify-center my-1 w-[600px] bg-gray-200 rounded-xl shadow-xl"
    >
      <router-link
        v-for="link in navLinks"
        :key="link.path"
        :to="link.path"
        class="px-6 py-2 mx-1 text-2xl relative group hover:text-blue-600 hover:font-semibold"
      >
        <div
          :class="{
            'text-black font-bold': $route.path === link.path,
            'text-black': $route.path !== link.path,
          }"
        >
          {{ link.name }}
        </div>
        <span
          class="absolute left-0 right-0 bottom-0 h-0.5 bg-black scale-x-0 duration-300 ease-out"
          :class="{
            'scale-x-100': $route.path === link.path,
            'group-hover:scale-x-100': $route.path !== link.path,
          }"
        ></span>
      </router-link>
    </nav>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const navLinks = [
  { path: "/", name: "Main" },
  { path: "/projects", name: "Projects" },
  { path: "/about", name: "About Me" },
  { path: "/contact", name: "Contact" },
];
</script>

<style scoped></style>
