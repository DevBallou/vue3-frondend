<script setup>
    import { onMounted } from "vue";
    import { useAuthStore } from "./stores/auth";
    import Nav from "./components/Nav.vue";
    import NavBar from "./components/NavBar.vue";

    const authStore = useAuthStore();
    onMounted(async () => {
        // getToken & getUser
        await authStore.getUser();
    });
</script>

<template>
    <div v-if="authStore.user">
      <Nav />
    </div>
    <div v-else>
      <NavBar />
      <RouterView/> 
    </div>
</template>
