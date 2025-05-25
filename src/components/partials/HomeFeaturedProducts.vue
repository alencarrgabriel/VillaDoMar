<template>
  <section class="py-16 bg-white">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4">Produtos em Destaque</h2>
        <p class="text-gray-700 max-w-3xl mx-auto">
          Conheça nossos produtos mais populares, selecionados especialmente para você.
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <ProductCard 
          v-for="(product, index) in products" 
          :key="index"
          :title="product.title"
          :description="product.description"
          :image="product.image"
          :price="product.price"
          :unit="product.unit"
          :category="product.category"
        />
      </div>
      
      <div class="text-center mt-12">
        <router-link to="/produtos" class="inline-flex items-center px-6 py-3 bg-primary text-white rounded hover:bg-primary-dark transition duration-300">
          Ver todos os produtos
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProductCard from '@/components/cards/ProductCard.vue';

export default defineComponent({
  name: 'HomeFeaturedProducts',
  components: {
    ProductCard
  },
  data() {
    return {
      products: [
        {
          title: 'Camarão Rosa G',
          description: 'Camarão rosa grande, limpo e congelado. Ideal para pratos especiais.',
          image: require('@/assets/produtos/camaroes/camarao-rosa-g.jpg'),
          price: 'R$ 89,90',
          unit: '500g',
          category: 'Camarões'
        },
        {
          title: 'Filé de Salmão',
          description: 'Filé de salmão fresco, sem espinhas. Perfeito para grelhados e assados.',
          image: require('@/assets/produtos/peixes/file-de-salmao.jpg'),
          price: 'R$ 69,90',
          unit: '500g',
          category: 'Peixes'
        },
        {
          title: 'Polvo Inteiro Limpo',
          description: 'Polvo limpo e congelado, pronto para o preparo de diversas receitas.',
          image: require('@/assets/produtos/frutos-do-mar/polvo.jpg'),
          price: 'R$ 79,90',
          unit: '1kg',
          category: 'Frutos do Mar'
        },
        {
          title: 'Lula em Anéis',
          description: 'Anéis de lula limpos e congelados, prontos para fritar ou preparar em molhos.',
          image: require('@/assets/produtos/frutos-do-mar/lula-em-aneis.jpg'),
          price: 'R$ 49,90',
          unit: '500g',
          category: 'Frutos do Mar'
        },
      ]
    };
  }
});
</script> 