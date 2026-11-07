import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// base: caminho público usado pelo GitHub Pages (https://<utilizador>.github.io/MiniProj1/).
// Tem de coincidir com o nome do repositório no GitHub.
export default defineConfig({
  base: '/MiniProj1/',
  plugins: [vue()]
})
