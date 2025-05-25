<template lang="html">
    <div class="bg-gray-light relative overflow-hidden">
        <!-- Elementos flutuantes de fundo -->
        <div class="absolute inset-0 overflow-hidden">
            <div class="floating-element absolute top-10 left-10 w-20 h-20 bg-primary opacity-10 rounded-full"></div>
            <div class="floating-element-reverse absolute top-40 right-20 w-32 h-32 bg-secondary opacity-10 rounded-full"></div>
            <div class="floating-element absolute bottom-20 left-1/3 w-24 h-24 bg-accent opacity-10 rounded-full"></div>
        </div>
        
        <div class="container mx-auto relative z-10">
            <div class="flex flex-col md:flex-row py-20 items-center justify-between px-5 md:px-10 relative">
                <div class="flex flex-col gap-8 max-w-2xl animate-fade-in-left">
                    <h1 class="text-5xl md:text-6xl font-bold text-primary">
                        <span class="inline-block animate-bounce-in" style="animation-delay: 0.1s">Frutos</span>
                        <span class="inline-block animate-bounce-in" style="animation-delay: 0.2s">do</span>
                        <span class="inline-block animate-bounce-in" style="animation-delay: 0.3s">Mar</span>
                        <span class="text-secondary inline-block animate-bounce-in" style="animation-delay: 0.4s">Premium</span>
                    </h1>
                    <p class="text-xl text-gray-700 animate-fade-in" style="animation-delay: 0.5s">
                        Os melhores pescados e frutos do mar para as experiências gastronômicas mais memoráveis.
                    </p>
                    <div class="flex flex-col md:flex-row gap-5 mt-4">
                        <router-link to="/produtos"
                            class="bg-primary text-white px-8 py-4 rounded text-lg hover:bg-primary-dark transition-all duration-300 ease-in-out text-center transform hover:scale-105 hover:shadow-xl animate-fade-in-up"
                            style="animation-delay: 0.6s">
                            Explorar Produtos
                        </router-link>
                        <router-link to="/cardapio"
                            class="bg-white text-primary border-2 border-primary hover:border-primary-dark px-8 py-4 rounded text-lg transition-all duration-300 ease-in-out text-center transform hover:scale-105 hover:shadow-xl animate-fade-in-up"
                            style="animation-delay: 0.7s">
                            Ver Cardápio
                        </router-link>
                    </div>
                </div>
                
                <div class="hidden md:block md:w-[45%] lg:w-[40%] mt-10 md:mt-0 relative h-[500px] overflow-hidden rounded-xl shadow-2xl animate-fade-in-right group">
                    <div class="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                    <transition-group name="slide-fade" mode="out-in">
                        <div v-for="(banner, index) in banners" :key="index" v-show="currentBannerIndex === index" class="absolute inset-0">
                            <img :src="banner.image" 
                                 :alt="banner.alt" 
                                 class="w-full h-full object-cover transform transition-transform duration-[2000ms] group-hover:scale-110"
                                 :class="{'scale-105': currentBannerIndex === index}">
                        </div>
                    </transition-group>
                    <div class="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
                        <button v-for="(banner, index) in banners" 
                                :key="index" 
                                @click="currentBannerIndex = index" 
                                class="w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-125" 
                                :class="{'bg-white w-8': currentBannerIndex === index, 'bg-white/50': currentBannerIndex !== index}" 
                                aria-label="Mudar banner"></button>
                    </div>
                </div>
                
                <div class="absolute right-[40px] bottom-[-20px] shadow-2xl bg-white px-5 py-4 w-[250px] hidden md:block rounded-lg animate-fade-in-up hover-lift" style="animation-delay: 0.8s">
                    <div class="flex items-center gap-3 mb-3">
                        <div class="relative">
                            <img :src="require('@/assets/produtos/camaroes/camarao-rosa-g.jpg')"
                                alt="Camarão Rosa"
                                class="rounded-full w-[60px] h-[60px] object-cover transform hover:scale-110 transition duration-300">
                            <div class="absolute -top-1 -right-1 w-6 h-6 bg-secondary rounded-full flex items-center justify-center animate-pulse">
                                <span class="text-white text-xs font-bold">1°</span>
                            </div>
                        </div>
                        <div>
                            <p class="font-bold text-primary mb-1">Camarão Rosa</p>
                            <div class="flex items-center text-secondary">
                                <span class="text-sm animate-star-pulse">★★★★★</span>
                            </div>
                        </div>
                    </div>
                    <p class="text-gray-600 text-sm">Nosso produto mais vendido, fresquinho e selecionado</p>
                </div>
            </div>
        </div>
        
        <!-- Ondas animadas no fundo -->
        <div class="absolute bottom-0 left-0 right-0">
            <svg class="waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
                <defs>
                    <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                </defs>
                <g class="parallax">
                    <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(232,93,4,0.05)" />
                    <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(42,157,143,0.03)" />
                    <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(232,93,4,0.01)" />
                </g>
            </svg>
        </div>
    </div>
    
    <div class="container mx-auto py-16 px-5 md:px-10">
        <div class="text-center max-w-3xl mx-auto mb-10 animate-fade-in-up">
            <h2 class="text-3xl md:text-4xl font-bold text-primary mb-6">O melhor do mar na sua mesa</h2>
            <p class="text-lg text-gray-700">
                Trabalhamos com produtos de alta qualidade, selecionados para garantir o melhor sabor e frescor. De pescados a frutos do mar, temos tudo o que você precisa para preparar pratos incríveis.
            </p>
        </div>
        
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            <div class="text-center group animate-fade-in-up" style="animation-delay: 0.1s">
                <div class="inline-flex items-center justify-center h-16 w-16 bg-primary bg-opacity-10 text-primary rounded-full mb-4 group-hover:bg-opacity-20 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                </div>
                <h3 class="font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors duration-300">Qualidade</h3>
                <p class="text-gray-600 text-sm">Produtos selecionados</p>
            </div>
            
            <div class="text-center group animate-fade-in-up" style="animation-delay: 0.2s">
                <div class="inline-flex items-center justify-center h-16 w-16 bg-primary bg-opacity-10 text-primary rounded-full mb-4 group-hover:bg-opacity-20 transition-all duration-300 transform group-hover:scale-110 group-hover:-rotate-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <h3 class="font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors duration-300">Entrega</h3>
                <p class="text-gray-600 text-sm">Rápida e segura</p>
            </div>
            
            <div class="text-center group animate-fade-in-up" style="animation-delay: 0.3s">
                <div class="inline-flex items-center justify-center h-16 w-16 bg-primary bg-opacity-10 text-primary rounded-full mb-4 group-hover:bg-opacity-20 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                </div>
                <h3 class="font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors duration-300">Frescor</h3>
                <p class="text-gray-600 text-sm">Garantia de qualidade</p>
            </div>
            
            <div class="text-center group animate-fade-in-up" style="animation-delay: 0.4s">
                <div class="inline-flex items-center justify-center h-16 w-16 bg-primary bg-opacity-10 text-primary rounded-full mb-4 group-hover:bg-opacity-20 transition-all duration-300 transform group-hover:scale-110 group-hover:-rotate-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                </div>
                <h3 class="font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors duration-300">Variedade</h3>
                <p class="text-gray-600 text-sm">Ampla seleção de produtos</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "HomeHeroView",
    data() {
        return {
            currentBannerIndex: 0,
            banners: [
                { image: require('@/assets/banners/frutos-do-mar.jpg'), alt: 'Frutos do Mar Premium' },
                { image: require('@/assets/banners/controle-de-qualidade.jpg'), alt: 'Controle de Qualidade' }
            ]
        }
    },
    mounted() {
        // Auto-rotate banners
        setInterval(() => {
            this.currentBannerIndex = (this.currentBannerIndex + 1) % this.banners.length
        }, 5000)
        
        // Parallax effect on scroll
        window.addEventListener('scroll', this.handleScroll)
    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
    },
    methods: {
        handleScroll() {
            const scrolled = window.pageYOffset
            const parallax = Array.from(document.querySelectorAll('.floating-element')).map(el => el as HTMLElement)
            const parallaxReverse = Array.from(document.querySelectorAll('.floating-element-reverse')).map(el => el as HTMLElement)
            
            parallax.forEach(element => {
                const speed = 0.5
                const yPos = -(scrolled * speed)
                element.style.transform = `translateY(${yPos}px)`
            })
            
            parallaxReverse.forEach(element => {
                const speed = 0.3
                const yPos = scrolled * speed
                element.style.transform = `translateY(${yPos}px)`
            })
        }
    }
})
</script>

