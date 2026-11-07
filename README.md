# MiniProj1 — Currículo Vitae (SPA)

Single Page Application que apresenta o currículo vitae de **António Joaquim José**
(Professor · Engenheiro de Software), desenvolvida em **Vue 3** com **Vite** e a
**Composition API** (`<script setup>`).

Mini-projeto para a disciplina de Desenvolvimento Web.

## Descrição

Toda a aplicação vive numa única página (`index.html`), sem recarregamentos:

- **Navegação por âncoras** — o cabeçalho fixo tem links para `#quem-sou-eu`,
  `#o-que-faco` e `#hobbies`, com scroll suave. A secção visível fica destacada no menu
  (IntersectionObserver + `aria-current="true"`).
- **Janelas modais** — cada cartão de "O que faço?" e de "Hobbies" abre uma modal com os
  detalhes. A modal fecha com o botão ×, com clique no fundo ou com a tecla Escape.
- **Secções obrigatórias** — "Quem Sou Eu?", "O que faço?" e "Hobbies".
- **Identidade virtual** — o rodapé tem ícones SVG para Facebook, GitHub, e-mail e telefone.

Os dados do CV estão separados dos componentes, em `src/data/cv.js`. Para atualizar o
currículo basta editar esse ficheiro.

## Tecnologias

| Tecnologia | Utilização |
|---|---|
| Vue 3 (Composition API, `<script setup>`) | Componentes, estado reativo, `Teleport`, `Transition` |
| Vite 6 + `@vitejs/plugin-vue` | Servidor de desenvolvimento e build de produção |
| HTML semântico | `header`, `nav`, `main`, `section`, `article`, `footer` |
| CSS puro (variáveis, Grid, Flexbox) | Um único `style.css`, responsivo, sem frameworks |
| SVG inline | Ícones, sem bibliotecas externas |

Não há outras dependências: nem router, nem Tailwind, nem bibliotecas de ícones.

### Acessibilidade

- Um único `h1` (nome) e um `h2` por secção.
- Modal com `role="dialog"`, `aria-modal="true"` e `aria-labelledby`; o foco vai para o
  botão de fechar, fica preso dentro da janela e volta ao botão de origem ao fechar.
- Estados `:focus-visible` bem visíveis e link "Saltar para o conteúdo".
- Contraste WCAG AA (texto vermelho `#b3202e` sobre branco ≈ 6,6:1).
- `alt` na fotografia e `aria-label` nos ícones das redes sociais.
- Respeita `prefers-reduced-motion`.

### Paleta

| Variável | Cor | Uso |
|---|---|---|
| `--azul-marinho` | `#0b2a5b` | Ícones dos cartões, links |
| `--azul-escuro` | `#071b3d` | Cabeçalho, rodapé, títulos |
| `--vermelho` | `#b3202e` | Destaques, botões, link ativo |
| `--fundo` | `#f4f6fb` | Fundo da página |

## Estrutura de pastas

```
MiniProj1/
├── index.html              # Única página HTML (ponto de entrada)
├── package.json
├── vite.config.js          # base: '/MiniProj1/' para o GitHub Pages
├── .gitignore
├── README.md
├── docs/
│   └── wireframe.html      # Wireframe de baixa fidelidade
├── public/
│   └── foto.jpg            # Fotografia (substituir pela real)
└── src/
    ├── main.js             # Cria e monta a aplicação Vue
    ├── App.vue             # Composição da página e estado da modal
    ├── style.css           # Todos os estilos
    ├── data/
    │   └── cv.js           # Dados do currículo
    └── components/
        ├── AppHeader.vue   # Cabeçalho fixo + navegação + secção ativa
        ├── HeroSection.vue # "Quem Sou Eu?" (foto, nome, apresentação)
        ├── CardSection.vue # Secção de cartões ("O que faço?" e "Hobbies")
        ├── AppModal.vue    # Janela modal reutilizável
        └── AppFooter.vue   # Rodapé com a identidade virtual
```

## Instalação e execução

Requisitos: [Node.js](https://nodejs.org/) 18 ou superior.

```bash
npm install
```

```bash
npm run dev
```

Abre o endereço indicado no terminal (normalmente `http://localhost:5173/MiniProj1/`).

Build de produção (gera a pasta `dist/`):

```bash
npm run build
```

Pré-visualizar o build:

```bash
npm run preview
```

### Substituir a fotografia

Coloca a tua fotografia em `public/foto.jpg` (de preferência quadrada, p. ex. 480×480).
O nome do ficheiro pode ser alterado em `src/data/cv.js` (`perfil.foto`).

## Publicação no GitHub Pages

> **Importante:** o valor de `base` em `vite.config.js` tem de ser igual ao nome do
> repositório no GitHub, incluindo maiúsculas e minúsculas. Se o repositório se chamar
> `Miniprojeto1`, muda para `base: '/Miniprojeto1/'`; caso contrário, o CSS, o JavaScript
> e a fotografia não carregam.

### Opção A — GitHub Actions (recomendada)

1. Cria o ficheiro `.github/workflows/deploy.yml` com o conteúdo abaixo e faz commit/push.
2. No GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Cada push para `main` publica o site em `https://<utilizador>.github.io/<repositório>/`.

```yaml
name: Publicar no GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

### Opção B — Ramo `gh-pages` manual (sem Actions)

```bash
npm run build
```

```bash
cd dist && git init -b gh-pages && git add -A && git commit -m "Publicação" && git push -f https://github.com/<utilizador>/<repositório>.git gh-pages && cd ..
```

Depois, em **Settings → Pages**, escolhe **Deploy from a branch → gh-pages → / (root)**.

## Documentação

- [`docs/wireframe.html`](docs/wireframe.html) — mapa de navegação, vista desktop,
  janela modal, vista mobile e tabela de estados da interface (abre diretamente no browser).

## Autor

**António Joaquim José** — [GitHub](https://github.com/Tonyhih) ·
[Facebook](https://facebook.com/tonyhihjose) · [Tonyhih@gmail.com](mailto:Tonyhih@gmail.com)
