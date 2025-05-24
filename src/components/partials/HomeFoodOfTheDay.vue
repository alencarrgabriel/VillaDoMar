<template lang="html">
    <div class="bg-gray-light py-20 px-5">
        <div class="container mx-auto">
            <h3 class="text-center text-3xl md:text-4xl mb-12 font-bold text-primary">Receita do Momento 
                <span v-if="loading || $store.state.recipeOfTheDay !== null">😉</span>
                <span v-else>😟</span>
            </h3>
            
            <div class="flex flex-col md:flex-row max-w-[1100px] mx-auto items-center gap-12"
                v-if="!loading && $store.state.recipeOfTheDay !== null">

                <div class="flex-1">
                    <h4 class="text-3xl font-bold mb-6 text-primary">{{ $store.state.recipeOfTheDay?.strMeal }}</h4>
                    <div class="mb-4">
                        <p class="text-primary mb-3 bg-primary bg-opacity-10 border border-primary border-opacity-30 rounded-full w-fit px-5 py-1 font-medium">
                            Instruções: </p>
                        <p class="text-base text-gray-700 leading-relaxed">{{ $store.state.recipeOfTheDay?.strInstructions.substring(0, 200) }}...</p>
                    </div>
                    
                    <div class="mb-8 flex flex-wrap gap-3 mt-5"
                        v-if="$store.state.recipeOfTheDay.strTags !== null">
                        <router-link :to="{ name: 'recipesCategories', params: { name: item.toLowerCase() } }"
                            class="bg-white text-primary border border-primary hover:bg-primary hover:text-white px-4 py-1.5 rounded-full text-sm transition duration-300 ease-in-out"
                            v-for="(item, index) in $store.state.recipeOfTheDay?.strCategory.split(',')"
                            :key="index">
                            {{ item }}
                        </router-link>
                    </div>
                    
                    <router-link
                        :to="{ name: 'recipesDetails', params: { id: `${$store.state.recipeOfTheDay?.strMeal.toLowerCase().split(' ').join('-')}-${$store.state.recipeOfTheDay?.idMeal}` } }"
                        class="block w-full md:w-auto md:inline-block text-center bg-primary text-white px-8 py-3 rounded hover:bg-primary-dark transition duration-300 ease-in-out">
                        Ver Detalhes da Receita
                    </router-link>
                </div>
                
                <div class="flex-1">
                    <img :src="$store.state.recipeOfTheDay?.strMealThumb"
                        :alt="$store.state.recipeOfTheDay?.strMeal"
                        class="rounded-lg shadow-lg w-full h-auto hover:shadow-xl transition duration-300 ease-in-out">
                </div>
            </div>

            <div v-if="loading"
                class="max-w-[500px] px-5 mx-auto flex items-center justify-center">
                <font-awesome-icon icon="fa-solid fa-circle-notch"
                    class="text-primary text-6xl animate-spin py-10" />
            </div>

            <div v-if="!loading && $store.state.recipeOfTheDay === null"
                class="max-w-[500px] px-5 mx-auto flex flex-col items-center justify-center gap-5">
                <p class="text-2xl font-medium text-red-600">OOPS... Receita Não Encontrada 😟</p>
                <button
                    class="bg-primary px-5 py-2 rounded text-white inline-flex gap-3 items-center hover:bg-primary-dark transition ease-in-out duration-300"
                    @click="$router.go(0)">
                    <span>Recarregar Página</span>
                    <font-awesome-icon icon="fa-solid fa-circle-notch"
                        class="text-white" />
                </button>
            </div>
        </div>
    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import { mealsDBDataType } from "../../data/dataTypes"
import axios from "axios";

export default defineComponent({
    data() {
        return {
            loading: false
        }
    },

    created() {
        if (this.$store.state.recipeOfTheDay === null && !this.loading) {
            this.fetchRecipe()
        }
    },
    
    beforeUnmount() {
        this.loading = false
    },
    
    methods: {
        fetchRecipe() {
            this.loading = true
            axios.get("https://www.themealdb.com/api/json/v1/1/random.php")
                .then(response => {
                    this.loading = false
                    const meal: mealsDBDataType = response.data.meals[0]
                    if (meal.strMeal) {
                        this.$store.commit("setRecipeOfTheDay", meal)
                    }
                })
                .catch(error => {
                    this.loading = false
                    console.log(error)
                })
        }
    }
})
</script>