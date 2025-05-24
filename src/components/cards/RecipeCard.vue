<template lang="html">
    <router-link
        :to="{ name: 'recipesDetails', params: { id: `${recipeItem.strMeal.toLowerCase().split(' ').join('-')}-${recipeItem.idMeal}` } }"
        class="bg-white shadow hover:shadow-lg rounded-lg overflow-hidden transition duration-300 ease-in-out flex flex-col h-full">
        <div>
            <img :src="recipeItem.strMealThumb"
                :alt="recipeItem.strMeal"
                class="h-52 w-full object-cover">
        </div>
        <div class="p-5 flex flex-col flex-grow">
            <h4 class="text-xl font-bold text-primary mb-4">{{ recipeItem.strMeal }}</h4>
            
            <div class="mt-auto">
                <router-link
                    :to="{ name: 'recipesDetails', params: { id: `${recipeItem.strMeal.toLowerCase().split(' ').join('-')}-${recipeItem.idMeal}` } }"
                    class="bg-primary text-white px-6 py-2 rounded hover:bg-primary-dark transition duration-300 ease-in-out w-full block text-center">
                    Ver Detalhes</router-link>
            </div>
        </div>
    </router-link>
</template>


<script lang="ts">
import { mealsFromCatDataType } from '@/data/dataTypes';
import { defineComponent } from 'vue'
export default defineComponent({
    name: "RecipeCard",
    props: ['recipe'],
    data() {
        return {
            recipeItem: this.recipe as mealsFromCatDataType
        }

    }
})
</script>