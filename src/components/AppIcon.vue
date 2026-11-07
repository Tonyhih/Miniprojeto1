<script setup>
import { computed } from 'vue'

const props = defineProps({
  nome: { type: String, required: true },
  tamanho: { type: [Number, String], default: 24 }
})

// Ícones SVG inline, sem bibliotecas externas.
// "traco": desenhados com contorno; "cheio": preenchidos.
const ICONES = {
  professor: { tipo: 'traco', d: 'M2 9l10-5 10 5-10 5z M6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5 M22 9v6' },
  codigo: { tipo: 'traco', d: 'M8 6l-6 6 6 6 M16 6l6 6-6 6 M14 4l-4 16' },
  comercial: { tipo: 'traco', d: 'M3 8h18v12H3z M8 8V5h8v3 M3 13h18' },
  musica: {
    tipo: 'traco',
    d: 'M9 18V5l11-2v13 M9 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0z M20 16a3 3 0 1 1-6 0 3 3 0 0 1 6 0z'
  },
  futebol: {
    tipo: 'traco',
    d: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z M12 7l4 3-1.5 4.5h-5L8 10z M12 7V2.5 M16 10l4.5-1.5 M14.5 14.5l2.5 4 M9.5 14.5l-2.5 4 M8 10 3.5 8.5'
  },
  seta: { tipo: 'traco', d: 'M5 12h14 M13 6l6 6-6 6' },
  setaDiagonal: { tipo: 'traco', d: 'M7 17L17 7 M8 7h9v9' },
  check: { tipo: 'traco', d: 'M5 12.5l4.5 4.5L19 7.5' },
  facebook: {
    tipo: 'cheio',
    d: 'M14 13.5h2.5l1-4H14v-2c0-1 0-2 2-2h1.5V2.1C17.2 2.1 15.9 2 14.6 2 11.9 2 10 3.7 10 6.7v2.8H7v4h3V22h4v-8.5z'
  },
  github: {
    tipo: 'cheio',
    d: 'M12 2C6.5 2 2 6.6 2 12.2c0 4.5 2.9 8.3 6.8 9.7.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.4-3.4-1.4-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.4 1.1 2.9.8.1-.7.4-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.5 9.5 0 0 1 5 0c1.9-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5 4-1.4 6.8-5.2 6.8-9.7C22 6.6 17.5 2 12 2z'
  },
  email: {
    tipo: 'cheio',
    d: 'M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm1 2.4V17h16V7.4l-8 5.3-8-5.3zM5.6 7l6.4 4.3L18.4 7H5.6z'
  },
  telefone: {
    tipo: 'cheio',
    d: 'M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.37 2.3.57 3.6.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1L6.6 10.8z'
  }
}

const icone = computed(() => ICONES[props.nome] ?? ICONES.seta)
</script>

<template>
  <svg
    class="icone"
    viewBox="0 0 24 24"
    :width="tamanho"
    :height="tamanho"
    aria-hidden="true"
    focusable="false"
  >
    <path
      v-if="icone.tipo === 'traco'"
      :d="icone.d"
      fill="none"
      stroke="currentColor"
      stroke-width="1.8"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path v-else :d="icone.d" fill="currentColor" />
  </svg>
</template>
