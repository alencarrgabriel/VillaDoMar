# Componentes Principais com a Nova Paleta de Cores

Este documento apresenta os principais componentes da interface do Villa do Mar com a nova paleta de cores baseada em tons de laranja.

## Paleta de Cores

```
// Cores primárias - Laranja
Primary: #E85D04
Primary Light: #F48C06
Primary Dark: #DC2F02

// Cores secundárias - Verde-água
Secondary: #2A9D8F
Secondary Light: #4ECDC4
Secondary Dark: #1A6B60

// Cores terciárias - Areia
Tertiary: #FFEDCB
Tertiary Light: #FFF5E5
Tertiary Dark: #FFE0B0

// Cores de destaque - Coral
Accent: #FF9E4F
Accent Light: #FFB980
Accent Dark: #FF7E21

// Cores neutras
Gray Light: #F7F9FB
Gray Dark: #4B5563
```

## Componentes Atualizados

### 1. Navbar/Header

![Navbar](https://via.placeholder.com/800x100/FFFFFF/FFFFFF?text=+)

```html
<header class="bg-white shadow-md">
  <nav class="container mx-auto flex items-center justify-between py-4 px-6">
    <h1 class="text-3xl font-bold text-primary">
      Villa <span class="text-secondary">do Mar</span>
    </h1>
    <div class="flex gap-8">
      <a href="#" class="font-medium text-gray-dark hover:text-primary transition">Home</a>
      <a href="#" class="font-medium text-gray-dark hover:text-primary transition">Empresa</a>
      <a href="#" class="font-medium text-gray-dark hover:text-primary transition">Produtos</a>
      <a href="#" class="font-medium text-gray-dark hover:text-primary transition">Cardápio</a>
      <a href="#" class="font-medium text-gray-dark hover:text-primary transition">Contato</a>
    </div>
    <button class="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md transition">
      Carrinho
    </button>
  </nav>
  <div class="bg-primary text-white">
    <div class="container mx-auto py-2 px-6">
      <div class="flex items-center justify-between">
        <span class="text-sm">Vila do Mar - Frutos do Mar Premium</span>
        <span class="text-sm">Ei, precisa de ajuda?</span>
      </div>
    </div>
  </div>
</header>
```

### 2. Cards de Produto

![Product Card](https://via.placeholder.com/300x400/FFFFFF/FFFFFF?text=+)

```html
<div class="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden flex flex-col h-full">
  <div class="h-48 overflow-hidden">
    <img src="..." alt="Produto" class="w-full h-full object-cover transform hover:scale-105 transition">
  </div>
  <div class="p-5 flex flex-col flex-grow">
    <div class="mb-2">
      <span class="bg-accent bg-opacity-20 text-accent-dark text-xs font-medium px-2.5 py-0.5 rounded">Camarões</span>
    </div>
    <h3 class="text-lg font-bold text-gray-800 mb-2">Camarão Rosa G</h3>
    <p class="text-gray-600 text-sm mb-4">Camarão rosa grande, limpo e congelado. Ideal para pratos especiais.</p>
    
    <div class="mt-auto">
      <div class="flex justify-between items-center mb-4">
        <span class="text-xl font-bold text-primary">R$ 89,90</span>
        <span class="text-sm text-gray-500">500g</span>
      </div>
      <button class="bg-primary text-white w-full py-2 rounded hover:bg-primary-dark transition flex items-center justify-center">
        Adicionar ao carrinho
      </button>
    </div>
  </div>
</div>
```

### 3. Cards de Categoria

![Category Card](https://via.placeholder.com/300x400/FFFFFF/FFFFFF?text=+)

```html
<div class="bg-white rounded-lg shadow-md overflow-hidden group">
  <div class="h-56 overflow-hidden">
    <img src="..." alt="Categoria" class="w-full h-full object-cover transform transition group-hover:scale-105">
  </div>
  <div class="p-6">
    <h3 class="text-2xl font-bold text-primary mb-3">Camarões</h3>
    <p class="text-gray-600 mb-5">Camarões frescos e congelados de diversas variedades, selecionados para oferecer o melhor sabor.</p>
    <a href="#" class="inline-flex items-center font-medium text-accent hover:text-accent-dark transition">
      Ver produtos
      <svg class="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </a>
  </div>
</div>
```

### 4. Banner de Qualidade

![Quality Banner](https://via.placeholder.com/800x400/FFEDCB/FFEDCB?text=+)

```html
<section class="py-16 bg-tertiary">
  <div class="container mx-auto px-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 class="text-3xl md:text-4xl font-bold text-primary mb-6">
          Qualidade e Frescor Garantidos
        </h2>
        <p class="text-gray-700 mb-8 text-lg">
          Na Villa do Mar, trabalhamos apenas com os melhores fornecedores, garantindo a origem e qualidade dos nossos produtos.
        </p>
        <ul class="space-y-4">
          <li class="flex items-center">
            <div class="bg-primary rounded-full p-1 mr-3">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <span class="text-gray-700">Produtos frescos e de alta qualidade</span>
          </li>
        </ul>
        <button class="mt-8 bg-accent hover:bg-accent-dark text-white px-6 py-3 rounded-md transition">
          Saiba mais sobre nossa qualidade
        </button>
      </div>
      <div>
        <img src="..." alt="Controle de Qualidade" class="rounded-lg shadow-lg">
      </div>
    </div>
  </div>
</section>
```

### 5. Footer

![Footer](https://via.placeholder.com/800x400/FFF5E5/FFF5E5?text=+)

```html
<footer class="bg-tertiary-light border-t">
  <div class="container mx-auto py-16">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-10">
      <div class="md:col-span-4">
        <h4 class="text-3xl font-bold text-primary">
          Villa<span class="text-secondary">do Mar</span>
        </h4>
        <p class="text-gray-700">Villa do Mar é uma empresa especializada em frutos do mar de alta qualidade.</p>
      </div>
      
      <div class="md:col-span-2">
        <h4 class="text-xl font-bold text-primary">Menu</h4>
        <div class="flex flex-col gap-3">
          <a href="#" class="font-medium text-gray-dark hover:text-primary transition">Home</a>
          <a href="#" class="font-medium text-gray-dark hover:text-primary transition">Empresa</a>
          <a href="#" class="font-medium text-gray-dark hover:text-primary transition">Produtos</a>
        </div>
      </div>
      
      <!-- Outros links do footer... -->
      
      <div class="md:col-span-4">
        <h4 class="text-xl font-bold text-primary">Fique por dentro</h4>
        <form class="flex flex-col gap-4 mt-4">
          <input type="email" placeholder="Seu e-mail" class="border rounded px-4 py-2 focus:ring-2 focus:ring-primary" />
          <button class="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition">Enviar</button>
        </form>
      </div>
    </div>
  </div>
  <div class="bg-primary text-white py-4">
    <div class="container mx-auto">
      <p class="text-center">&copy; Villa do Mar - 2023. Todos os direitos reservados.</p>
    </div>
  </div>
</footer>
```

## Botões e Elementos de Interface

### Botões

```html
<!-- Botão Primário -->
<button class="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition">
  Botão Primário
</button>

<!-- Botão Secundário -->
<button class="bg-secondary text-white px-4 py-2 rounded hover:bg-secondary-dark transition">
  Botão Secundário
</button>

<!-- Botão Outline -->
<button class="bg-white text-primary border-2 border-primary px-4 py-2 rounded hover:border-primary-dark transition">
  Botão Outline
</button>

<!-- Botão de Destaque -->
<button class="bg-accent text-white px-4 py-2 rounded hover:bg-accent-dark transition">
  Botão de Destaque
</button>
```

### Badges e Labels

```html
<!-- Badge Categoria -->
<span class="bg-accent bg-opacity-20 text-accent-dark text-xs font-medium px-2.5 py-0.5 rounded">
  Camarões
</span>

<!-- Badge Promoção -->
<span class="bg-primary text-white text-xs font-medium px-2.5 py-0.5 rounded-full">
  Promoção
</span>

<!-- Badge Novidade -->
<span class="bg-secondary text-white text-xs font-medium px-2.5 py-0.5 rounded-full">
  Novo
</span>
```

### Elementos de Formulário

```html
<!-- Input com foco na cor primária -->
<input 
  type="text" 
  placeholder="Digite aqui" 
  class="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary" 
/>

<!-- Select com borda na cor primária quando em foco -->
<select class="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary">
  <option>Opção 1</option>
  <option>Opção 2</option>
</select>

<!-- Checkbox com cor primária -->
<div class="flex items-center">
  <input 
    type="checkbox" 
    class="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary" 
  />
  <label class="ml-2 text-gray-700">Aceito os termos</label>
</div>
``` 