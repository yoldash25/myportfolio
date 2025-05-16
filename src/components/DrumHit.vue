<template>
  <div id="app" class="flex flex-col items-center bg-gray-800 min-h-screen py-10">
    <!-- Заголовок -->
    <h1 class="text-5xl text-pink-200 font-arvo mb-12 text-shadow">Drum 🥁 Kit</h1>

    <!-- Кнопки -->
    <div class="">
      <button
        v-for="key in keys"
        :key="key"
        :class="[
          'drum-button',
          key,
          { 'opacity-50 shadow-lg': isPressed === key },
          'bg-white text-pink-600 hover:bg-pink-100 transition duration-200 ease-in-out',
        ]"
        @click="handleClick(key)"
        @transitionend="resetKey"
      >
        {{ key }}
      </button>
    </div>

    <!-- Подвал -->
    <footer class="text-pink-200 mt-8 text-sm">Made with ❤️ in London.</footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keys: ["w", "a", "s", "d", "j", "k", "l"], // Клавиши
      isPressed: null, // Для отслеживания, какая клавиша нажата
      soundFiles: {
        w: "sounds/tom-1.mp3",
        a: "sounds/tom-2.mp3",
        s: "sounds/tom-3.mp3",
        d: "sounds/tom-4.mp3",
        j: "sounds/snare.mp3",
        k: "sounds/crash.mp3",
        l: "sounds/kick-bass.mp3",
      },
    };
  },
  mounted() {
    document.addEventListener("keypress", this.handleKeyPress);
  },
  beforeDestroy() {
    document.removeEventListener("keypress", this.handleKeyPress);
  },
  methods: {
    handleClick(key) {
      this.makeSound(key);
      this.buttonAnimation(key);
    },
    handleKeyPress(event) {
      const key = event.key.toLowerCase();
      if (this.keys.includes(key)) {
        this.makeSound(key);
        this.buttonAnimation(key);
      }
    },
    makeSound(key) {
      const audio = new Audio(this.soundFiles[key]);
      audio.play();
    },
    buttonAnimation(key) {
      this.isPressed = key;
      setTimeout(() => {
        this.isPressed = null;
      }, 100);
    },
    resetKey() {
      this.isPressed = null;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Arvo&display=swap");

/* Шрифт для заголовка */
.text-shadow {
  text-shadow: 3px 0 #da0463;
}

/* Фоновые изображения для кнопок */
.w {
  background-image: url("images/tom1.png");
}

.a {
  background-image: url("images/tom2.png");
}

.s {
  background-image: url("images/tom3.png");
}

.d {
  background-image: url("images/tom4.png");
}

.j {
  background-image: url("images/snare.png");
}

.k {
  background-image: url("images/crash.png");
}

.l {
  background-image: url("images/kick.png");
}

/* Стили для кнопок */
.drum-button {
  border-radius: 15px;
  font-size: 2rem;
  font-weight: 900;
  width: 150px;
  height: 150px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}
</style>