<style scoped>
/* Animações existentes */
.fade-enter-active, .fade-leave-active {
    transition: opacity 1s ease;
}

.fade-enter-from, .fade-leave-to {
    opacity: 0;
}

/* Nova animação slide-fade */
.slide-fade-enter-active {
    transition: all 1s ease;
}

.slide-fade-leave-active {
    transition: all 0.8s ease;
}

.slide-fade-enter-from {
    transform: translateX(20px);
    opacity: 0;
}

.slide-fade-leave-to {
    transform: translateX(-20px);
    opacity: 0;
}

/* Animações de entrada */
.animate-fade-in {
    animation: fadeIn 1s ease-out forwards;
    opacity: 0;
}

.animate-fade-in-left {
    animation: fadeInLeft 1s ease-out forwards;
    opacity: 0;
}

.animate-fade-in-right {
    animation: fadeInRight 1s ease-out forwards;
    opacity: 0;
}

.animate-fade-in-up {
    animation: fadeInUp 1s ease-out forwards;
    opacity: 0;
}

.animate-bounce-in {
    animation: bounceIn 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
    opacity: 0;
}

/* Elementos flutuantes */
.floating-element {
    animation: float 6s ease-in-out infinite;
}

.floating-element-reverse {
    animation: float-reverse 8s ease-in-out infinite;
}

