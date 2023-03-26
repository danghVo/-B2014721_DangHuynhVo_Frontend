import { createWebHistory, createRouter } from "vue-router";
import ContactBook from "@/components/ContactBook.vue";

const routes = [
    {
        path: "/",
        name: "Contactbook",
        component: ContactBook,
    },
    {
        path: "/:pathMath(.*)*",
        name: "notfound",
        component: () => import("@/views/NotFound.vue"),
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;