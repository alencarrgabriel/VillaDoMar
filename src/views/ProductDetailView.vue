<template>
  <DefaultLayout>
    <div class="container mx-auto py-12 px-4">
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold text-primary mb-4">Detalhes do Produto</h1>
        <p class="text-xl text-gray-700 max-w-3xl mx-auto">
          Esta página será implementada para exibir detalhes completos de um produto específico.
        </p>
      </div>
      
      <div class="bg-gray-100 p-8 rounded-lg text-center">
        <p class="text-lg text-gray-600">Página em construção</p>
        <router-link to="/produtos" class="inline-block mt-4 px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition">
          Voltar para produtos
        </router-link>
      </div>
    </div>
  </DefaultLayout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import DefaultLayout from "@/components/layouts/DefaultLayout.vue";

export default defineComponent({
  name: "ProductDetailView",
  components: { DefaultLayout },
});
</script> 