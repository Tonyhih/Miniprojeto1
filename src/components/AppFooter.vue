<script setup>
defineProps({
  nome: { type: String, required: true },
  redes: { type: Array, required: true } // [{ tipo, rotulo, url, externo }]
})

const ano = new Date().getFullYear()

// Ícones SVG inline das redes sociais (sem bibliotecas externas)
const icones = {
  facebook:
    'M14 13.5h2.5l1-4H14v-2c0-1 0-2 2-2h1.5V2.1C17.2 2.1 15.9 2 14.6 2 11.9 2 10 3.7 10 6.7v2.8H7v4h3V22h4v-8.5z',
  github:
    'M12 2C6.5 2 2 6.6 2 12.2c0 4.5 2.9 8.3 6.8 9.7.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.4-3.4-1.4-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.4 1.1 2.9.8.1-.7.4-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.5 9.5 0 0 1 5 0c1.9-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5 4-1.4 6.8-5.2 6.8-9.7C22 6.6 17.5 2 12 2z',
  email:
    'M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm1 2.4V17h16V7.4l-8 5.3-8-5.3zM5.6 7l6.4 4.3L18.4 7H5.6z',
  telefone:
    'M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.37 2.3.57 3.6.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1L6.6 10.8z'
}
</script>

<template>
  <footer class="rodape">
    <div class="container rodape__inner">
      <p class="rodape__titulo">Identidade virtual</p>

      <ul class="redes" aria-label="Redes sociais e contactos">
        <li v-for="rede in redes" :key="rede.tipo">
          <a
            class="redes__link"
            :href="rede.url"
            :aria-label="rede.rotulo"
            :title="rede.rotulo"
            :target="rede.externo ? '_blank' : undefined"
            :rel="rede.externo ? 'noopener noreferrer' : undefined"
          >
            <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false">
              <path :d="icones[rede.tipo]" fill="currentColor" />
            </svg>
          </a>
        </li>
      </ul>

      <p class="rodape__copy">&copy; {{ ano }} {{ nome }}. Todos os direitos reservados.</p>
    </div>
  </footer>
</template>
