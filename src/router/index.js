import { createRouter, createWebHistory } from "vue-router";

import Home from "../components/Home.vue";

const routes = [
    { path: "/", name: 'Home', component: Home },
    { path: "/login", name: 'Login', component: () => import("../components/Login.vue") },
    { path: "/register", name: 'Register', component: () => import("../components/Register.vue") },
    { path: "/forgot-password", name: 'ForgotPassword', component: () => import("../components/ForgotPassword.vue") },
    { path: "/password-reset/:token", name: 'ResetPassword', component: () => import("../components/ResetPassword.vue") },
    // Role User
    { path: "/role", name: 'Role', component: () => import("../pages/roles/Role.vue") }, //beforeEnter: checkAuth
    { path: "/role/create", name: 'CreateRole', component: () => import("../pages/roles/FormRole.vue") }, //beforeEnter: checkAuth
    { path: "/edit-role/:id", name: 'EditRole', component: () => import("../pages/roles/EditRole.vue") }, //beforeEnter: checkAuth
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;