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
| HTML semântico | `header`, `nav`, `main`, `section`, `article`, `footer`, `figure`, `dl` |
| CSS puro (variáveis, Grid, Flexbox) | Um único `style.css`, responsivo, modo claro e escuro, sem frameworks |
| Canvas 2D | Animação de fundo da secção inicial, sem bibliotecas |
| SVG inline | Ícones, sem bibliotecas externas |
| Google Fonts | Bricolage Grotesque (títulos), Instrument Sans (texto) e JetBrains Mono (rótulos), com fontes do sistema como alternativa |

Não há outras dependências npm: nem router, nem Tailwind, nem bibliotecas de ícones.

### Design

O conceito visual parte da especialização em Física de Partículas:

- **Secção inicial escura** com grelha de papel milimétrico e uma animação em `<canvas>` de
  trajetórias de partículas carregadas num campo magnético, como numa câmara de bolhas
  (as de baixa energia descrevem espirais; as de alta energia quase não curvam). A animação
  só corre quando a secção está visível e fica parada com `prefers-reduced-motion`.
- **Ficha de perfil** (lista de definições) com especialização, formação e cargo atual.
- **Cartões** com etiqueta, ícone que roda ao passar o rato e o cartão inteiro clicável.
- **Hobbies** numa banda azul-marinho, para variar o ritmo da página.
- **Modal** centrada no computador e em "folha" que sobe do fundo no telemóvel.
- **Barra de progresso** de leitura no cabeçalho.
- **Modo escuro** automático, segundo a preferência do sistema operativo.

### Acessibilidade

- Um único `h1` (nome) e um `h2` por secção; o título da modal também é `h2`.
- Modal com `role="dialog"`, `aria-modal="true"` e `aria-labelledby`; o foco vai para o
  botão de fechar, fica preso dentro da janela e volta ao botão de origem ao fechar.
- Estados `:focus-visible` bem visíveis e link "Saltar para o conteúdo".
- Contraste WCAG AA nos dois temas (vermelho `#b3202e` sobre o fundo ≈ 6,1:1; sobre fundos escuros usa-se um vermelho mais claro, `#ff7a86`, ≈ 6,6:1).
- `alt` na fotografia e `aria-label` nos ícones das redes sociais.
- Respeita `prefers-reduced-motion`.

### Paleta

| Variável | Cor | Uso |
|---|---|---|
| `--azul-marinho` | `#0b2a5b` | Banda dos Hobbies, ícones dos cartões |
| `--azul-escuro` | `#071b3d` | Cabeçalho e secção inicial |
| `--vermelho` | `#b3202e` | Botões, link ativo, destaques |
| `--bg` | `#f4f6fb` | Fundo da página (modo claro) |

## Estrutura de pastas

```
MiniProj1/
├── index.html              # Única página HTML (ponto de entrada)
├── package.json
├── vite.config.js          # base: '/Miniprojeto1/' para o GitHub Pages
├── .gitignore
├── README.md
├── docs/
│   └── wireframe.html      # Wireframe de baixa fidelidade
├── public/
│   └── foto.jpg               # Fotografia de perfil (640×800)
└── src/
    ├── main.js                # Cria e monta a aplicação Vue
    ├── App.vue                # Composição da página e estado da modal
    ├── style.css              # Todos os estilos
    ├── data/
    │   └── cv.js              # Dados do currículo
    └── components/
        ├── AppHeader.vue      # Cabeçalho fixo, navegação, secção ativa e progresso
        ├── HeroSection.vue    # Apresentação + "Quem Sou Eu?" (foto, nome, ficha)
        ├── ParticleTracks.vue # Animação de fundo em <canvas>
        ├── CardSection.vue    # Secção de cartões ("O que faço?" e "Hobbies")
        ├── AppModal.vue       # Janela modal reutilizável
        ├── AppIcon.vue        # Ícones SVG inline
        └── AppFooter.vue      # Rodapé com contacto e identidade virtual
```

## Instalação e execução

Requisitos: [Node.js](https://nodejs.org/) 18 ou superior.

```bash
npm install
```

```bash
npm run dev
```

Abre o endereço indicado no terminal (normalmente `http://localhost:5173/Miniprojeto1/`).

Build de produção (gera a pasta `dist/`):

```bash
npm run build
```

Pré-visualizar o build:

```bash
npm run preview
```

### Substituir a fotografia

Coloca a tua fotografia em `public/foto.jpg`, de preferência em retrato 4:5 (p. ex. 640×800).
O nome do ficheiro pode ser alterado em `src/data/cv.js` (`perfil.foto`).

## Publicação no GitHub Pages

> **Importante:** o valor de `base` em `vite.config.js` (`'/Miniprojeto1/'`) tem de ser
> igual ao nome do repositório no GitHub, incluindo maiúsculas e minúsculas. Se mudares o
> nome do repositório, atualiza também o `base`; caso contrário, o CSS, o JavaScript e a
> fotografia não carregam.
>
> Endereço do site: `https://tonyhih.github.io/Miniprojeto1/`

### Opção A — GitHub Actions (recomendada)

O workflow já está no projeto, em `.github/workflows/deploy.yml` (conteúdo abaixo).

1. No GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. Em **Actions → Publicar no GitHub Pages**, carrega em **Run workflow** (só na primeira vez).
3. A partir daí, cada push para `main` publica o site em `https://tonyhih.github.io/Miniprojeto1/`.

```yaml
# Publica o site no GitHub Pages a cada push para "main".
# Requer: Settings → Pages → Build and deployment → Source: GitHub Actions
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

      - name: Instalar dependências
        run: npm ci

      - name: Compilar
        run: npm run build

      - uses: actions/configure-pages@v5

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
      - name: Publicar
        id: deployment
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
