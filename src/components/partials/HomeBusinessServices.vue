<template>
  <section class="py-16 bg-gray-light">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4">Para Empresas</h2>
        <p class="text-gray-700 max-w-3xl mx-auto">
          O Villa do Mar oferece soluções completas para o seu negócio, com produtos de qualidade e atendimento personalizado.
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-white rounded-lg shadow-md p-8 text-center">
          <div class="inline-flex items-center justify-center h-16 w-16 bg-primary bg-opacity-10 text-primary rounded-full mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-primary mb-3">Restaurantes</h3>
          <p class="text-gray-600 mb-6">
            Fornecimento regular para restaurantes com variedade e qualidade, entrega pontual e preços competitivos.
          </p>
          <a href="#" class="text-secondary hover:text-secondary-dark font-medium inline-flex items-center">
            Saiba mais
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </a>
        </div>
        
        <div class="bg-white rounded-lg shadow-md p-8 text-center">
          <div class="inline-flex items-center justify-center h-16 w-16 bg-primary bg-opacity-10 text-primary rounded-full mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-primary mb-3">Hotéis</h3>
          <p class="text-gray-600 mb-6">
            Soluções completas para hotéis e pousadas, com produtos selecionados e entrega confiável para sua cozinha.
          </p>
          <a href="#" class="text-secondary hover:text-secondary-dark font-medium inline-flex items-center">
            Saiba mais
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </a>
        </div>
        
        <div class="bg-white rounded-lg shadow-md p-8 text-center">
          <div class="inline-flex items-center justify-center h-16 w-16 bg-primary bg-opacity-10 text-primary rounded-full mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold text-primary mb-3">Distribuidores</h3>
          <p class="text-gray-600 mb-6">
            Fornecimento em escala para distribuidores e atacadistas, com condições especiais e suporte dedicado.
          </p>
          <a href="#" class="text-secondary hover:text-secondary-dark font-medium inline-flex items-center">
            Saiba mais
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
      
      <div class="bg-white rounded-lg shadow-md mt-12 p-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 class="text-2xl font-bold text-primary mb-4">Entre em contato para uma proposta personalizada</h3>
            <p class="text-gray-600 mb-6">
              Nossa equipe está pronta para entender as necessidades do seu negócio e oferecer as melhores soluções em frutos do mar.
            </p>
            <router-link to="/contact" class="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded hover:bg-primary-dark transition duration-300">
              Solicitar proposta
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </router-link>
          </div>
          <div class="grid grid-cols-2 gap-4">
            <div class="bg-gray-light p-4 rounded-lg text-center">
              <h4 class="font-bold text-primary text-xl mb-2">+500</h4>
              <p class="text-gray-600">Clientes corporativos</p>
            </div>
            <div class="bg-gray-light p-4 rounded-lg text-center">
              <h4 class="font-bold text-primary text-xl mb-2">+50</h4>
              <p class="text-gray-600">Variedades de produtos</p>
            </div>
            <div class="bg-gray-light p-4 rounded-lg text-center">
              <h4 class="font-bold text-primary text-xl mb-2">100%</h4>
              <p class="text-gray-600">Satisfação garantida</p>
            </div>
            <div class="bg-gray-light p-4 rounded-lg text-center">
              <h4 class="font-bold text-primary text-xl mb-2">24h</h4>
              <p class="text-gray-600">Atendimento rápido</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeBusinessServices'
});
</script> 