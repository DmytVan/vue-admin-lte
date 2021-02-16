import {createWebHistory, createRouter} from "vue-router";
import Home from '../components/Home';
import Admin from "../components/Admin";
import Statistics from '../components/Admin/Main/Statistics'
import Banners from '../components/Admin/Main/Banners'

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/admin",
        name: "Admin",
        component: Admin,
        children: [
            {
                path: "statistics",
                name: "Statistics",
                component: Statistics,
            },
            {
                path: "banners",
                name: "Banners",
                component: Banners,
            }
        ]
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;