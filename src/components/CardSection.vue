<script setup>
import AppIcon from './AppIcon.vue'

defineProps({
  id: { type: String, required: true },
  sobretitulo: { type: String, default: '' },
  titulo: { type: String, required: true },
  intro: { type: String, default: '' },
  itens: { type: Array, required: true }, // [{ id, icone, etiqueta, titulo, resumo, detalhes }]
  variante: { type: String, default: '' } // '' | 'escura'
})

const emit = defineEmits(['abrir'])
</script>

<template>
  <section
    :id="id"
    class="secao"
    :class="{ 'secao--escura': variante === 'escura' }"
    :aria-labelledby="`${id}-titulo`"
  >
    <div class="container">
      <header class="secao__cabecalho">
        <div>
          <p v-if="sobretitulo" class="sobretitulo">{{ sobretitulo }}</p>
          <h2 :id="`${id}-titulo`" class="secao__titulo">{{ titulo }}</h2>
        </div>
        <p v-if="intro" class="secao__intro">{{ intro }}</p>
      </header>

      <div class="cartoes" :class="{ 'cartoes--dois': itens.length === 2 }">
        <article v-for="item in itens" :key="item.id" class="cartao">
          <div class="cartao__topo">
            <span class="cartao__icone">
              <AppIcon :nome="item.icone" :tamanho="26" />
            </span>
            <span v-if="item.etiqueta" class="cartao__etiqueta">{{ item.etiqueta }}</span>
          </div>

          <h3 class="cartao__titulo">{{ item.titulo }}</h3>
          <p class="cartao__resumo">{{ item.resumo }}</p>

          <!-- O botão cobre o cartão inteiro (::after), mas só ele é focável -->
          <button
            type="button"
            class="cartao__botao"
            aria-haspopup="dialog"
            @click="emit('abrir', item)"
          >
            Ver detalhes<span class="sr-only"> sobre {{ item.titulo }}</span>
            <AppIcon nome="seta" :tamanho="18" />
          </button>

          <span class="cartao__marca" aria-hidden="true">
            <AppIcon :nome="item.icone" :tamanho="130" />
          </span>
        </article>
      </div>
    </div>
  </section>
</template>
