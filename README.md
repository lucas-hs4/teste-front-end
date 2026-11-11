# Teste Front-End - Econverse
Projeto desenvolvido para o teste técnico da vaga de Front-End na Econverse. A aplicação reproduz o layout do Figma utilizando React, TypeScript e Sass, consumindo a lista de produtos em JSON e exibindo os detalhes de cada item em um modal ao clicar no produto.
## Tecnologias utilizadas
- React
- TypeScript
- Sass (SCSS)
- Vite
## Pré-requisitos
- Node.js (versão 18 ou superior)
- npm
## Como rodar o projeto localmente
1. Clone o repositório:
```bash
git clone https://github.com/lucas-hs4/teste-front-end.git
```
2. Acesse a pasta do projeto:
```bash
cd teste-front-end
```
3. Instale as dependências:
```bash
npm install
```
4. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```
5. Abra no navegador o link indicado no terminal (geralmente `http://localhost:5173`).
## Como compilar para produção
Para gerar a versão de build na pasta `dist`:
```bash
npm run build
```
Para testar a versão compilada localmente:
```bash
npm run preview
```
## Estrutura do projeto
- `src/components/`: Componentes da interface (`Header`, `HeroBanner`, `Categories`, `ProductShowcase`, `ProductCard`, `PartnerBanners`, `Brands`, `Footer` e `ProductModal`).
- `src/services/api.ts`: Função de busca dos produtos na API (com proxy configurado no `vite.config.ts` para evitar erro de CORS) e formatação de moeda em Real (BRL).
- `src/types/product.ts`: Tipagem TypeScript dos dados retornados pelo JSON.
- `src/styles/`: Variáveis globais de cores e estilos base em Sass.