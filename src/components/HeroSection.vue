<script setup>
const props = defineProps({
  perfil: { type: Object, required: true },
  secao: { type: Object, required: true } // { id, titulo, paragrafos, destaques }
})

// Respeita o "base" do Vite (/Miniprojeto1/) para a imagem em /public
const fotoUrl = `${import.meta.env.BASE_URL}${props.perfil.foto}`
</script>

<template>
  <section :id="secao.id" class="secao hero" :aria-labelledby="`${secao.id}-titulo`">
    <div class="container hero__grid">
      <div class="hero__foto-wrap">
        <img
          class="hero__foto"
          :src="fotoUrl"
          :alt="perfil.fotoAlt"
          width="240"
          height="240"
        />
      </div>

      <div class="hero__texto">
        <h1 class="hero__nome">{{ perfil.nome }}</h1>
        <p class="hero__titulo">{{ perfil.titulo }}</p>

        <h2 :id="`${secao.id}-titulo`" class="secao__titulo">{{ secao.titulo }}</h2>
        <p v-for="(paragrafo, i) in secao.paragrafos" :key="i" class="hero__paragrafo">
          {{ paragrafo }}
        </p>

        <ul class="hero__destaques" aria-label="Áreas de especialização">
          <li v-for="destaque in secao.destaques" :key="destaque" class="etiqueta">
            {{ destaque }}
          </li>
        </ul>

        <div class="hero__acoes">
          <a class="botao" href="#o-que-faco">Ver o que faço</a>
          <a class="botao botao--contorno" :href="`mailto:${perfil.email}`">Contactar</a>
        </div>
      </div>
    </div>
  </section>
</template>
