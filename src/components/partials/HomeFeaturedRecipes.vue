<template lang="html">
    <div class="bg-white py-20 px-5">
        <div class="container mx-auto">
            <div class="text-center mb-12">
                <h3 class="text-3xl md:text-4xl font-bold text-primary mb-4">Receitas em Destaque</h3>
                <p class="text-gray-700 max-w-2xl mx-auto">Uma seleção das melhores receitas para você experimentar e surpreender seus amigos e familiares.</p>
            </div>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto"
                v-if="!loading && $store.state.featuredRecipes.length">
                <RecipeCard v-for="(item, index) in $store.state.featuredRecipes"
                    :key="index"
                    :recipe="item" />
            </div>

            <div v-if="loading"
                class="max-w-[500px] px-5 mx-auto flex items-center justify-center">
                <font-awesome-icon icon="fa-solid fa-circle-notch"
                    class="text-primary text-6xl animate-spin py-10" />
            </div>

            <div v-if="!loading && !$store.state.featuredRecipes.length"
                class="max-w-[500px] px-5 mx-auto flex flex-col items-center justify-center gap-5">
                <p class="text-2xl font-medium text-red-600">OOPS... Não foi possível carregar as receitas 😟</p>
                <button
                    class="bg-primary px-5 py-2 rounded text-white inline-flex gap-3 items-center hover:bg-primary-dark transition ease-in-out duration-300"
                    @click="$router.go(0)">
                    <span>Recarregar Página</span>
                    <font-awesome-icon icon="fa-solid fa-circle-notch"
                        class="text-white" />
                </button>
            </div>

            <div class="flex items-center justify-center mt-12"
                v-if="$router.currentRoute.value.fullPath === '/'">
                <router-link to="/recipes"
                    class="bg-primary text-white px-8 py-3 rounded hover:bg-primary-dark transition duration-300 ease-in-out text-center">
                    Ver Mais Receitas</router-link>
            </div>
        </div>
    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios';
import RecipeCard from '../cards/RecipeCard.vue';

export default defineComponent({
    name: "HomeFeaturedRecipes",
    components: { RecipeCard },
    data() {
        return {
            loading: false,
        }
    },
    created() {
        if (!this.$store.state.featuredRecipes.length) {
            this.loading = true
            axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${this.$store.state.selectedCategory.strCategory}`)
                .then(response => {
                    this.loading = false
                    this.$store.commit("setFeaturedRecipes", response.data.meals.slice(0, 3))
                })
                .catch(error => {
                    this.loading = false
                    console.log(error)
                })
        }
    }
})
</script>