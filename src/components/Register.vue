<template>
    <section>
        <div class="flex flex-col items-center justify-center px-6 py-8 mt-20 lg:py-0">
            <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-center text-gray-900 md:text-2xl dark:text-white">
                        S'inscrire
                    </h1>
                    <form @submit.prevent="authStore.handleRegister(form)" class="mt-4 space-y-4 lg:mt-5 md:space-y-5">
                        <div>
                            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nom complet</label>
                            <input type="text" v-model="form.name" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="votre nom et prénom" >
                            <div v-if="authStore.errors.name" class="flex">
                                <span class="p-2 m-2 text-sm text-red-400">{{ authStore.errors.name[0] }}</span>
                            </div>
                        </div>
                        <div>
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                            <input type="email" v-model="form.email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="prénom.nom@company.com" >
                            <div v-if="authStore.errors.email" class="flex">
                                <span class="p-2 m-2 text-sm text-red-400">{{ authStore.errors.email[0] }}</span>
                            </div>
                        </div>
                        <div>
                            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mot de passe</label>
                            <input type="password" v-model="form.password" placeholder="Mot de passe" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >
                            <div v-if="authStore.errors.password" class="flex">
                                <span class="p-2 m-2 text-sm text-red-400">{{ authStore.errors.password[0] }}</span>
                            </div>
                        </div>
                        <div>
                            <label for="password_confirmation" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirmez le mot de passe</label>
                            <input type="password" v-model="form.password_confirmation" placeholder="Confirmation le mot de passe" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >
                        </div>
                        <button type="submit" class="text-white bg-green-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">S'inscrire</button>
                        <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                            <router-link :to="{ name: 'Login' }" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Se connecter</router-link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
    import { ref } from "vue";
    import { useAuthStore } from "../stores/auth";

    const authStore = useAuthStore();
    const form = ref({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    
</script>
