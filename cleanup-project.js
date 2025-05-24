/**
 * Script para limpar o projeto Villa do Mar
 * Remove arquivos não utilizados após a migração do template FoodMood
 * 
 * Para executar: node cleanup-project.js
 */

const fs = require('fs');
const path = require('path');

// Lista de arquivos a serem removidos (caminhos relativos à raiz do projeto)
const filesToRemove = [
  // Views antigas que não são mais usadas ou foram substituídas
  'src/views/DownloadView.vue',        // Download app não é mais relevante
  
  // Componentes parciais não utilizados no novo design
  'src/components/partials/HomeFoodOfTheDay.vue',
  'src/components/partials/HomeFeaturedRecipes.vue',
  'src/components/partials/HomePopularFoods.vue',
  'src/components/partials/DownloadHero.vue',
  
  // Outros arquivos obsoletos
  // Adicione outros arquivos conforme necessário
];

// Função para remover um arquivo com segurança
function removeFile(filePath) {
  const fullPath = path.join(__dirname, filePath);
  
  try {
    if (fs.existsSync(fullPath)) {
      fs.unlinkSync(fullPath);
      console.log(`✅ Removido: ${filePath}`);
    } else {
      console.log(`⚠️ Arquivo não encontrado: ${filePath}`);
    }
  } catch (error) {
    console.error(`❌ Erro ao remover ${filePath}:`, error.message);
  }
}

// Remover todos os arquivos da lista
console.log('🧹 Iniciando limpeza do projeto...');
filesToRemove.forEach(removeFile);
console.log('✨ Limpeza concluída!');

// Lista de arquivos que precisam ser renomeados
console.log('\n📝 Os seguintes arquivos podem ser renomeados para seguir as convenções:');
console.log('- src/views/RecipesView.vue → src/views/ProductsListView.vue (já substituído pelo ProductsView.vue)');
console.log('- src/views/RecipeDetailView.vue → src/views/ProductDetailView.vue (a ser implementado)');
console.log('- src/views/RecipeCategoryView.vue → src/views/CategoryView.vue (já substituído pelo ProductCategoryView.vue)');

// Instruções finais
console.log('\n🔍 Recomendações adicionais:');
console.log('1. Verifique e atualize as rotas no arquivo src/router/index.ts');
console.log('2. Atualize os imports em arquivos que referenciam os componentes removidos');
console.log('3. Execute os testes para garantir que nada foi quebrado durante a limpeza'); 