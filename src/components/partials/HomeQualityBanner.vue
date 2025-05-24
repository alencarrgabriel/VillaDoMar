<template>
  <section class="py-16 bg-tertiary">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 class="text-3xl md:text-4xl font-bold text-primary mb-6">
            Qualidade e Frescor Garantidos
          </h2>
          <p class="text-gray-700 mb-8 text-lg">
            Na Villa do Mar, trabalhamos apenas com os melhores fornecedores, garantindo a origem e qualidade dos nossos produtos. Nossos frutos do mar são selecionados cuidadosamente para oferecer o melhor em sabor e frescor.
          </p>
          <ul class="space-y-4">
            <li class="flex items-center">
              <div class="bg-primary rounded-full p-1 mr-3">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span class="text-gray-700">Produtos frescos e de alta qualidade</span>
            </li>
            <li class="flex items-center">
              <div class="bg-primary rounded-full p-1 mr-3">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span class="text-gray-700">Origem controlada e rastreável</span>
            </li>
            <li class="flex items-center">
              <div class="bg-primary rounded-full p-1 mr-3">
                <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span class="text-gray-700">Produtos armazenados com todo cuidado</span>
            </li>
          </ul>
          <button class="mt-8 bg-accent hover:bg-accent-dark text-white px-6 py-3 rounded-md transition duration-300">
            Saiba mais sobre nossa qualidade
          </button>
        </div>
        <div class="hidden md:block">
          <img src="https://images.unsplash.com/photo-1579173245636-1ef5bf3a7d14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
               alt="Controle de Qualidade" 
               class="rounded-lg shadow-lg w-full h-auto">
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeQualityBanner'
});
</script> 