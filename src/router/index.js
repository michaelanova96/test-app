import { createRouter, createWebHistory } from "vue-router";
//import HomeView from '../views/HomeView.vue'
import { getCategoryView } from "../views/index";
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            redirect: { path: "/category/for-dogs" },
        },
        {
            path: "/category/:id",
            name: "category",
            component: getCategoryView,
        },
        {
            path: "/category",
            redirect: { path: "/category/for-dogs" },
        },
    ],
});
export default router;
