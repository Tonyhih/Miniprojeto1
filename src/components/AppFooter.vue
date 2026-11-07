<script setup>
import AppIcon from './AppIcon.vue'

defineProps({
  nome: { type: String, required: true },
  redes: { type: Array, required: true } // [{ tipo, nome, texto, rotulo, url, externo }]
})

const ano = new Date().getFullYear()
</script>

<template>
  <footer class="rodape">
    <div class="container rodape__grid">
      <div class="rodape__cta">
        <p class="sobretitulo sobretitulo--claro">Contacto</p>
        <p class="rodape__titulo">Vamos conversar?</p>
        <p class="rodape__texto">
          Para aulas, projetos web e mobile ou outras colaborações, escreva-me ou ligue.
        </p>
      </div>

      <div>
        <p class="sobretitulo sobretitulo--claro">Identidade virtual</p>
        <ul class="redes" aria-label="Redes sociais e contactos">
          <li v-for="rede in redes" :key="rede.tipo">
            <a
              class="redes__link"
              :href="rede.url"
              :aria-label="rede.rotulo"
              :target="rede.externo ? '_blank' : undefined"
              :rel="rede.externo ? 'noopener noreferrer' : undefined"
            >
              <span class="redes__icone">
                <AppIcon :nome="rede.tipo" :tamanho="22" />
              </span>
              <span class="redes__texto">
                <strong>{{ rede.nome }}</strong>
                <span>{{ rede.texto }}</span>
              </span>
              <AppIcon class="redes__seta" nome="setaDiagonal" :tamanho="18" />
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="container rodape__base">
      <p>&copy; {{ ano }} {{ nome }}</p>
      <p>Feito com Vue 3 e Vite</p>
    </div>
  </footer>
</template>
