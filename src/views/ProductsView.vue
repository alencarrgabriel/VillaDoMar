<template>
  <DefaultLayout>
    <div class="container mx-auto py-12 px-4">
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold text-primary mb-4">Nossos Produtos</h1>
        <p class="text-xl text-gray-700 max-w-3xl mx-auto">
          Explore nossa seleção completa de frutos do mar, pescados e produtos embalados de alta qualidade.
        </p>
      </div>
      
      <!-- Categorias -->
      <div class="grid grid-cols-1 md:grid-cols-6 gap-4 mb-10">
        <button 
          v-for="(category, index) in categories" 
          :key="index"
          class="py-3 px-4 rounded-md border text-center transition"
          :class="selectedCategory === category.id ? 'bg-primary text-white border-primary' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'"
          @click="filterByCategory(category.id)"
        >
          {{ category.name }}
        </button>
      </div>
      
      <!-- Filtros e Ordenação -->
      <div class="bg-white rounded-lg shadow-md p-6 mb-8">
        <div class="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <div class="flex gap-4 flex-wrap">
            <button 
              class="px-4 py-2 rounded-md transition"
              :class="filter === 'all' ? 'bg-primary text-white' : 'bg-white border border-gray-300 hover:bg-gray-50 text-gray-700'"
              @click="filter = 'all'"
            >
              Todos
            </button>
            <button 
              class="px-4 py-2 rounded-md transition"
              :class="filter === 'promocao' ? 'bg-primary text-white' : 'bg-white border border-gray-300 hover:bg-gray-50 text-gray-700'"
              @click="filter = 'promocao'"
            >
              Em Promoção
            </button>
            <button 
              class="px-4 py-2 rounded-md transition"
              :class="filter === 'novidade' ? 'bg-primary text-white' : 'bg-white border border-gray-300 hover:bg-gray-50 text-gray-700'"
              @click="filter = 'novidade'"
            >
              Novidades
            </button>
          </div>
          
          <div class="flex items-center gap-2">
            <span class="text-gray-700">Ordenar por:</span>
            <select 
              class="border border-gray-300 rounded-md px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-primary"
              v-model="sortBy"
            >
              <option value="relevance">Mais Relevantes</option>
              <option value="price-asc">Menor Preço</option>
              <option value="price-desc">Maior Preço</option>
            </select>
          </div>
        </div>
      </div>
      
      <!-- Grid de Produtos -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <ProductCard 
          v-for="(product, index) in filteredProducts" 
          :key="index"
          :title="product.title"
          :description="product.description"
          :image="product.image"
          :price="product.price"
          :unit="product.unit"
          :category="product.category"
        />
      </div>
      
      <!-- Mensagem se não houver produtos -->
      <div 
        v-if="filteredProducts.length === 0" 
        class="text-center py-12"
      >
        <p class="text-xl text-gray-600">Nenhum produto encontrado com os filtros selecionados.</p>
        <button 
          class="mt-4 bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-dark transition"
          @click="selectedCategory = 'all'; filter = 'all';"
        >
          Ver todos os produtos
        </button>
      </div>
      
      <!-- Paginação -->
      <div v-if="filteredProducts.length > 0" class="flex justify-center mt-12">
        <div class="flex gap-2">
          <button class="w-10 h-10 rounded-full flex items-center justify-center border border-gray-300 hover:bg-gray-100 transition">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
          </button>
          <button class="w-10 h-10 rounded-full flex items-center justify-center bg-primary text-white">1</button>
          <button class="w-10 h-10 rounded-full flex items-center justify-center border border-gray-300 hover:bg-gray-100 transition">2</button>
          <button class="w-10 h-10 rounded-full flex items-center justify-center border border-gray-300 hover:bg-gray-100 transition">3</button>
          <button class="w-10 h-10 rounded-full flex items-center justify-center border border-gray-300 hover:bg-gray-100 transition">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </DefaultLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DefaultLayout from '@/components/layouts/DefaultLayout.vue';
import ProductCard from '@/components/cards/ProductCard.vue';

interface Product {
  title: string;
  description: string;
  image: string;
  price: string;
  unit: string;
  category: string;
  isPromotion?: boolean;
  isNew?: boolean;
  categoryId: string;
}

