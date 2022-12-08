import { createWebHistory, createRouter } from "vue-router";
import news from "./components/news.vue";
import drivers from "./components/drivers.vue";
import constructors from "./components/constructors.vue";
import seasons from "./components/seasons.vue";
import schedule from "./components/schedule.vue";
import login from "./components/login.vue";
import register from "./components/register.vue";
import favorite from "./components/favorite.vue";

const routes = [
    {
        path: "/news",
        name: "news",
        component: news,
    },
    {
        path: "/drivers",
        name: "drivers",
        component: drivers,
    },
    {
        path: "/constructors",
        name: "constructors",
        component: constructors,
    },
    {
        path: "/seasons",
        name: "seasons",
        component: seasons,
    },
    {
        path: "/schedule",
        name: "schedule",
        component: schedule,
    },
    {
        path: "/login",
        name: "login",
        component: login,
    },
    {
        path: "/register",
        name: "register",
        component: register,
    },
    {
        path: "/favorite",
        name: "favorite",
        component: favorite,
    },
];

const router = createRouter({
    mode: "history",

    history: createWebHistory(),

    routes,
});

export default router;
