<script setup>
defineProps({
  id: { type: String, required: true },
  titulo: { type: String, required: true },
  intro: { type: String, default: '' },
  itens: { type: Array, required: true }, // [{ id, icone, titulo, resumo, detalhes }]
  variante: { type: String, default: '' } // '' | 'alt' (fundo alternativo)
})

const emit = defineEmits(['abrir'])

// Ícones SVG inline (desenhados com traço), sem bibliotecas externas
const icones = {
  professor: 'M2 9l10-5 10 5-10 5z M6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5 M22 9v6',
  codigo: 'M8 6l-6 6 6 6 M16 6l6 6-6 6 M14 4l-4 16',
  comercial: 'M3 8h18v12H3z M8 8V5h8v3 M3 13h18',
  musica: 'M9 18V5l11-2v13 M9 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0z M20 16a3 3 0 1 1-6 0 3 3 0 0 1 6 0z',
  futebol:
    'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z M12 7l4 3-1.5 4.5h-5L8 10z M12 7V2.5 M16 10l4.5-1.5 M14.5 14.5l2.5 4 M9.5 14.5l-2.5 4 M8 10 3.5 8.5'
}
</script>

<template>
  <section
    :id="id"
    class="secao"
    :class="{ 'secao--alt': variante === 'alt' }"
    :aria-labelledby="`${id}-titulo`"
  >
    <div class="container">
      <h2 :id="`${id}-titulo`" class="secao__titulo">{{ titulo }}</h2>
      <p v-if="intro" class="secao__intro">{{ intro }}</p>

      <div class="cartoes" :class="{ 'cartoes--dois': itens.length === 2 }">
        <article v-for="item in itens" :key="item.id" class="cartao">
          <span class="cartao__icone" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="28" height="28" focusable="false">
              <path
                :d="icones[item.icone]"
                fill="none"
                stroke="currentColor"
                stroke-width="1.8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <h3 class="cartao__titulo">{{ item.titulo }}</h3>
          <p class="cartao__resumo">{{ item.resumo }}</p>
          <button
            type="button"
            class="botao botao--pequeno cartao__botao"
            aria-haspopup="dialog"
            @click="emit('abrir', item)"
          >
            Ver detalhes<span class="sr-only"> sobre {{ item.titulo }}</span>
          </button>
        </article>
      </div>
    </div>
  </section>
</template>
