<template>
  <ClientTypeModal 
    :isOpen="showClientTypeModal" 
    @close="hideClientTypeModal" 
    @select="handleClientTypeSelection" 
  />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ClientTypeModal from './components/modals/ClientTypeModal.vue';

interface ClientSelection {
  type: string;
  option: string | null;
}

export default defineComponent({
  name: 'App',
  components: {
    ClientTypeModal
  },
  data() {
    return {
      showClientTypeModal: true,
      clientType: null as string | null,
      clientOption: null as string | null
    }
  },
  created() {
    // Verificar se o usuário já fez uma escolha anteriormente
    const clientSelection = localStorage.getItem('villaDoMar_clientSelection');
    if (clientSelection) {
      const selection = JSON.parse(clientSelection) as ClientSelection;
      this.clientType = selection.type;
      this.clientOption = selection.option;
      this.showClientTypeModal = false;
    }
  },
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: 'Villa do Mar',
    // all titles will be injected into this template
    titleTemplate: '%s | Frutos do Mar Premium'
  },
  methods: {
    hideClientTypeModal() {
      this.showClientTypeModal = false;
    },
    handleClientTypeSelection(selection: {type: string, option: string | null}) {
      this.clientType = selection.type;
      this.clientOption = selection.option;
      
      // Salvar a seleção no localStorage
      localStorage.setItem('villaDoMar_clientSelection', JSON.stringify(selection));
      
      // Redirecionar com base na seleção
      if (selection.type === 'pf' && selection.option === 'menu') {
        // Redirecionar para o cardápio digital
        this.$router.push('/cardapio');
      } else {
        // Redirecionar para a página inicial de produtos
        this.$router.push('/');
      }
    }
  }
});
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Roboto+Slab:wght@400;500;600;700&display=swap');

body {
  font-family: 'Montserrat', sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Roboto Slab', serif;
}

.container {
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
}

nav a.router-link-exact-active {
  color: #0C5C89;
}
</style>
