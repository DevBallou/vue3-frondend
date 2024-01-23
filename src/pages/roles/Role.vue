<template>
    <div class="w-full">
        <h1>List Role</h1>
        <div class="flex flex-wrap w-full mb-2">
            <div class="w-1/7">
                
            </div>
            <div class="w-1/7">
                
            </div>
        </div>

        <div class="flex items-center justify-end px-4 py-3 text-right sm:px-6">
            <router-link to="/role/create">
                <button class="bg-gray-500">
                    Créer
                </button>
            </router-link>
        </div>

        <!-- The data table -->
        <div class="flex flex-col">
            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-g">
                <div class="inline-block min-w-full py-2 align-mddle sm:px-6 lg:px-8">
                    <div class="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg">
                        <table class="min-w-full divide-y divide-gray-200">
                            <thead>
                                <tr>
                                    <th class="px-2 py-1 text-xs font-bold leading-none tracking-wider text-center text-gray-800 uppercase bg-gray-50">N°</th>
                                    <th class="px-2 py-1 text-xs font-bold leading-none tracking-wider text-center text-gray-800 uppercase bg-gray-50">Name Role</th>
                                    <th class="px-2 py-1 text-xs font-bold leading-none tracking-wider text-gray-800 uppercase bg-gray-50"></th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                                <tr v-for="{item, index} in roles.data" :key="index">
                                    <td class="px-2 py-1 text-xs text-center whitespace-no-wrap">
                                        <!-- {{ index+1 }} -->
                                    </td>

                                    <td class="px-2 py-1 text-xs text-center whitespace-no-wrap">
                                        {{ item.name }}
                                    </td>

                                    <td class="px-2 py-1 text-xs text-right">
                                        <button >View</button>

                                        <!-- <router-link :to="`/edit-role/`">
                                            <button >Edit</button>
                                        </router-link> -->

                                        <!-- <button @click="clickDel(item.id, index)">Delete</button> -->
                                    </td>
                                </tr>
                                <!-- If empty table -->
                                <tr>
                                    <td class="px-2 py-1 text-xs text-center whitespace-no-wrap" colspan="3">
                                        Aucun résultat trouvé
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <fwb-pagination v-model="currentPage" :total-items="100"></fwb-pagination>
    </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
// import { Swal } from "sweetalert2";
import { FwbPagination } from 'flowbite-vue'


    const router = useRouter();
    const roles = ref({});

    onMounted(async() => {
        listRole();
    });

    const listRole = async(page) => {
        const response = await axios.get(`/api/roles?page=${page}`);
        console.log(response);
        // roles = response.data;
    }

    // let search = ref('');

    // const clickDel = (id, index) => {
    //     Swal.fire({
    //         title: 'Are you sure?',
    //         text: "You won't be able to revert this!",
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonColor: '#3885d6',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: 'Yes, delete it!'
    //     }).then(async (result) => {
    //         if (result.isConfirmed) {
    //             await axios.delete("/api/roles/" + id)
    //                 .then(response => {
    //                     if (response.status === 200) {
    //                         roles.value.data.splice(index, 1);
    //                     }
    //                 })
    //         }
    //     })
    // }
</script>

<style lang="scss" scoped>

</style>