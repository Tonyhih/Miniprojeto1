<script setup>
import { ref } from 'vue'
import AppHeader from './components/AppHeader.vue'
import HeroSection from './components/HeroSection.vue'
import CardSection from './components/CardSection.vue'
import AppModal from './components/AppModal.vue'
import AppFooter from './components/AppFooter.vue'
import AppIcon from './components/AppIcon.vue'
import { perfil, navegacao, quemSouEu, oQueFaco, hobbies, redesSociais } from './data/cv.js'

// Estado da janela modal. O item é mantido depois de fechar
// para que o conteúdo não desapareça durante a animação de saída.
const modalAberta = ref(false)
const itemAtivo = ref(null)

function abrirModal(item) {
  itemAtivo.value = item
  modalAberta.value = true
}

function fecharModal() {
  modalAberta.value = false
}
</script>

<template>
  <a class="skip-link" href="#conteudo">Saltar para o conteúdo</a>

  <AppHeader :nome="perfil.nome" :links="navegacao" />

  <main id="conteudo" tabindex="-1">
    <HeroSection :perfil="perfil" :secao="quemSouEu" />

    <CardSection
      :id="oQueFaco.id"
      :sobretitulo="oQueFaco.sobretitulo"
      :titulo="oQueFaco.titulo"
      :intro="oQueFaco.intro"
      :itens="oQueFaco.itens"
      @abrir="abrirModal"
    />

    <CardSection
      :id="hobbies.id"
      :sobretitulo="hobbies.sobretitulo"
      :titulo="hobbies.titulo"
      :intro="hobbies.intro"
      :itens="hobbies.itens"
      variante="escura"
      @abrir="abrirModal"
    />
  </main>

  <AppFooter :nome="perfil.nome" :redes="redesSociais" />

  <AppModal
    :aberta="modalAberta"
    :titulo="itemAtivo?.titulo ?? ''"
    :etiqueta="itemAtivo?.etiqueta ?? ''"
    @fechar="fecharModal"
  >
    <template v-if="itemAtivo" #icone>
      <AppIcon :nome="itemAtivo.icone" :tamanho="26" />
    </template>

    <template v-if="itemAtivo">
      <p class="modal__resumo">{{ itemAtivo.resumo }}</p>
      <ul class="modal__lista">
        <li v-for="(detalhe, i) in itemAtivo.detalhes" :key="i">
          <AppIcon nome="check" :tamanho="18" />
          <span>{{ detalhe }}</span>
        </li>
      </ul>
    </template>
  </AppModal>
</template>
