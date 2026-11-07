<script setup>
import { computed } from 'vue'
import ParticleTracks from './ParticleTracks.vue'

const props = defineProps({
  perfil: { type: Object, required: true },
  secao: { type: Object, required: true } // { id, sobretitulo, titulo, paragrafos, ficha }
})

// Respeita o "base" do Vite (/Miniprojeto1/) para a imagem em /public
const fotoUrl = `${import.meta.env.BASE_URL}${props.perfil.foto}`

// Separa o último nome para o destacar a cor
const partesNome = computed(() => {
  const partes = props.perfil.nome.trim().split(' ')
  return { inicio: partes.slice(0, -1).join(' '), fim: partes.at(-1) }
})
</script>

<template>
  <section :id="secao.id" class="hero" :aria-labelledby="`${secao.id}-titulo`">
    <!-- Palco escuro: apresentação -->
    <div class="hero__palco">
      <ParticleTracks />

      <div class="container hero__grid">
        <div class="hero__intro">
          <p class="hero__sobretitulo">
            <span class="hero__pulso" aria-hidden="true"></span>
            {{ perfil.titulo }}
          </p>
          <h1 class="hero__nome">
            {{ partesNome.inicio }} <span class="hero__nome-destaque">{{ partesNome.fim }}</span>
          </h1>
          <p class="hero__lema">{{ perfil.lema }}</p>
          <div class="hero__acoes">
            <a class="botao" href="#o-que-faco">Ver o que faço</a>
            <a class="botao botao--fantasma" :href="`mailto:${perfil.email}`">Contactar</a>
          </div>
        </div>

        <figure class="hero__retrato">
          <div class="hero__moldura">
            <img
              class="hero__foto"
              :src="fotoUrl"
              :alt="perfil.fotoAlt"
              width="640"
              height="800"
            />
          </div>
          <figcaption class="hero__cartao">
            <span class="hero__cartao-rotulo">
              <span class="hero__pulso" aria-hidden="true"></span>Atualmente
            </span>
            <strong>{{ perfil.cargoAtual }}</strong>
            <span>{{ perfil.empresaAtual }}</span>
          </figcaption>
        </figure>
      </div>

      <p class="container hero__legenda" aria-hidden="true">
        Trajetórias de partículas carregadas num campo magnético
      </p>
    </div>

    <!-- Quem Sou Eu? -->
    <div class="container sobre">
      <header class="secao__cabecalho">
        <div>
          <p class="sobretitulo">{{ secao.sobretitulo }}</p>
          <h2 :id="`${secao.id}-titulo`" class="secao__titulo">{{ secao.titulo }}</h2>
        </div>
      </header>

      <div class="sobre__grid">
        <div class="sobre__texto">
          <p v-for="(paragrafo, i) in secao.paragrafos" :key="i" :class="{ sobre__lead: i === 0 }">
            {{ paragrafo }}
          </p>
        </div>

        <dl class="ficha">
          <div v-for="linha in secao.ficha" :key="linha.rotulo" class="ficha__linha">
            <dt>{{ linha.rotulo }}</dt>
            <dd>{{ linha.valor }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </section>
</template>
