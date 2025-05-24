<template lang="html">
    <div class="bg-gray-light">
        <div class="container mx-auto">
            <div class="flex flex-col md:flex-row py-20 items-center justify-between px-5 md:px-10 relative">
                <div class="flex flex-col gap-8 max-w-2xl">
                    <h1 class="text-5xl md:text-6xl font-bold text-primary">Frutos do Mar <span class="text-secondary">Premium</span></h1>
                    <p class="text-xl text-gray-700">Os melhores pescados e frutos do mar para as experiências gastronômicas mais memoráveis.</p>
                    <div class="flex flex-col md:flex-row gap-5 mt-4">
                        <router-link to="/produtos"
                            class="bg-primary text-white px-8 py-4 rounded text-lg hover:bg-primary-dark transition duration-300 ease-in-out text-center">
                            Explorar Produtos</router-link>
                        <router-link to="/cardapio"
                            class="bg-white text-primary border-2 border-primary hover:border-primary-dark px-8 py-4 rounded text-lg transition duration-300 ease-in-out text-center">
                            Ver Cardápio</router-link>
                    </div>
                </div>
                <div class="hidden md:block md:w-[45%] lg:w-[40%] mt-10 md:mt-0">
                    <img src="https://images.unsplash.com/photo-1501595091296-3aa970afb3ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                        alt="Frutos do Mar Premium"
                        class="rounded-xl w-full object-cover h-[500px] shadow-lg">
                </div>
                
                <div class="absolute right-[40px] bottom-[-20px] shadow-xl bg-white px-5 py-4 w-[250px] hidden md:block rounded-lg">
                    <div class="flex items-center gap-3 mb-3">
                        <img src="https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1365&q=80"
                            alt="Camarão Rosa"
                            class="rounded-full w-[60px] h-[60px] object-cover">
                        <div>
                            <p class="font-bold text-primary mb-1">Camarão Rosa</p>
                            <div class="flex items-center text-secondary">
                                <span class="text-sm">★★★★★</span>
                            </div>
                        </div>
                    </div>
                    <p class="text-gray-600 text-sm">Nosso produto mais vendido, fresquinho e selecionado</p>
                </div>
            </div>
        </div>
    </div>
    
    <div class="container mx-auto py-16 px-5 md:px-10">
        <div class="text-center max-w-3xl mx-auto mb-10">
            <h2 class="text-3xl md:text-4xl font-bold text-primary mb-6">O melhor do mar na sua mesa</h2>
            <p class="text-lg text-gray-700">
                Trabalhamos com produtos de alta qualidade, selecionados para garantir o melhor sabor e frescor. De pescados a frutos do mar, temos tudo o que você precisa para preparar pratos incríveis.
            </p>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            <div class="text-center">
                <div class="inline-flex items-center justify-center h-16 w-16 bg-primary bg-opacity-10 text-primary rounded-full mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                </div>
                <h3 class="font-bold text-gray-800 mb-2">Qualidade</h3>
                <p class="text-gray-600 text-sm">Produtos selecionados</p>
            </div>
            
            <div class="text-center">
                <div class="inline-flex items-center justify-center h-16 w-16 bg-primary bg-opacity-10 text-primary rounded-full mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <h3 class="font-bold text-gray-800 mb-2">Entrega</h3>
                <p class="text-gray-600 text-sm">Rápida e segura</p>
            </div>
            
            <div class="text-center">
                <div class="inline-flex items-center justify-center h-16 w-16 bg-primary bg-opacity-10 text-primary rounded-full mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                </div>
                <h3 class="font-bold text-gray-800 mb-2">Frescor</h3>
                <p class="text-gray-600 text-sm">Garantia de qualidade</p>
            </div>
            
            <div class="text-center">
                <div class="inline-flex items-center justify-center h-16 w-16 bg-primary bg-opacity-10 text-primary rounded-full mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                </div>
                <h3 class="font-bold text-gray-800 mb-2">Variedade</h3>
                <p class="text-gray-600 text-sm">Ampla seleção de produtos</p>
            </div>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: "HomeHeroView"
})
</script>
<style lang="">
    
</style>