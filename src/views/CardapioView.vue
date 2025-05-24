<template>
  <DefaultLayout>
    <div class="container mx-auto py-12 px-4">
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold text-primary mb-4">Cardápio Digital</h1>
        <p class="text-xl text-gray-700 max-w-3xl mx-auto">
          Conheça nossos pratos preparados com os melhores frutos do mar, selecionados para proporcionar uma experiência gastronômica premium.
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
        <!-- Categoria de Entradas -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <div class="h-48 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1559737558-2f5a35f4523b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hyaW1wJTIwYXBwZXRpemVyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60" 
                alt="Entradas" 
                class="w-full h-full object-cover transform hover:scale-105 transition duration-500">
          </div>
          <div class="p-6">
            <h2 class="text-2xl font-bold text-primary mb-4">Entradas</h2>
            <ul class="space-y-4">
              <li>
                <div class="flex justify-between items-start">
                  <div>
                    <h3 class="font-bold text-gray-800">Camarão Empanado</h3>
                    <p class="text-gray-600 text-sm">Camarões crocantes servidos com molho especial</p>
                  </div>
                  <span class="text-secondary font-bold">R$ 42,90</span>
                </div>
              </li>
              <li>
                <div class="flex justify-between items-start">
                  <div>
                    <h3 class="font-bold text-gray-800">Lula à Dorê</h3>
                    <p class="text-gray-600 text-sm">Anéis de lula empanados e fritos</p>
                  </div>
                  <span class="text-secondary font-bold">R$ 38,90</span>
                </div>
              </li>
              <li>
                <div class="flex justify-between items-start">
                  <div>
                    <h3 class="font-bold text-gray-800">Bolinho de Bacalhau</h3>
                    <p class="text-gray-600 text-sm">Bolinhos tradicionais com bacalhau desfiado</p>
                  </div>
                  <span class="text-secondary font-bold">R$ 40,90</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <!-- Categoria de Pratos Principais -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <div class="h-48 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1579684947550-22e945225d9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JpbGxlZCUyMGZpc2h8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" 
                alt="Pratos Principais" 
                class="w-full h-full object-cover transform hover:scale-105 transition duration-500">
          </div>
          <div class="p-6">
            <h2 class="text-2xl font-bold text-primary mb-4">Pratos Principais</h2>
            <ul class="space-y-4">
              <li>
                <div class="flex justify-between items-start">
                  <div>
                    <h3 class="font-bold text-gray-800">Salmão Grelhado</h3>
                    <p class="text-gray-600 text-sm">Filé de salmão grelhado com legumes e arroz</p>
                  </div>
                  <span class="text-secondary font-bold">R$ 68,90</span>
                </div>
              </li>
              <li>
                <div class="flex justify-between items-start">
                  <div>
                    <h3 class="font-bold text-gray-800">Moqueca de Peixe</h3>
                    <p class="text-gray-600 text-sm">Moqueca tradicional com pescada e camarões</p>
                  </div>
                  <span class="text-secondary font-bold">R$ 74,90</span>
                </div>
              </li>
              <li>
                <div class="flex justify-between items-start">
                  <div>
                    <h3 class="font-bold text-gray-800">Risoto de Frutos do Mar</h3>
                    <p class="text-gray-600 text-sm">Risoto cremoso com camarão, lula e mexilhões</p>
                  </div>
                  <span class="text-secondary font-bold">R$ 72,90</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <!-- Categoria de Sobremesas -->
        <div class="bg-white rounded-lg shadow-md overflow-hidden">
          <div class="h-48 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGVzc2VydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" 
                alt="Sobremesas" 
                class="w-full h-full object-cover transform hover:scale-105 transition duration-500">
          </div>
          <div class="p-6">
            <h2 class="text-2xl font-bold text-primary mb-4">Sobremesas</h2>
            <ul class="space-y-4">
              <li>
                <div class="flex justify-between items-start">
                  <div>
                    <h3 class="font-bold text-gray-800">Pudim de Leite</h3>
                    <p class="text-gray-600 text-sm">Pudim tradicional com calda de caramelo</p>
                  </div>
                  <span class="text-secondary font-bold">R$ 18,90</span>
                </div>
              </li>
              <li>
                <div class="flex justify-between items-start">
                  <div>
                    <h3 class="font-bold text-gray-800">Sorvete de Coco</h3>
                    <p class="text-gray-600 text-sm">Sorvete artesanal com raspas de coco fresco</p>
                  </div>
                  <span class="text-secondary font-bold">R$ 15,90</span>
                </div>
              </li>
              <li>
                <div class="flex justify-between items-start">
                  <div>
                    <h3 class="font-bold text-gray-800">Mousse de Maracujá</h3>
                    <p class="text-gray-600 text-sm">Mousse cremoso com calda de maracujá fresco</p>
                  </div>
                  <span class="text-secondary font-bold">R$ 17,90</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div class="text-center mt-12">
        <p class="text-gray-700 mb-6">Deseja fazer seu pedido ou tem alguma dúvida?</p>
        <button class="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary-dark transition duration-300 inline-flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Entre em contato
        </button>
      </div>
    </div>
  </DefaultLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DefaultLayout from '@/components/layouts/DefaultLayout.vue';

export default defineComponent({
  name: 'CardapioView',
  components: { DefaultLayout }
});
</script> 