export default defineComponent({
  name: 'ProductsView',
  components: { 
    DefaultLayout,
    ProductCard
  },
  data() {
    return {
      selectedCategory: 'all',
      filter: 'all',
      sortBy: 'relevance',
      categories: [
        { id: 'all', name: 'Todos' },
        { id: 'camaroes', name: 'Camarões' },
        { id: 'frutos-do-mar', name: 'Frutos do Mar' },
        { id: 'peixes', name: 'Peixes' },
        { id: 'congelados', name: 'Congelados' },
        { id: 'outros', name: 'Outros' }
      ],
      allProducts: [
        {
          title: 'Camarão Rosa G',
          description: 'Camarão rosa grande, limpo e congelado. Ideal para pratos especiais.',
          image: require('@/assets/produtos/camaroes/camarao-rosa-g.jpg'),
          price: 'R$ 89,90',
          unit: '500g',
          category: 'Camarões',
          isPromotion: true,
          isNew: false,
          categoryId: 'camaroes'
        },
        {
          title: 'Camarão Cinza M',
          description: 'Camarão cinza médio, limpo e congelado. Perfeito para coquetéis e saladas.',
          image: require('@/assets/produtos/camaroes/camarao-cinza.jpg'),
          price: 'R$ 69,90',
          unit: '500g',
          category: 'Camarões',
          isPromotion: false,
          isNew: false,
          categoryId: 'camaroes'
        },
        {
          title: 'Filé de Salmão',
          description: 'Filé de salmão fresco, sem espinhas. Perfeito para grelhados e assados.',
          image: require('@/assets/produtos/peixes/file-de-salmao.jpg'),
          price: 'R$ 69,90',
          unit: '500g',
          category: 'Peixes',
          isPromotion: true,
          isNew: true,
          categoryId: 'peixes'
        },
        {
          title: 'Polvo Inteiro Limpo',
          description: 'Polvo limpo e congelado, pronto para o preparo de diversas receitas.',
          image: require('@/assets/produtos/frutos-do-mar/polvo.jpg'),
          price: 'R$ 79,90',
          unit: '1kg',
          category: 'Frutos do Mar',
          isPromotion: false,
          isNew: true,
          categoryId: 'frutos-do-mar'
        },
        {
          title: 'Lula em Anéis',
          description: 'Anéis de lula limpos e congelados, prontos para fritar ou preparar em molhos.',
          image: require('@/assets/produtos/frutos-do-mar/lula-em-aneis.jpg'),
          price: 'R$ 49,90',
          unit: '500g',
          category: 'Frutos do Mar',
          isPromotion: false,
          isNew: false,
          categoryId: 'frutos-do-mar'
        },
        {
          title: 'Tilápia Filé',
          description: 'Filé de tilápia fresco, ideal para diversas preparações.',
          image: require('@/assets/produtos/peixes/file-de-tilapia.jpg'),
          price: 'R$ 39,90',
          unit: '500g',
          category: 'Peixes',
          isPromotion: false,
          isNew: false,
          categoryId: 'peixes'
        },
        {
          title: 'Camarão Empanado',
          description: 'Camarão empanado pronto para fritar. Ideal para petiscos e entradas.',
          image: require('@/assets/produtos/camaroes/camarao-empanado.jpg'),
          price: 'R$ 59,90',
          unit: '300g',
          category: 'Congelados',
          isPromotion: true,
          isNew: false,
          categoryId: 'congelados'
        },
        {
          title: 'Mexilhão Congelado',
          description: 'Mexilhão limpo e congelado, ideal para paellas e outros pratos.',
          image: require('@/assets/produtos/frutos-do-mar/mexilhao-congelado.jpg'),
          price: 'R$ 29,90',
          unit: '400g',
          category: 'Frutos do Mar',
          isPromotion: false,
          isNew: true,
          categoryId: 'frutos-do-mar'
        }
      ] as Product[]
    };
  },
  computed: {
    filteredProducts(): Product[] {
      let result = [...this.allProducts];
      
      // Filtrar por categoria
      if (this.selectedCategory !== 'all') {
        result = result.filter(product => product.categoryId === this.selectedCategory);
      }
      
      // Aplicar outros filtros, se necessário (promoção, novidade, etc.)
      if (this.filter === 'promocao') {
        result = result.filter(product => product.isPromotion);
      } else if (this.filter === 'novidade') {
        result = result.filter(product => product.isNew);
      }
      
      // Ordenação
      if (this.sortBy === 'price-asc') {
        result.sort((a, b) => this.extractPrice(a.price) - this.extractPrice(b.price));
      } else if (this.sortBy === 'price-desc') {
        result.sort((a, b) => this.extractPrice(b.price) - this.extractPrice(a.price));
      }
      
      return result;
    }
  },
  methods: {
    filterByCategory(categoryId: string) {
      this.selectedCategory = categoryId;
      
      // Atualizar URL sem recarregar a página
      const query = categoryId === 'all' ? {} : { categoria: categoryId };
      this.$router.push({ path: '/produtos', query });
    },
    extractPrice(priceString: string): number {
      // Extrair valor numérico de uma string de preço (ex: "R$ 89,90" -> 89.9)
      const numericValue = priceString.replace(/[^\d,]/g, '').replace(',', '.');
      return parseFloat(numericValue) || 0;
    }
  },
  created() {
    // Verificar se há uma categoria na URL e aplicar o filtro
    const categoryParam = this.$route.query.categoria as string;
    if (categoryParam) {
      const validCategory = this.categories.find(cat => cat.id === categoryParam);
      if (validCategory) {
        this.selectedCategory = categoryParam;
      }
    }
  }
});
</script> 