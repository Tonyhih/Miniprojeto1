import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// base: caminho público usado pelo GitHub Pages (https://<utilizador>.github.io/Miniprojeto1/).
// Tem de coincidir com o nome do repositório no GitHub.
export default defineConfig({
  base: '/Miniprojeto1/',
  plugins: [vue()]
})
