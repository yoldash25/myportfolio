import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import Contact from '../components/Contacts.vue'
import Projects from '../components/Projects.vue'
import AboutUs from '../components/AboutUs.vue';

import DiceGame from '../components/DiceGame.vue';
import SimonGame from '../components/SimonGame.vue';
import DrumHit from '../components/DrumHit.vue';

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage
    },
    {
        path: '/projects', // Путь для "Projects"
        name: 'projects',
        component: Projects
    },
    {
        path: '/about', // Путь для "About us"
        name: 'about',
        component: AboutUs
    },
    {
        path: '/contact', // Путь для "Contact"
        name: 'contact',
        component: Contact
    },
    {
        path: '/dice-game',
        name: 'DiceGame',
        component: DiceGame,
    },
    {
        path: '/simon-game',
        name: 'SimonGame',
        component: SimonGame,
    },
    {
        path: '/drum-hit',
        name: 'DrumHit',
        component: DrumHit,
    },
];

const router = createRouter({
    history: createWebHistory(), // Используем историю HTML5
    routes // Передаем определенные маршруты
});

export default router;
