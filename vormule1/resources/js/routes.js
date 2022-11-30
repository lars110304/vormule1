import { createWebHistory, createRouter } from "vue-router";
import news from "./components/news.vue";
import drivers from "./components/drivers.vue";
import constructors from "./components/constructors.vue";
import seasons from "./components/seasons.vue";
import schedule from "./components/schedule.vue";

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
];

const router = createRouter({
    mode: "history",

    history: createWebHistory(),

    routes,
});

export default router;
