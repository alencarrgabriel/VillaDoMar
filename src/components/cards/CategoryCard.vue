<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden group">
    <div class="h-56 overflow-hidden">
      <img :src="image" :alt="title" class="w-full h-full object-cover transform transition duration-500 group-hover:scale-105">
    </div>
    <div class="p-6">
      <h3 class="text-2xl font-bold text-primary mb-3">{{ title }}</h3>
      <p class="text-gray-600 mb-5">{{ description }}</p>
      <router-link :to="link" class="inline-flex items-center font-medium text-accent hover:text-accent-dark transition duration-300">
        Ver produtos
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CategoryCard',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    }
  }
});
</script> 