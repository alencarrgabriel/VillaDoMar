<template>
  <transition name="modal-fade">
    <div v-if="isOpen" class="fixed inset-0 flex items-center justify-center z-50">
      <div class="fixed inset-0 bg-black bg-opacity-50" @click="closeModal"></div>
      <div class="bg-white rounded-lg shadow-xl w-full max-w-md mx-4 z-10 overflow-hidden">
        <div class="bg-primary p-6">
          <h2 class="text-2xl font-bold text-white text-center">Bem-vindo ao Villa do Mar</h2>
        </div>
        
        <div class="p-6">
          <p class="text-gray-700 text-center mb-8">Selecione seu perfil para continuar:</p>
          
          <div class="space-y-6">
            <button @click="selectClientType('pf')" class="bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white w-full py-4 px-6 rounded-lg font-medium transition duration-300 flex items-center justify-center">
              <span class="mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </span>
              Pessoa Física
            </button>
            
            <button @click="selectClientType('pj')" class="bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white w-full py-4 px-6 rounded-lg font-medium transition duration-300 flex items-center justify-center">
              <span class="mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </span>
              Pessoa Jurídica
            </button>
          </div>
        </div>
        
        <transition name="fade">
          <div v-if="showPFOptions" class="p-6 border-t">
            <p class="text-gray-700 text-center mb-6">Como deseja continuar?</p>
            
            <div class="space-y-4">
              <button @click="selectPFOption('products')" class="bg-secondary text-white w-full py-3 px-6 rounded-lg font-medium hover:bg-secondary-dark transition duration-300 flex items-center justify-center">
                <span class="mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                </span>
                Produtos Embalados
              </button>
              
              <button @click="selectPFOption('menu')" class="bg-secondary text-white w-full py-3 px-6 rounded-lg font-medium hover:bg-secondary-dark transition duration-300 flex items-center justify-center">
                <span class="mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </span>
                Cardápio Digital
              </button>
            </div>
          </div>
        </transition>
        
        <div class="bg-gray-100 p-4 text-center">
          <button @click="closeModal" class="text-gray-600 hover:text-primary text-sm">
            Continuar mais tarde
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ClientTypeModal',
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      showPFOptions: false
    };
  },
  methods: {
    closeModal() {
      this.$emit('close');
    },
    selectClientType(type: string) {
      if (type === 'pf') {
        this.showPFOptions = true;
      } else if (type === 'pj') {
        // Redirecionar diretamente para o site para PJ
        this.$emit('select', { type: 'pj', option: null });
        this.closeModal();
      }
    },
    selectPFOption(option: string) {
      this.$emit('select', { type: 'pf', option });
      this.closeModal();
    }
  }
});
</script>

<style scoped>
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style> 