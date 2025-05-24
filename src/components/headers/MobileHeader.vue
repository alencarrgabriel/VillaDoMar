<template lang="html">
    <header class="block lg:hidden bg-white shadow-md">
        <div class="container mx-auto">
            <nav class="flex items-center justify-between py-4 px-5">
                <router-link to="/">
                    <h1 class="text-2xl font-bold text-primary">
                        Villa<span class="text-secondary">do Mar</span>
                    </h1>
                </router-link>

                <div class="flex items-center gap-3">
                    <button class="bg-green-500 hover:bg-green-600 text-white px-2 py-2 rounded-md transition duration-300 flex items-center" @click="openWhatsapp">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                        </svg>
                    </button>
                    
                    <button @click="toggleData()"
                        class="relative">
                        <font-awesome-icon icon="fa-solid fa-bars"
                            :class="mobileMenu ? 'scale-0 opacity-0' : ''"
                            class="text-primary text-2xl transition duration-300 ease-in-out absolute -right-1" />
                        <font-awesome-icon icon="fa-solid fa-close"
                            :class="!mobileMenu ? 'scale-0 opacity-0' : ''"
                            class="text-primary text-2xl transition duration-300 ease-in-out" />
                    </button>
                </div>

                <div :class="mobileMenu ? '' : 'translate-x-[-100vw]'"
                    class="flex flex-col gap-8 absolute bg-white top-[65px] w-full z-10 left-0 px-10 border-t py-10 h-full transition duration-300 ease-in-out">
                    <router-link to="/"
                        class="font-medium text-gray-dark hover:text-primary transition duration-300 ease-in-out">Home
                    </router-link>
                    <router-link to="/about"
                        class="font-medium text-gray-dark hover:text-primary transition duration-300 ease-in-out">Empresa
                    </router-link>
                    <router-link to="/produtos"
                        class="font-medium text-gray-dark hover:text-primary transition duration-300 ease-in-out">Produtos
                    </router-link>
                    <router-link to="/cardapio"
                        class="font-medium text-gray-dark hover:text-primary transition duration-300 ease-in-out">Cardápio
                    </router-link>
                    <router-link to="/contact"
                        class="font-medium text-gray-dark hover:text-primary transition duration-300 ease-in-out">Contato
                    </router-link>
                    
                    <div class="relative mt-5">
                        <label class="relative block">
                            <span class="sr-only">Search</span>
                            <span class="absolute inset-y-0 left-0 flex items-center pl-3 pr-8">
                                <font-awesome-icon icon="fa-solid fa-search"
                                    class="text-gray-500" />
                            </span>
                            <input
                                class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-12 pr-3 shadow-sm focus:outline-none focus:border-primary focus:ring-primary focus:ring-1 sm:text-sm"
                                placeholder="Buscar produtos..."
                                type="text"
                                name="search" />
                        </label>
                    </div>
                </div>
            </nav>
        </div>
        <div class="bg-primary text-white">
            <div class="container mx-auto py-2 px-6">
                <div class="flex items-center justify-between">
                    <span class="text-sm font-medium">Vila do Mar</span>
                    <span class="text-sm">Ei, precisa de ajuda?</span>
                </div>
            </div>
        </div>
    </header>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "MobileHeader",
    data() {
        return {
            mobileMenu: false
        }

    },
    methods: {
        toggleData() {
            this.mobileMenu = !this.mobileMenu
        },
        openWhatsapp() {
            const phoneNumber = '5511987654321'; // Substitua pelo número de telefone real
            const message = encodeURIComponent('Olá! Estou interessado nos produtos do Villa do Mar.');
            window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
        }
    }

})
</script>
<style lang="">
    
</style>