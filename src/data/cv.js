// Dados do currículo, separados dos componentes.
// Para atualizar o CV basta editar este ficheiro.

export const perfil = {
  nome: 'António Joaquim José',
  titulo: 'Professor · Engenheiro de Software',
  foto: 'foto.jpg', // ficheiro em /public
  fotoAlt: 'Fotografia de António Joaquim José',
  email: 'Tonyhih@gmail.com',
  telefone: '+244 942 511 062'
}

export const navegacao = [
  { id: 'quem-sou-eu', rotulo: 'Quem Sou Eu?' },
  { id: 'o-que-faco', rotulo: 'O que faço?' },
  { id: 'hobbies', rotulo: 'Hobbies' }
]

export const quemSouEu = {
  id: 'quem-sou-eu',
  titulo: 'Quem Sou Eu?',
  paragrafos: [
    'Professor de profissão, apaixonado por Física, Matemática e tecnologia, com especialização em Física de Partículas, Teorias da Relatividade e Eletricidade.',
    'Entusiasta do desenvolvimento de aplicações web e mobile. Engenheiro de Software e Full Stack Developer na Howzit Company.'
  ],
  destaques: ['Física de Partículas', 'Teorias da Relatividade', 'Eletricidade', 'Web & Mobile']
}

export const oQueFaco = {
  id: 'o-que-faco',
  titulo: 'O que faço?',
  intro: 'As três áreas em que divido o meu percurso profissional. Escolha um cartão para ver os detalhes.',
  itens: [
    {
      id: 'professor',
      icone: 'professor',
      titulo: 'Professor',
      resumo: 'Professor de Introdução à Eletricidade.',
      detalhes: [
        'Licenciatura em Ensino da Física.',
        'Pós-graduação em Matemática Pura e Aplicada.',
        'Lecionação de Introdução à Eletricidade.'
      ]
    },
    {
      id: 'web-mobile',
      icone: 'codigo',
      titulo: 'Desenvolvimento Web e Mobile',
      resumo: 'Criação de aplicações web e mobile.',
      detalhes: [
        'Pós-graduação em Desenvolvimento de Aplicações Web.',
        'Full Stack Developer na Howzit Company.',
        'Engenheiro de Software na Howzit Company.'
      ]
    },
    {
      id: 'comercial',
      icone: 'comercial',
      titulo: 'Direção Comercial',
      resumo: 'Vice-diretor comercial da Paulo e José, Comércio e Prestação de Serviços.',
      detalhes: [
        'Vice-diretor comercial da Paulo e José, Comércio e Prestação de Serviços.'
      ]
    }
  ]
}

export const hobbies = {
  id: 'hobbies',
  titulo: 'Hobbies',
  intro: 'O que me ocupa fora do trabalho.',
  itens: [
    {
      id: 'musica',
      icone: 'musica',
      titulo: 'Música',
      resumo: 'Canto, escrevo letras e produzo música com inteligência artificial.',
      detalhes: [
        'Canto.',
        'Escrevo letras.',
        'Produzo música com inteligência artificial.'
      ]
    },
    {
      id: 'futebol',
      icone: 'futebol',
      titulo: 'Futebol',
      resumo: 'Jogo futebol nos tempos livres.',
      detalhes: ['Jogo futebol nos tempos livres.']
    }
  ]
}

// Identidade virtual (rodapé). "tipo" escolhe o ícone SVG.
export const redesSociais = [
  {
    tipo: 'facebook',
    rotulo: 'Facebook de António Joaquim José',
    url: 'https://facebook.com/tonyhihjose',
    externo: true
  },
  {
    tipo: 'github',
    rotulo: 'GitHub de António Joaquim José',
    url: 'https://github.com/Tonyhih',
    externo: true
  },
  {
    tipo: 'email',
    rotulo: `Enviar e-mail para ${perfil.email}`,
    url: `mailto:${perfil.email}`,
    externo: false
  },
  {
    tipo: 'telefone',
    rotulo: `Telefonar para ${perfil.telefone}`,
    url: `tel:${perfil.telefone.replace(/\s/g, '')}`,
    externo: false
  }
]
