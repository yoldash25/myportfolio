<template>
  <section ref="skillsSection" class="px-10 w-[90%] bg-gray-100">
    <div v-for="(skill, index) in skills" :key="index" class="mb-4">
      <div class="flex justify-between mb-1">
        <span class="font-medium">{{ skill.name }}</span>
        <span class="text-sm">{{ animated ? skill.percent + "%" : "0%" }}</span>
      </div>
      <div class="w-full bg-gray-300 h-4 rounded">
        <div
          class="h-4 bg-green-500 rounded transition-all duration-1000"
          :style="{ width: animated ? skill.percent + '%' : '0%' }"
        ></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const skills = [
  { name: "PascalAbc", percent: 45 },
  { name: "C++", percent: 70 },
  { name: "C#", percent: 35 },
  { name: "Golang", percent: 45 },
  { name: "JavaScript", percent: 60 },
  { name: "Python", percent: 30 },
  { name: "HTML & CSS", percent: 90 },
];

const animated = ref(false);
const skillsSection = ref(null);

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        animated.value = true;
        observer.disconnect();
      }
    },
    { threshold: 0.3 }
  );

  if (skillsSection.value) {
    observer.observe(skillsSection.value);
  }
});
</script>

<style scoped></style>
