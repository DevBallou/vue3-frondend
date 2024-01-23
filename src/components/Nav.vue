<template>
    <div class="divide-y divide-gray-800" x-data="{ show: false }">
        <!-- navbar -->
        <nav class="flex items-center px-3 py-2 bg-gray-600">
            <div>
                <button @click="show =! show" class="items-center block h-8 mr-3 text-gray-400 hover:text-gray-200 focus:text-gray-200 focus:outline-none sm:hidden">
                    <svg class="w-8 fill-current" viewBox="0 0 24 24">
                        <path x-show="!show" fill-rule="evenodd" 
                            d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                        <path x-show="show" fill-rule="evenodd" 
                            d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
                    </svg>
                </button>
            </div>
            
            <div class="flex items-center w-full h-12">
                <a href="{{ url('/') }}" class="w-full">
                    <h1>Logo</h1>
                </a>
            </div>
            
            <div class="flex justify-end sm:w-8/12">
                <!-- Header Icons -->
                <div class="items-center hidden mx-6 space-x-5 xl:flex">
                    <a class="hover:text-gray-200" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </a>
                    <a class="flex items-center hover:text-gray-200" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span class="absolute flex ml-4 -mt-5">
                            <span class="absolute inline-flex w-3 h-3 bg-pink-400 rounded-full opacity-75 animate-ping"></span>
                            <span class="relative inline-flex w-3 h-3 bg-pink-500 rounded-full"></span>
                        </span>
                    </a>
                    <!-- Sign In / Register      -->
                    <router-link :to="{name: 'Login'}" class="flex items-center hover:text-gray-200" >
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </router-link>
                
                </div>
                
                <!-- {{-- Top Navigation --}} -->
                <ul class="hidden text-xs text-gray-200 sm:block sm:text-left">
                    <div v-if="!authStore.user">
                        <li class="px-4 py-2 cursor-pointer hover:underline">
                            <router-link :to="{name: 'Login'}" class="hover:text-gray-200" >Se connecter</router-link>
                        </li>
                    </div>
                </ul>
            </div>
        </nav>
            
        <div class="sm:flex sm:min-h-screen">
            <aside class="text-gray-700 bg-gray-900 divide-y divide-gray-700 divide-dashed sm:w-4/12 md:w-3/12 lg:w-2/12">
                
                <!-- Nav Links -->
                <ul class="hidden text-xs text-gray-200 sm:block sm:text-left">
                    <router-link :to="{name: 'Home'}" class="hover:text-gray-200" >
                        <li class="px-4 py-2 cursor-pointer hover:bg-gray-800">
                            Home
                        </li>
                    </router-link>

                    <router-link :to="{name: 'Role'}" class="hover:text-gray-200" >
                        <li class="px-4 py-2 cursor-pointer hover:bg-gray-800">
                            Manage Role
                        </li>
                    </router-link>
                </ul>

                <!-- {{-- Top Navigation Mobile Web View --}} -->
                <ul class="text-xs text-gray-200">
                    <template v-if="!authStore.user">
                        <router-link :to="{name: 'Login'}" class="w-full hover:text-gray-200" >
                            <li class="px-4 py-2 cursor-pointer hover:bg-gray-800">
                                Se connecter
                            </li>
                        </router-link>
                        <router-link :to="{name: 'Register'}" class="w-full hover:text-gray-200" >
                            <li class="px-4 py-2 cursor-pointer hover:bg-gray-800">
                                S'inscrire
                            </li>
                        </router-link>
                    </template>
                    <template v-else>
                        <button @click="authStore.handleLogout" class="w-full hover:text-gray-200" >
                            <li class="px-4 py-2 cursor-pointer hover:bg-gray-800">
                                Déconnexion
                            </li>
                        </button>
                    </template>
                </ul>
            </aside>


            <main class="min-h-screen p-6 bg-gray-100 sm:w-8/12 md:w-9/12 lg:w-10/12">
                <section class="text-gray-900 divide-y">
                    <!-- <h1 class="text-3xl font-bold">{{ $title }}</h1> -->
                    <article>
                        <div class="mt-5 text-sm">
                            <RouterView />
                        </div>
                    </article>
                </section>
            </main>
            
        </div>
    </div>
</template>

<script setup>
    import { useAuthStore } from "../stores/auth";

    const authStore = useAuthStore();
</script>

<style lang="scss" scoped>

</style>