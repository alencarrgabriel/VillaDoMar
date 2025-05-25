# Villa do Mar - Website

## Descrição
O Villa do Mar é um site de e-commerce especializado em frutos do mar, oferecendo uma experiência completa para compra de produtos marinhos premium. O projeto foi desenvolvido com foco em proporcionar uma experiência moderna e intuitiva para os clientes que buscam pescados e frutos do mar de alta qualidade.

## Tecnologias Utilizadas
- Vue.js 3
- TypeScript
- Vue Router
- Tailwind CSS
- FontAwesome (para ícones)
- SessionStorage (para armazenamento de preferências do cliente)

## Funcionalidades Principais
- **Modal de seleção de tipo de cliente**: Permite diferenciar entre Pessoa Física e Pessoa Jurídica
- **Navegação por categorias de produtos**: Camarões, Frutos do Mar, Peixes, Congelados, etc.
- **Cardápio Digital**: Página dedicada para exibição do cardápio do restaurante
- **Filtros de produtos**: Por categoria, promoções, novidades
- **Responsividade completa**: Layout adaptado para desktop e dispositivos móveis
- **Vendas via WhatsApp**: Botão flutuante e integração direta para pedidos via WhatsApp
- **Tema personalizado**: Identidade visual com cores que remetem a frutos do mar frescos e ambiente praiano
- **Animações suaves**: Transições e efeitos visuais para melhor experiência do usuário
- **Design moderno**: Interface limpa e profissional com elementos visuais atraentes

## Como executar o projeto localmente

### Pré-requisitos
- Node.js (versão 14 ou superior)
- NPM ou Yarn

### Instalação
1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd villa-do-mar
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run serve
```

4. Acesse o projeto em seu navegador:
```
http://localhost:8080
```

## Como fazer o build para produção
```bash
npm run build
```

Os arquivos compilados serão gerados na pasta `dist`, prontos para serem implantados em um servidor web.

## Estrutura do Projeto

```
src/
├── assets/          # Imagens e recursos estáticos
├── components/      # Componentes Vue reutilizáveis
│   ├── cards/       # Cards de produtos e categorias
│   ├── footers/     # Componentes de rodapé
│   ├── headers/     # Componentes de cabeçalho
│   ├── layouts/     # Layouts reutilizáveis
│   ├── modals/      # Componentes de modal
│   └── partials/    # Seções parciais de páginas
├── data/            # Tipos de dados e mock data
├── functions/       # Funções utilitárias
├── router/          # Configuração de rotas
├── store/           # Gerenciamento de estado (Vuex)
├── styles/          # Estilos globais e variáveis
└── views/           # Páginas da aplicação
```

## Principais Páginas
- **Home**: Página inicial com destaque para categorias e produtos
- **Produtos**: Listagem completa de produtos com filtros
- **Categorias de Produtos**: Páginas específicas para cada categoria
- **Cardápio Digital**: Menu do restaurante com preços
- **Empresa**: Informações sobre a empresa
- **Contato**: Formulário e informações de contato

## Instruções de Deploy
Para fazer o deploy em um servidor de produção:

1. Execute o build do projeto:
```bash
npm run build
```

2. Transfira os arquivos da pasta `dist` para o servidor web desejado via FTP ou outro método.

3. Configure o servidor web para servir a página index.html para todas as rotas (necessário devido ao Vue Router em modo history).

## Contato
Desenvolvido por [Seu Nome] - [seu-email@exemplo.com]

## Licença
Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE para mais detalhes.
