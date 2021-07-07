import TratamentoEmagrecimento from '../assets/tratamento-emagrecimento.webp'
import TratamentoSaude from '../assets/tratamento-saude.webp'
import TratamentoLongevidade from '../assets/tratamento-longevidade.webp'
import TratamentoHipertrofia from '../assets/tratamento-hipertrofia.webp'
import TratamentoObesidade from '../assets/tratamento-obesidade.webp'
import TratamentoPerformance from '../assets/tratamento-performance.webp'

import DoctorPicture1 from '../assets/doctor-picture.webp'
import EmojisCalc from '../assets/emojis-calc.webp'
import EmojiEstetoscopio from '../assets/emoji-estetoscopio.webp'

import EmojiEscudo from '../assets/emoji-escudo.webp'

import ArrowRightList from '../assets/arrow-right.webp'

import DoctorPicture2 from '../assets/renan-picture.webp'

export const Navbar = [
  // {
  //   label: 'Inicio',
  //   url: '#inicio'
  // },
  // {
  //   label: 'Tratamentos',
  //   url: '#tratamentos'
  // },
  // {
  //   label: 'Sobre',
  //   url: '#sobre'
  // },
  {
    label: 'Agendar consulta',
    url: '#agenda'
  },
  // {
  //   label: 'Formulário',
  //   url: '#formulario'
  // },
  {
    label: 'Fórmula By Renan Helmer',
    url:
      'https://formuladoemagrecimentodrrenan.kpages.online/formuladrrenanhelmer'
  }
]

export const Header = {
  title: {
    doctor: 'Dr. Renan Helmer',
    content: 'Agenda',
    year: '2021'
  },
  paragraph: `
    Dr. Renan Helmer tem 31 anos, de Ji-Paraná (RO), Médico formado na FIMCA, em Porto Velho (RO), atuando há dois anos e meio, com 1.500 pacientes tratados(as). Com índice de tratamento positivo superando os 80%.
  `
}

export const Tratamentos = {
  title: {
    head: 'Tratamentos',
    content: `
      Medicação, Suplementação, Cardápio Personalizado e Individualizado feito por uma profissional nutricionista exclusiva. Ebook com receitas, dicas saudáveis para o dia a dia, vídeos com demonstrações de exercícios para casa. Consultas e análises em geral.
    `
  },
  content: [
    {
      image: TratamentoSaude,
      label: 'Saúde',
      description: 'A dieta saudável é fundamental para nossa saúde.'
    },
    {
      image: TratamentoLongevidade,
      label: 'Longevidade',
      description: 'A busca pelo envelhecimento saudável.'
    },
    {
      image: TratamentoEmagrecimento,
      label: 'Emagrecer',
      description:
        'Emagrecer com saúde é o corpo gastar mais calorias do que consome.'
    },
    {
      image: TratamentoHipertrofia,
      label: 'Hipertrofia',
      description:
        'A hipertrofia muscular corresponde ao aumento da massa muscular.'
    },
    {
      image: TratamentoPerformance,
      label: 'Performance',
      description:
        'Bons hábitos alimentares melhoram sua performance na academia. '
    },
    {
      image: TratamentoObesidade,
      label: 'Obesidade',
      description: 'A obesidade afeta a longevidade e a qualidade de vida.'
    }
  ]
}

export const Doctor = {
  firstRow: {
    image: {
      file: DoctorPicture1,
      alt: 'Dr. Renan Helmer Noelves'
    },
    title: {
      emoji: EmojiEstetoscopio,
      DoctorName: 'Dr. Renan Helmer Noelves',
      especialization: 'Nutrólogo'
    },
    span:
      'Graduação em Medicina pela Faculdades Integradas Aparício Carvalho - FIMCA,  2010',
    emojisCalc: EmojisCalc
  }
}

export const Trataments = {
  title: {
    label: 'Tratamentos',
    image: {
      file: EmojiEscudo,
      alt: 'Escudo'
    }
  },
  tratamentsList: [
    'Perda de Gordura;',
    'Compulsão Alimentar;',
    'Síndrome do Intestino Irritado;',
    'Diabetes;',
    'Constipação;',
    'Libido Baixa;',
    'Insônia;',
    'Indisposição;',
    'Transtorno de Ansiedade Ligado à Alimentação.'
  ],
  iconList: ArrowRightList,
  background: DoctorPicture2
}

export const Agenda = {
  title: {
    label: 'Agenda',
    description: 'Marque sua consulta'
  },
  citys: [
    {
      city: 'Ji-Paraná/RO',
      location: 'Av. Transcontinental, 1196 Casa Preta',
      clinical: 'Espaço Saúde',
      date: [
        '06 e 07 de Maio',
        '19, 20 e 21 de Maio',
        '27 e 28 de Maio',
        '01, 02, 03 e 04 de Junho',
        '09 de Junho',
        '24 e 25 de Junho'
      ]
    },
    {
      city: 'Cacoal/RO',
      location: 'Rua Antônio Paula Nunes, 1685 Centro',
      clinical: 'Berno Center',
      date: ['05, 06 e 07 de Abril', '03, 04 e 05 de Maio', '07 e 08 de Junho']
    },
    {
      city: 'Porto Velho/RO',
      location: 'Rua Santa Bárbara, 4749 Bairro industrial',
      clinical: 'ITC Vertebral',
      date: [
        '08, 09 e 10 de Março',
        '12, 13, 14, 15 e 16 de Abril',
        '10, 11, 12, 13 e 14 de Maio',
        '16  17, 18 e 19 de Junho'
      ]
    },
    {
      city: 'Vilhena/RO',
      location: 'Av.  José do Patrocínio, 2791 Centro',
      clinical: 'Fátima Almeida Estética',
      date: ['24 e 25 de Maio', '28 e 29 de Junho']
    },
    {
      city: 'Ariquemes/RO',
      location: 'Av.  Jamari 2879, Setor 01',
      clinical: 'Clínica Toda Pele',
      date: ['17 e 18 de Maio', '21, 22 e 23 de Junho']
    }
  ]
}
