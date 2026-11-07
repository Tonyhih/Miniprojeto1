<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  nome: { type: String, required: true },
  links: { type: Array, required: true } // [{ id, rotulo }]
})

const ativo = ref('')
const progresso = ref(0) // 0 a 1: quanto da página já foi percorrido
let observer = null

const iniciais = computed(() =>
  props.nome
    .split(' ')
    .filter(Boolean)
    .map((parte) => parte[0])
    .filter((_, i, arr) => i === 0 || i === arr.length - 1)
    .join('')
)

function atualizarProgresso() {
  const max = document.documentElement.scrollHeight - window.innerHeight
  progresso.value = max > 0 ? Math.min(1, window.scrollY / max) : 0
}

// Destaca no menu a secção que está visível, com IntersectionObserver.
// A "linha" de deteção fica a cerca de 35% do topo do ecrã.
onMounted(() => {
  atualizarProgresso()
  window.addEventListener('scroll', atualizarProgresso, { passive: true })
  window.addEventListener('resize', atualizarProgresso, { passive: true })

  if (!('IntersectionObserver' in window)) return

  observer = new IntersectionObserver(
    (entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) ativo.value = entrada.target.id
      })
    },
    { rootMargin: '-35% 0px -60% 0px', threshold: 0 }
  )

  props.links.forEach(({ id }) => {
    const secao = document.getElementById(id)
    if (secao) observer.observe(secao)
  })
})

onBeforeUnmount(() => {
  observer?.disconnect()
  window.removeEventListener('scroll', atualizarProgresso)
  window.removeEventListener('resize', atualizarProgresso)
})

function irPara(id) {
  ativo.value = id
}
</script>

<template>
  <header class="header">
    <div class="container header__inner">
      <a class="header__marca" href="#quem-sou-eu" @click="irPara('quem-sou-eu')">
        <span class="header__monograma" aria-hidden="true">{{ iniciais }}</span>
        <span class="header__nome">{{ nome }}</span>
      </a>

      <nav class="nav" aria-label="Navegação principal">
        <ul class="nav__lista">
          <li v-for="link in links" :key="link.id">
            <a
              class="nav__link"
              :class="{ 'nav__link--ativo': ativo === link.id }"
              :href="`#${link.id}`"
              :aria-current="ativo === link.id ? 'true' : undefined"
              @click="irPara(link.id)"
            >
              {{ link.rotulo }}
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <span class="header__progresso" :style="{ transform: `scaleX(${progresso})` }" aria-hidden="true"></span>
  </header>
</template>
