<script setup>
// Fundo animado da secção inicial: trajetórias de partículas carregadas
// num campo magnético, como numa câmara de bolhas. As partículas de baixa
// energia perdem energia e descrevem espirais; as de alta energia quase
// não curvam. Desenhado em <canvas>, sem bibliotecas.
import { ref, onMounted, onBeforeUnmount } from 'vue'

const tela = ref(null)

const CORES = [
  'rgba(255, 255, 255, ',
  'rgba(255, 255, 255, ',
  'rgba(255, 122, 134, ', // vermelho claro
  'rgba(150, 178, 235, ' // azul claro
]
const INTERVALO = 2400 // ms entre eventos
const CRESCIMENTO = 2600 // ms a desenhar cada evento
const VIDA = 9000 // ms até o evento desaparecer

let ctx = null
let largura = 0
let altura = 0
let eventos = []
let ultimoEvento = 0
let animacao = 0
let visivel = true
let reduzido = false
let observadorTamanho = null
let observadorVisibilidade = null

function aleatorio(min, max) {
  return min + Math.random() * (max - min)
}

function criarTrilho(x0, y0) {
  const altaEnergia = Math.random() < 0.3
  let raio = altaEnergia ? aleatorio(700, 2200) : aleatorio(50, 260)
  const perda = altaEnergia ? 0.9995 : aleatorio(0.984, 0.996)
  const sentido = Math.random() < 0.5 ? -1 : 1 // carga positiva ou negativa
  let angulo = aleatorio(0, Math.PI * 2)
  const passo = 3
  const passos = altaEnergia ? 260 : aleatorio(120, 420)
  const pontos = [[x0, y0]]
  let x = x0
  let y = y0

  for (let i = 0; i < passos && raio > 4; i++) {
    angulo += (sentido * passo) / raio
    raio *= perda
    x += Math.cos(angulo) * passo
    y += Math.sin(angulo) * passo
    pontos.push([x, y])
  }

  return {
    pontos,
    cor: CORES[Math.floor(Math.random() * CORES.length)],
    espessura: aleatorio(0.6, 1.5)
  }
}

function criarEvento(inicio) {
  const estreito = largura < 760
  const x0 = largura * (estreito ? aleatorio(0.1, 0.9) : aleatorio(0.45, 0.95))
  const y0 = altura * aleatorio(0.15, 0.85)
  const total = Math.floor(aleatorio(5, 11))
  const trilhos = Array.from({ length: total }, () => criarTrilho(x0, y0))
  return { inicio, x0, y0, trilhos }
}

function suavizar(t) {
  return 1 - Math.pow(1 - t, 3)
}

function desenhar(agora) {
  ctx.clearRect(0, 0, largura, altura)

  for (const evento of eventos) {
    const idade = agora - evento.inicio
    const progresso = reduzido ? 1 : Math.min(1, idade / CRESCIMENTO)
    const opacidade = reduzido || idade < VIDA - 2000 ? 1 : Math.max(0, (VIDA - idade) / 2000)

    for (const trilho of evento.trilhos) {
      const n = Math.max(2, Math.floor(trilho.pontos.length * suavizar(progresso)))
      ctx.beginPath()
      ctx.moveTo(trilho.pontos[0][0], trilho.pontos[0][1])
      for (let i = 1; i < n; i++) ctx.lineTo(trilho.pontos[i][0], trilho.pontos[i][1])
      ctx.strokeStyle = `${trilho.cor}${(0.5 * opacidade).toFixed(3)})`
      ctx.lineWidth = trilho.espessura
      ctx.stroke()
    }

    // vértice da colisão
    ctx.beginPath()
    ctx.arc(evento.x0, evento.y0, 2.2, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(255, 255, 255, ${(0.8 * opacidade).toFixed(3)})`
    ctx.fill()
  }
}

function ciclo(agora) {
  if (agora - ultimoEvento > INTERVALO) {
    eventos.push(criarEvento(agora))
    ultimoEvento = agora
  }
  eventos = eventos.filter((e) => agora - e.inicio < VIDA)
  desenhar(agora)
  animacao = requestAnimationFrame(ciclo)
}

function iniciar() {
  if (reduzido || animacao || !visivel) return
  animacao = requestAnimationFrame(ciclo)
}

function parar() {
  cancelAnimationFrame(animacao)
  animacao = 0
}

// Começa já com eventos visíveis, para a página nunca abrir vazia
function semear() {
  const agora = performance.now()
  eventos = [criarEvento(agora - 6000), criarEvento(agora - 3500), criarEvento(agora - 1200)]
  if (reduzido) eventos.pop()
  ultimoEvento = agora
  desenhar(agora)
}

function redimensionar() {
  const canvas = tela.value
  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  largura = canvas.clientWidth
  altura = canvas.clientHeight
  canvas.width = Math.round(largura * dpr)
  canvas.height = Math.round(altura * dpr)
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
  semear()
}

function aoMudarVisibilidadeDoc() {
  if (document.hidden) parar()
  else iniciar()
}

onMounted(() => {
  const canvas = tela.value
  ctx = canvas.getContext('2d')
  if (!ctx) return

  reduzido = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  redimensionar()
  observadorTamanho = new ResizeObserver(redimensionar)
  observadorTamanho.observe(canvas)

  // Só anima quando a secção está no ecrã
  observadorVisibilidade = new IntersectionObserver(([entrada]) => {
    visivel = entrada.isIntersecting
    if (visivel) iniciar()
    else parar()
  })
  observadorVisibilidade.observe(canvas)

  document.addEventListener('visibilitychange', aoMudarVisibilidadeDoc)
  iniciar()
})

onBeforeUnmount(() => {
  parar()
  observadorTamanho?.disconnect()
  observadorVisibilidade?.disconnect()
  document.removeEventListener('visibilitychange', aoMudarVisibilidadeDoc)
})
</script>

<template>
  <canvas ref="tela" class="particulas" aria-hidden="true"></canvas>
</template>
