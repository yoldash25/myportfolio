<template>
  <div>
    <h1 class="text-3xl absolute left-1/3 shadow-xl rounded-md">
      Zdes mozhete posmotret neskolko moih projectov
    </h1>

    <div class="pt-10">
      <Swiper
        :modules="[Autoplay]"
        :slides-per-view="1"
        :space-between="30"
        :loop="true"
        :autoplay="{ delay: 3000 }"
        class="w-full max-w-[1100px] h-[auto] sm:h-[500px] md:h-[600px] lg:h-[716px]"
      >
        <SwiperSlide v-for="(slide, index) in slides" :key="index">
          <div class="text-center px-4 sm:px-10">
            <router-link :to="slide.link">
              <h2 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
                {{ slide.text }}
              </h2>
            </router-link>
          </div>
          <div
            class="w-full h-full bg-center bg-cover p-16 text-center shadow-2xl flex flex-col absolute"
            :style="{ backgroundImage: `url(${slide.image})` }"
          >
            <div class="absolute inset-0 bg-white/30 backdrop-blur-sm"></div>
            <div
              class="w-full h-full bg-center bg-cover text-white text-center shadow-2xl relative"
              :style="{ backgroundImage: `url(${slide.image})` }"
            ></div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  {
    image: "../../public/images/dicegame.svg    ",
    text: "Dice Game",
    link: "/dice-game",
  },
  {
    image: "../../public/images/simongame.jpg",
    text: "Simon Game",
    link: "/simon-game",
  },
  {
    image: "../../public/images/drumhit.png",
    text: "Drum Kit",
    link: "/drum-hit",
  },
  //   {
  //     image: "../../public/images/calendar.png",
  //     title: "icon4",
  //     text: "Calendar",
  //   },
  //   {
  //     image: "../../public/images/xwe0.png",
  //     title: "icon5",
  //     text: "X & 0",
  //   },
];
</script>

<style scoped>
.gradient-text-projects {
  /* Пример градиента: от синего к фиолетовому */
  background: linear-gradient(to right, #e02525, #00f2fe);
  background-clip: text;
  -webkit-background-clip: text; /* Для совместимости с Webkit */
  color: transparent;
  -webkit-text-fill-color: transparent; /* Для совместимости с Webkit */

  /* Опционально: настройте размер и толщину шрифта, если нужно */
  font-size: 2rem;
  font-weight: bold;
}
</style>
