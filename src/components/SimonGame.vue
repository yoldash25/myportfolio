<template>
  <div id="app" class="flex flex-col items-center bg-blue-900 min-h-screen">
    <!-- Заголовок -->
    <h1 class="text-3xl text-yellow-100 font-press-start my-5">{{ gameStatus }}</h1>

    <!-- Контейнер для кнопок -->
    <div class="grid grid-cols-2 gap-4">
      <button
        v-for="(color, index) in buttonColours"
        :key="index"
        :id="color"
        :class="[
          'btn',
          color,
          { 'bg-gray-500': isPressed === color },
          { 'bg-opacity-50': gameStatus === 'Game Over, Press Any Key to Restart' },
        ]"
        @click="userClick(color)"
      ></button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      buttonColours: ["red", "blue", "green", "yellow"],
      gamePattern: [],
      userClickedPattern: [],
      level: 0,
      started: false,
      isPressed: null,
      gameStatus: "Press A Key to Start",
    };
  },
  mounted() {
    document.addEventListener("keypress", this.startGame);
  },
  beforeDestroy() {
    document.removeEventListener("keypress", this.startGame);
  },
  methods: {
    startGame() {
      if (!this.started) {
        this.level = 0;
        this.gamePattern = [];
        this.userClickedPattern = [];
        this.started = true;
        this.gameStatus = `Level ${this.level}`;
        this.nextSequence();
      }
    },
    userClick(color) {
      if (this.started) {
        this.userClickedPattern.push(color);
        this.playSound(color);
        this.animatePress(color);
        this.checkAnswer(this.userClickedPattern.length - 1);
      }
    },
    checkAnswer(currentLevel) {
      if (this.gamePattern[currentLevel] === this.userClickedPattern[currentLevel]) {
        if (this.userClickedPattern.length === this.gamePattern.length) {
          setTimeout(this.nextSequence, 1000);
        }
      } else {
        this.playSound("wrong");
        this.gameStatus = "Game Over, Press Any Key to Restart";
        setTimeout(() => {
          this.gameStatus = "Press A Key to Start";
        }, 200);
        this.startOver();
      }
    },
    nextSequence() {
      this.userClickedPattern = [];
      this.level++;
      this.gameStatus = `Level ${this.level}`;
      const randomNumber = Math.floor(Math.random() * 4);
      const randomChosenColour = this.buttonColours[randomNumber];
      this.gamePattern.push(randomChosenColour);
      this.animateButton(randomChosenColour);
      this.playSound(randomChosenColour);
    },
    playSound(name) {
      const audio = new Audio(`sounds/${name}.mp3`);
      audio.play();
    },
    animatePress(color) {
      this.isPressed = color;
      setTimeout(() => {
        this.isPressed = null;
      }, 100);
    },
    animateButton(color) {
      this.$nextTick(() => {
        const button = document.getElementById(color);
        button.classList.add("opacity-50");
        setTimeout(() => {
          button.classList.remove("opacity-50");
        }, 100);
      });
    },
    startOver() {
      this.level = 0;
      this.gamePattern = [];
      this.started = false;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap");

/* Кастомный шрифт */
.font-press-start {
  font-family: "Press Start 2P", cursive;
}

/* Стили для кнопок */
.btn {
  width: 200px;
  height: 200px;
  border-radius: 20%;
  border: 10px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease;
}

.red {
  background-color: red;
}

.green {
  background-color: green;
}

.blue {
  background-color: blue;
}

.yellow {
  background-color: yellow;
}

/* Эффект при нажатии */
.bg-gray-500 {
  background-color: grey;
}
</style>
