<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-[#393E46] px-4">
    <h1
      class="text-[4rem] md:text-[8rem] font-lobster text-[#4ECCA3] mb-8 drop-shadow-[5px_0_0_#232931]"
    >
      {{ title }}
    </h1>

    <div class="flex flex-wrap justify-center gap-16 mb-10">
      <div class="text-center">
        <p class="text-[2rem] text-[#4ECCA3] font-indie mb-4">Player 1</p>
        <img :src="`/images/dice${dice1}.png`" alt="Dice 1" class="w-[80%] mx-auto" />
      </div>

      <div class="text-center">
        <p class="text-[2rem] text-[#4ECCA3] font-indie mb-4">Player 2</p>
        <img :src="`/images/dice${dice2}.png`" alt="Dice 2" class="w-[80%] mx-auto" />
      </div>
    </div>

    <button
      @click="rollDice"
      class="bg-[#4ECCA3] text-[#393E46] font-bold px-6 py-3 rounded-xl hover:bg-[#3ebd93] transition"
    >
      Roll Dice 🎲
    </button>

    <footer class="mt-20 text-[#EEEEEE] text-center font-indie text-lg">
      www 🎲 App Brewery 🎲 com
    </footer>
  </div>
</template>

<script setup>
import { ref } from "vue";

const dice1 = ref(1);
const dice2 = ref(1);
const title = ref("Refresh Me");

const rollDice = () => {
  dice1.value = Math.floor(Math.random() * 6) + 1;
  dice2.value = Math.floor(Math.random() * 6) + 1;

  if (dice1.value > dice2.value) {
    title.value = "Player 1 Wins 🎉";
  } else if (dice2.value > dice1.value) {
    title.value = "Player 2 Wins 🎉";
  } else {
    title.value = "Draw 🤝";
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Indie+Flower&family=Lobster&display=swap");

.font-lobster {
  font-family: "Lobster", cursive;
}

.font-indie {
  font-family: "Indie Flower", cursive;
}
</style>
