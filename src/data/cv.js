// Dados do currículo, separados dos componentes.
// Para atualizar o CV basta editar este ficheiro.

export const perfil = {
  nome: 'António Joaquim José',
  titulo: 'Professor · Engenheiro de Software',
  lema: 'Ensino Física e Eletricidade e desenvolvo aplicações web e mobile.',
  cargoAtual: 'Full Stack Developer',
  empresaAtual: 'Howzit Company',
  foto: 'foto.jpg', // ficheiro em /public
  fotoAlt: 'Fotografia de António Joaquim José, de fato azul-marinho e gravata',
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
  sobretitulo: 'Perfil',
  titulo: 'Quem Sou Eu?',
  paragrafos: [
    'Professor de profissão, apaixonado por Física, Matemática e tecnologia, com especialização em Física de Partículas, Teorias da Relatividade e Eletricidade.',
    'Entusiasta do desenvolvimento de aplicações web e mobile. Engenheiro de Software e Full Stack Developer na Howzit Company.'
  ],
  // Ficha resumo (lista de definições)
  ficha: [
    {
      rotulo: 'Especialização',
      valor: 'Física de Partículas, Teorias da Relatividade e Eletricidade'
    },
    {
      rotulo: 'Formação',
      valor: 'Ensino da Física · Matemática Pura e Aplicada · Desenvolvimento de Aplicações Web'
    },
    {
      rotulo: 'Atualmente',
      valor: 'Engenheiro de Software e Full Stack Developer na Howzit Company'
    },
    {
      rotulo: 'Interesses',
      valor: 'Física, Matemática, tecnologia e aplicações web e mobile'
    }
  ]
}

export const oQueFaco = {
  id: 'o-que-faco',
  sobretitulo: 'Percurso profissional',
  titulo: 'O que faço?',
  intro: 'Três áreas que se cruzam no meu dia a dia: a sala de aula, o código e a gestão comercial. Abra um cartão para ver os detalhes.',
  itens: [
    {
      id: 'professor',
      icone: 'professor',
      etiqueta: 'Ensino',
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
      etiqueta: 'Engenharia',
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
      etiqueta: 'Gestão',
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
  sobretitulo: 'Tempo livre',
  titulo: 'Hobbies',
  intro: 'O que me ocupa fora do trabalho.',
  itens: [
    {
      id: 'musica',
      icone: 'musica',
      etiqueta: 'Criatividade',
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
      etiqueta: 'Desporto',
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
    nome: 'Facebook',
    texto: 'tonyhihjose',
    rotulo: 'Facebook de António Joaquim José',
    url: 'https://facebook.com/tonyhihjose',
    externo: true
  },
  {
    tipo: 'github',
    nome: 'GitHub',
    texto: 'Tonyhih',
    rotulo: 'GitHub de António Joaquim José',
    url: 'https://github.com/Tonyhih',
    externo: true
  },
  {
    tipo: 'email',
    nome: 'E-mail',
    texto: perfil.email,
    rotulo: `Enviar e-mail para ${perfil.email}`,
    url: `mailto:${perfil.email}`,
    externo: false
  },
  {
    tipo: 'telefone',
    nome: 'Telefone',
    texto: perfil.telefone,
    rotulo: `Telefonar para ${perfil.telefone}`,
    url: `tel:${perfil.telefone.replace(/\s/g, '')}`,
    externo: false
  }
]
