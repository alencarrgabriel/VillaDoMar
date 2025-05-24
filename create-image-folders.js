/**
 * Script para criar a estrutura de pastas para imagens
 * Execução: node create-image-folders.js
 */

const fs = require('fs');
const path = require('path');

// Caminho base para a pasta de assets
const ASSETS_DIR = path.join(__dirname, 'src', 'assets');

// Definição da estrutura de pastas
const folders = [
  'banners',
  'categorias',
  'produtos',
  'produtos/camaroes',
  'produtos/peixes',
  'produtos/frutos-do-mar',
  'produtos/congelados',
  'icons',
  'logo'
];

// Função para criar pasta se não existir
function createDirIfNotExists(dirPath) {
  try {
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
      console.log(`✅ Pasta criada: ${dirPath}`);
    } else {
      console.log(`ℹ️ Pasta já existe: ${dirPath}`);
    }
  } catch (err) {
    console.error(`❌ Erro ao criar pasta ${dirPath}:`, err.message);
  }
}

// Função principal
function main() {
  console.log('🖼️ Criando estrutura de pastas para imagens...');
  
  // Verificar se a pasta assets existe
  createDirIfNotExists(ASSETS_DIR);
  
  // Criar cada pasta da estrutura
  folders.forEach(folder => {
    const fullPath = path.join(ASSETS_DIR, folder);
    createDirIfNotExists(fullPath);
  });
  
  // Criar arquivo README em cada pasta
  folders.forEach(folder => {
    const readmePath = path.join(ASSETS_DIR, folder, 'README.md');
    const folderName = folder.includes('/') ? folder.split('/').pop() : folder;
    
    if (!fs.existsSync(readmePath)) {
      const content = `# ${folderName.charAt(0).toUpperCase() + folderName.slice(1)}\n\nEsta pasta contém as imagens de ${folderName}.\n\nSiga o padrão de nomenclatura definido no documento de padronização.`;
      fs.writeFileSync(readmePath, content);
      console.log(`📄 README criado: ${readmePath}`);
    }
  });
  
  console.log('✨ Estrutura de pastas criada com sucesso!');
}

// Executar a função principal
main(); 