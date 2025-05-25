<template>
  <section class="py-16 bg-gray-light">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4">Nossos Produtos</h2>
        <p class="text-gray-700 max-w-3xl mx-auto">
          Descubra nossa seleção de frutos do mar premium, cuidadosamente selecionados para oferecer o melhor em qualidade e sabor para sua mesa.
        </p>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <CategoryCard 
          v-for="(category, index) in categories" 
          :key="index"
          :title="category.title"
          :description="category.description"
          :image="category.image"
          :link="category.link"
        />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CategoryCard from '@/components/cards/CategoryCard.vue';

export default defineComponent({
  name: 'HomeCategoriesSection',
  components: {
    CategoryCard
  },
  data() {
    return {
      categories: [
        {
          title: 'Camarões',
          description: 'Camarões frescos e congelados de diversas variedades, selecionados para oferecer o melhor sabor e textura para suas receitas.',
          image: require('@/assets/produtos/camaroes/camarao-rosa-g.jpg'),
          link: '/produtos?categoria=camaroes'
        },
        {
          title: 'Frutos do Mar',
          description: 'Polvo, lula, mexilhão e mais - uma seleção completa de frutos do mar para criar pratos sofisticados e saborosos.',
          image: require('@/assets/produtos/frutos-do-mar/polvo.jpg'),
          link: '/produtos?categoria=frutos-do-mar'
        },
        {
          title: 'Peixes',
          description: 'Variedade de peixes frescos e congelados, perfeitos para diferentes preparações culinárias.',
          image: require('@/assets/produtos/peixes/file-de-salmao.jpg'),
          link: '/produtos?categoria=peixes'
        },
        {
          title: 'Produtos Congelados',
          description: 'Produtos congelados e embalados, prontos para preparo, mantendo todo o sabor e qualidade dos frutos do mar.',
          image: require('@/assets/produtos/congelados/file-congelado.jpg'),
          link: '/produtos?categoria=congelados'
        },
        {
          title: 'Outros Itens',
          description: 'Complementos e outros produtos do mar para completar suas receitas e experiências gastronômicas.',
          image: 'https://images.unsplash.com/photo-1607301406259-dfb186e15de8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
          link: '/produtos?categoria=outros'
        }
      ]
    };
  }
});
</script> 