<template lang="html">
  <DefaultLayout>
    <div class="container mx-auto py-12 px-4 animate-fade-in">
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold text-primary mb-4">Sobre a Villa do Mar</h1>
        <p class="text-xl text-gray-700 max-w-3xl mx-auto">
          Conheça nossa história, missão e compromisso com a qualidade em frutos do mar.
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16 animate-fade-in-right">
        <div>
          <h2 class="text-3xl font-bold text-primary mb-6">Nossa História</h2>
          <p class="text-gray-700 mb-4">
            Fundada em 2005, a Villa do Mar nasceu da paixão pelo mar e pelo desejo de levar os melhores frutos do mar até a mesa dos brasileiros. Começamos como uma pequena empresa familiar e, ao longo dos anos, crescemos para nos tornar referência em qualidade e frescor.
          </p>
          <p class="text-gray-700 mb-4">
            Hoje, trabalhamos com uma vasta rede de fornecedores selecionados, garantindo que cada produto que chega até você mantenha o sabor autêntico do mar.
          </p>
        </div>
        <div class="rounded-lg shadow-lg overflow-hidden h-96">
          <img src="https://images.unsplash.com/photo-1528826104212-b96c68e6c5ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Nossa História" class="w-full h-full object-cover transform hover:scale-105 transition duration-500">
        </div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16 animate-fade-in-left">
        <div class="rounded-lg shadow-lg overflow-hidden h-96 order-last md:order-first">
          <img src="https://images.unsplash.com/photo-1579173245636-1ef5bf3a7d14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Nossa Missão" class="w-full h-full object-cover transform hover:scale-105 transition duration-500">
        </div>
        <div>
          <h2 class="text-3xl font-bold text-primary mb-6">Nossa Missão</h2>
          <p class="text-gray-700 mb-4">
            Nossa missão é proporcionar experiências gastronômicas únicas através de frutos do mar de altíssima qualidade. Buscamos excelência em cada etapa, desde a seleção dos produtos até a entrega ao cliente.
          </p>
          <p class="text-gray-700 mb-4">
            Valorizamos a sustentabilidade e o respeito ao meio ambiente, trabalhando com pesca responsável e fornecedores que compartilham dos nossos valores.
          </p>
        </div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16 animate-fade-in-right">
        <div>
          <h2 class="text-3xl font-bold text-primary mb-6">Nosso Compromisso</h2>
          <p class="text-gray-700 mb-4">
            Na Villa do Mar, o compromisso com a qualidade é inegociável. Cada produto passa por rigorosos controles para garantir frescor, sabor e segurança alimentar.
          </p>
          <p class="text-gray-700 mb-4">
            Além disso, oferecemos um atendimento personalizado, seja para clientes individuais ou empresas, como restaurantes, hotéis e distribuidores, que confiam em nossa expertise.
          </p>
          <router-link to="/contact" class="inline-flex items-center px-6 py-3 bg-primary text-white rounded hover:bg-primary-dark transition duration-300 transform hover:scale-105 mt-4">
            Entre em Contato
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </router-link>
        </div>
        <div class="rounded-lg shadow-lg overflow-hidden h-96">
          <img src="https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" alt="Nosso Compromisso" class="w-full h-full object-cover transform hover:scale-105 transition duration-500">
        </div>
      </div>
      
      <div class="bg-tertiary p-12 rounded-lg shadow-inner text-center animate-fade-in-up">
        <h2 class="text-3xl font-bold text-primary mb-6">Nossos Valores</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div>
            <div class="inline-flex items-center justify-center h-16 w-16 bg-primary bg-opacity-10 text-primary rounded-full mb-4 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-primary mb-3">Qualidade Superior</h3>
            <p class="text-gray-700">Seleção rigorosa dos melhores produtos do mar.</p>
          </div>
          <div>
            <div class="inline-flex items-center justify-center h-16 w-16 bg-primary bg-opacity-10 text-primary rounded-full mb-4 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-primary mb-3">Frescor Garantido</h3>
            <p class="text-gray-700">Processos que preservam o sabor original.</p>
          </div>
          <div>
            <div class="inline-flex items-center justify-center h-16 w-16 bg-primary bg-opacity-10 text-primary rounded-full mb-4 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.128.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 13.125c0 1.036.084 2.055.248 3.04.433.021.868.043 1.304.075.056-.684.123-1.363.2-2.043C4.772 14.086 4.8 13.98 4.8 13.87c0-.428.034-.854.101-1.27A23.335 23.335 0 0112 9.205c2.144 0 4.206.288 6.131.806a16.637 16.637 0 00.101 1.27c0 .106.028.211.048.32.077.68.144 1.36.2 2.043.436-.032.871-.054 1.304-.075.164-.984.248-2.004.248-3.04 0-1.252-.107-2.475-.32-3.65a24.9 24.9 0 00-.331-2.257c.319-.022.64-.04.961-.052a25.31 25.31 0 001.744-.189 16.062 16.062 0 00-.124-1.6c-.144-.76-.392-1.5-.73-2.19-.054-.11-.108-.22-.168-.326c-.124-.217-.256-.424-.395-.62-.023-.033-.047-.066-.07-.098-.094-.13-.192-.253-.295-.371-.101-.116-.203-.227-.308-.332a13.35 13.35 0 00-1.553-1.225 16.532 16.532 0 00-2.196-1.084 23.271 23.271 0 00-2.356-.801A25.05 25.05 0 0012 3c-.439 0-.875.01-1.309.035a25.337 25.337 0 00-2.356.801 16.533 16.533 0 00-2.196 1.084 13.35 13.35 0 00-1.553 1.225c-.105.105-.207.216-.308.332-.103.118-.201.241-.295.371-.023.032-.047.065-.07.098-.139.196-.271.403-.395.62-.06.106-.114.216-.168.326-.338.69-.586 1.43-.73 2.19-.05.266-.093.534-.124 1.6.582.066 1.162.122 1.744.189.321.012.642.03.961.052-.106.746-.188 1.498-.247 2.257-.213 1.175-.32 2.398-.32 3.65z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold text-primary mb-3">Sustentabilidade</h3>
            <p class="text-gray-700">Compromisso com a pesca responsável.</p>
          </div>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DefaultLayout from "@/components/layouts/DefaultLayout.vue";

export default defineComponent({
  name: "AboutView",
  components: { DefaultLayout },
});
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 1s ease-out;
}

.animate-fade-in-right {
  animation: fadeInRight 1s ease-out;
}

.animate-fade-in-left {
  animation: fadeInLeft 1s ease-out;
}

.animate-fade-in-up {
  animation: fadeInUp 1s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
