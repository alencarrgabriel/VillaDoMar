<template lang="html">
    <DefaultLayout>
        <div class="container mx-auto py-12 px-4 animate-fade-in">
            <div class="text-center mb-12">
                <h1 class="text-4xl md:text-5xl font-bold text-primary mb-4">Entre em Contato</h1>
                <p class="text-xl text-gray-700 max-w-3xl mx-auto">
                    Estamos prontos para atender você. Envie sua mensagem ou entre em contato diretamente.
                </p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                <div class="bg-white p-8 rounded-lg shadow-md animate-fade-in-left">
                    <h2 class="text-3xl font-bold text-primary mb-6">Envie uma Mensagem</h2>
                    <form @submit.prevent="submitForm" class="space-y-6">
                        <div>
                            <label for="name" class="block text-gray-700 font-medium mb-2">Nome</label>
                            <input type="text" id="name" v-model="formData.name" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Seu nome">
                        </div>
                        <div>
                            <label for="email" class="block text-gray-700 font-medium mb-2">E-mail</label>
                            <input type="email" id="email" v-model="formData.email" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Seu e-mail">
                        </div>
                        <div>
                            <label for="phone" class="block text-gray-700 font-medium mb-2">Telefone</label>
                            <input type="tel" id="phone" v-model="formData.phone" class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Seu telefone (opcional)">
                        </div>
                        <div>
                            <label for="message" class="block text-gray-700 font-medium mb-2">Mensagem</label>
                            <textarea id="message" v-model="formData.message" rows="4" required class="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Sua mensagem"></textarea>
                        </div>
                        <button type="submit" class="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-dark transition duration-300 transform hover:scale-105">Enviar Mensagem</button>
                    </form>
                    <div v-if="formSubmitted" class="mt-6 p-4 bg-green-100 text-green-700 rounded-md">
                        <p>Obrigado por sua mensagem! Entraremos em contato em breve.</p>
                    </div>
                </div>
                <div class="animate-fade-in-right">
                    <h2 class="text-3xl font-bold text-primary mb-6">Informações de Contato</h2>
                    <div class="space-y-8">
                        <div class="flex items-start gap-4">
                            <div class="bg-primary bg-opacity-10 p-3 rounded-full text-primary min-w-[40px] flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 class="text-lg font-bold text-gray-800 mb-1">Endereço</h3>
                                <p class="text-gray-700">Av. Paulista, 1234 - São Paulo, SP</p>
                            </div>
                        </div>
                        <div class="flex items-start gap-4">
                            <div class="bg-primary bg-opacity-10 p-3 rounded-full text-primary min-w-[40px] flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.268a2 2 0 012 1.268l1.732 8.66a2 2 0 01-.789 2.106l-1.445.963a.995.995 0 00-.573 1.146 17.158 17.158 0 003.07 5.428c.527.769 1.402 1.316 2.395 1.316h2.17c1.105 0 2-.895 2-2V16a1 1 0 00-1.496-.868l-1.879 1.252A14.023 14.023 0 0112 18c-2.334 0-4.534-.569-6.393-1.573l-1.879-1.252A1 1 0 003 16v-2.17c0-.997.874-1.872 1.643-1.999l.85-.136a2 2 0 011.857-1.385H8.66a2 2 0 012 2v.843c0 .528-.206 1.005-.541 1.354l-.433.288a2 2 0 01-1.154.368c-.502 0-.977-.187-1.34-.525l-.85-.566a2 2 0 01-.857-1.6V7.268A2 2 0 018.66 5H5a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <div>
                                <h3 class="text-lg font-bold text-gray-800 mb-1">Telefone</h3>
                                <p class="text-gray-700">(11) 1234-5678</p>
                            </div>
                        </div>
                        <div class="flex items-start gap-4">
                            <div class="bg-primary bg-opacity-10 p-3 rounded-full text-primary min-w-[40px] flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div>
                                <h3 class="text-lg font-bold text-gray-800 mb-1">E-mail</h3>
                                <p class="text-gray-700">contato@villadomar.com.br</p>
                            </div>
                        </div>
                        <div class="flex items-start gap-4">
                            <div class="bg-primary bg-opacity-10 p-3 rounded-full text-primary min-w-[40px] flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div>
                                <h3 class="text-lg font-bold text-gray-800 mb-1">Horário de Atendimento</h3>
                                <p class="text-gray-700">Segunda a Sexta: 8h às 18h</p>
                                <p class="text-gray-700">Sábado: 9h às 14h</p>
                            </div>
                        </div>
                    </div>
                    <div class="mt-8 bg-gray-100 p-6 rounded-lg">
                        <h3 class="text-xl font-bold text-primary mb-4">Para Empresas</h3>
                        <p class="text-gray-700 mb-4">Se você representa um restaurante, hotel ou distribuidor, temos condições especiais para fornecimento em escala.</p>
                        <button @click="openWhatsApp" class="inline-flex items-center px-6 py-3 bg-green-500 text-white rounded hover:bg-green-600 transition duration-300 transform hover:scale-105">
                            Fale pelo WhatsApp
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            
            <div class="rounded-lg overflow-hidden shadow-lg h-96 mb-16 animate-fade-in-up">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.209042043541!2d-46.65819268502214!3d-23.561373684683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f94344f4a0d30!2sAv.%20Paulista%2C%201234%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-100!5e0!3m2!1spt-BR!2sbr!4v1699553648281!5m2!1spt-BR!2sbr" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </DefaultLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DefaultLayout from '@/components/layouts/DefaultLayout.vue';

export default defineComponent({
    name: 'ContactView',
    components: { 
        DefaultLayout
    },
    data() {
        return {
            formData: {
                name: '',
                email: '',
                phone: '',
                message: ''
            },
            formSubmitted: false
        };
    },
    methods: {
        submitForm() {
            // Aqui você implementaria a lógica para enviar o formulário para um backend
            // Por enquanto, apenas mostramos uma mensagem de sucesso
            this.formSubmitted = true;
            // Limpar o formulário após o envio
            this.formData = {
                name: '',
                email: '',
                phone: '',
                message: ''
            };
            // Opcional: ocultar a mensagem de sucesso após alguns segundos
            setTimeout(() => {
                this.formSubmitted = false;
            }, 5000);
        },
        openWhatsApp() {
            const phoneNumber = '5511987654321'; // Substitua pelo número real
            const message = encodeURIComponent('Olá! Gostaria de mais informações sobre os produtos da Villa do Mar para minha empresa.');
            window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
        }
    }
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