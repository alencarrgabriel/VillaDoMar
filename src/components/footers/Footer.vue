<template lang="">
  <footer class="bg-tertiary-light border-t">
    <div class="container mx-auto py-16">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-10">
        <div class="flex flex-col gap-4 md:col-span-4">
          <h4 class="text-3xl font-bold text-primary">
            Villa<span class="text-secondary">do Mar</span>
          </h4>
          <p class="text-gray-700">Villa do Mar é uma empresa especializada em frutos do mar de alta qualidade. Oferecemos tanto produtos embalados premium quanto pratos preparados para consumo local ou delivery.</p>
        </div>
        <div class="flex flex-col gap-4 md:col-span-2">
          <h4 class="text-xl font-bold text-primary">
            Menu
          </h4>
          <div class="flex flex-col gap-3">
            <router-link
              to="/"
              class="font-medium text-gray-dark hover:text-primary transition duration-300 ease-in-out"
              >Home</router-link
            >
            <router-link
              to="/about"
              class="font-medium text-gray-dark hover:text-primary transition duration-300 ease-in-out"
              >Empresa</router-link
            >
            <router-link
              to="/recipes"
              class="font-medium text-gray-dark hover:text-primary transition duration-300 ease-in-out"
              >Produtos</router-link
            >
            <router-link
              to="/cardapio"
              class="font-medium text-gray-dark hover:text-primary transition duration-300 ease-in-out"
              >Cardápio</router-link
            >
            <router-link
              to="/contact"
              class="font-medium text-gray-dark hover:text-primary transition duration-300 ease-in-out"
              >Contato</router-link
            >
          </div>
        </div>
        <div class="flex flex-col gap-4 md:col-span-2">
          <h4 class="text-xl font-bold text-primary">
            Produtos
          </h4>
          <div class="flex flex-col gap-3">
            <router-link
              to="/produtos/peixes"
              class="font-medium text-gray-dark hover:text-primary transition duration-300 ease-in-out"
              >Peixes</router-link
            >
            <router-link
              to="/produtos/camaroes"
              class="font-medium text-gray-dark hover:text-primary transition duration-300 ease-in-out"
              >Camarões</router-link
            >
            <router-link
              to="/produtos/frutos-do-mar"
              class="font-medium text-gray-dark hover:text-primary transition duration-300 ease-in-out"
              >Frutos do Mar</router-link
            >
            <router-link
              to="/produtos/congelados"
              class="font-medium text-gray-dark hover:text-primary transition duration-300 ease-in-out"
              >Congelados</router-link
            >
            <router-link
              to="/produtos"
              class="font-medium text-gray-dark hover:text-primary transition duration-300 ease-in-out"
              >Todos os Produtos</router-link
            >
          </div>
        </div>

        <div class="flex flex-col gap-4 md:col-span-4">
          <h4 class="text-xl font-bold text-primary">
            Fique por dentro
          </h4>
          <div>
            <p class="mb-2">Dúvidas ou Sugestões?</p>
            <p>Ficaremos felizes em ouvir você</p>
          </div>
          <form class="flex flex-col gap-4 mt-4">
            <input type="text" placeholder="Seu nome" class="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" />
            <input type="email" placeholder="Seu e-mail" class="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" />
            <button class="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition">Enviar</button>
          </form>
          
          <div class="flex gap-4 mt-4">
            <a href="#" class="text-primary hover:text-primary-dark transition">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
              </svg>
            </a>
            <a href="#" class="text-primary hover:text-primary-dark transition">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" class="text-primary hover:text-primary-dark transition">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-primary text-white py-4">
      <div class="container mx-auto">
        <p class="text-center">&copy; Villa do Mar - {{new Date().getFullYear()}}. Todos os direitos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "FooterComponent",
  components: {},
});
</script>
