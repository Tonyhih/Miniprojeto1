<script setup>
import { ref, watch, nextTick, onBeforeUnmount, useId } from 'vue'

const props = defineProps({
  aberta: { type: Boolean, default: false },
  titulo: { type: String, default: '' }
})

const emit = defineEmits(['fechar'])

// id único para ligar o título ao diálogo (aria-labelledby)
const tituloId = `modal-titulo-${useId()}`

const caixa = ref(null)
const botaoFechar = ref(null)
let focoAnterior = null

function fechar() {
  emit('fechar')
}

// Escape fecha; Tab fica preso dentro da modal
function aoPremirTecla(evento) {
  if (evento.key === 'Escape') {
    evento.preventDefault()
    fechar()
    return
  }

  if (evento.key === 'Tab' && caixa.value) {
    const focaveis = caixa.value.querySelectorAll(
      'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    if (!focaveis.length) return
    const primeiro = focaveis[0]
    const ultimo = focaveis[focaveis.length - 1]

    if (evento.shiftKey && document.activeElement === primeiro) {
      evento.preventDefault()
      ultimo.focus()
    } else if (!evento.shiftKey && document.activeElement === ultimo) {
      evento.preventDefault()
      primeiro.focus()
    }
  }
}

function ativar() {
  focoAnterior = document.activeElement
  document.body.style.overflow = 'hidden' // bloqueia o scroll da página
  document.addEventListener('keydown', aoPremirTecla)
  nextTick(() => botaoFechar.value?.focus())
}

function desativar() {
  document.body.style.overflow = ''
  document.removeEventListener('keydown', aoPremirTecla)
  // devolve o foco ao botão que abriu a modal
  if (focoAnterior instanceof HTMLElement) focoAnterior.focus()
  focoAnterior = null
}

watch(
  () => props.aberta,
  (aberta) => (aberta ? ativar() : desativar())
)

onBeforeUnmount(() => {
  if (props.aberta) desativar()
})
</script>

<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="aberta" class="modal" @click.self="fechar">
        <div
          ref="caixa"
          class="modal__caixa"
          role="dialog"
          aria-modal="true"
          :aria-labelledby="tituloId"
        >
          <header class="modal__cabecalho">
            <h2 :id="tituloId" class="modal__titulo">{{ titulo }}</h2>
            <button
              ref="botaoFechar"
              type="button"
              class="modal__fechar"
              aria-label="Fechar janela"
              @click="fechar"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </header>

          <div class="modal__corpo">
            <slot />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