/* Hover lift effect */
.hover-lift {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hover-lift:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

/* Animação das estrelas */
.animate-star-pulse {
    animation: starPulse 2s ease-in-out infinite;
}

/* Ondas animadas */
.waves {
    position: relative;
    width: 100%;
    height: 100px;
    margin-bottom: -7px;
    min-height: 100px;
    max-height: 150px;
}

.parallax > use {
    animation: move-forever 25s cubic-bezier(.55,.5,.45,.5) infinite;
}

.parallax > use:nth-child(1) {
    animation-delay: -2s;
    animation-duration: 7s;
}

.parallax > use:nth-child(2) {
    animation-delay: -3s;
    animation-duration: 10s;
}

.parallax > use:nth-child(3) {
    animation-delay: -4s;
    animation-duration: 13s;
}

/* Keyframes */
@keyframes fadeIn {
    to {
        opacity: 1;
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

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes bounceIn {
    0% {
        opacity: 0;
        transform: scale(0.3);
    }
    50% {
        opacity: 1;
        transform: scale(1.05);
    }
    70% {
        transform: scale(0.9);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
}

@keyframes float {
    0%, 100% {
        transform: translateY(0) rotate(0deg);
    }
    33% {
        transform: translateY(-20px) rotate(5deg);
    }
    66% {
        transform: translateY(10px) rotate(-5deg);
    }
}

@keyframes float-reverse {
    0%, 100% {
        transform: translateY(0) rotate(0deg);
    }
    33% {
        transform: translateY(20px) rotate(-5deg);
    }
    66% {
        transform: translateY(-10px) rotate(5deg);
    }
}

@keyframes starPulse {
    0%, 100% {
        transform: scale(1);
        opacity: 1;
    }
    50% {
        transform: scale(1.1);
        opacity: 0.8;
    }
}

@keyframes move-forever {
    0% {
        transform: translate3d(-90px,0,0);
    }
    100% { 
        transform: translate3d(85px,0,0);
    }
}
</style>