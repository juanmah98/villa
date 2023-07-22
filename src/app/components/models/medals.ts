export interface Medal {
  image: string;
  title: string;
  description: string;
  type: string;
  index: number;
}

export const MEDALS: Medal[] = [

  // Medallas de oro
  {
    image: '',
    title: '???',
    description: 'Yo que sé, prueba a hacer cosas, quizás consigues algo.',
    type: 'unknown',
    index: 0
  },
  {
    image: '',
    title: 'Tyrion Lannister',
    description: 'Conseguir que venga un enenao de fiesta a la villa de la manera que sea.',
    type: 'gold',
    index: 0
  },
  {
    image: 'Cinturon.png',
    title: 'Cinturón de campeón',
    description: 'Hacer más de 2 trios en una sola villa con personas diferentes.',
    type: 'gold',
    index: 1
  },
  {
    image: '',
    title: 'title 3',
    description: 'description 3',
    type: 'gold',
    index: 2
  },
  {
    image: 'Cops.png',
    title: 'Llamad a mi abogado',
    description: 'Ser detenido por la policia durante una villa por los motivos que sean.',
    type: 'gold',
    index: 3
  },
  {
    image: '',
    title: 'title 5',
    description: 'description 5',
    type: 'gold',
    index: 4
  },

  // Medallas de plata
  {
    image: '',
    title: 'JackAss',
    description: 'Terminar en el hospital o similares por algun accidente durante la villa.',
    type: 'silver',
    index: 0
  },
  {
    image: '',
    title: 'Willy Fog',
    description: 'Recorrer más de 750Km para poder asistir a una villa.',
    type: 'silver',
    index: 1
  },
  {
    image: '',
    title: 'Filemón',
    description: 'Recibir un "mortadelo" de manera voluntaria y siendo consciente.',
    type: 'silver',
    index: 2
  },
  {
    image: '',
    title: 'El mesias',
    description: 'Conseguir remontar la fiesta un día donde todo estaba perdido.',
    type: 'silver',
    index: 3
  },
  {
    image: '',
    title: 'title 5',
    description: 'description 5',
    type: 'silver',
    index: 4
  },

  // Medallas de bronce
  {
    image: 'nude.png',
    title: 'N-U-D-E',
    description: 'Levantar unos cuantos UWUU!! por ponerte en pelotas.',
    type: 'bronze',
    index: 0
  },
  {
    image: '',
    title: 'title 2',
    description: 'description 2',
    type: 'bronze',
    index: 1
  },
  {
    image: '',
    title: 'Eduardo manos tijeras',
    description: 'Teñirte o raparte el pelo de manera interesante durante un día de la villa.',
    type: 'bronze',
    index: 2
  },
  {
    image: '',
    title: 'Santa Claus',
    description: 'Hacer o preparar alguna sorpresa de manera desinteresada para el resto de personas.',
    type: 'bronze',
    index: 3
  },
  {
    title: 'title 5',
    image: '',
    description: 'description 5',
    type: 'bronze',
    index: 4
  },

  // Medallas de cobre
  {
    image: 'BeerPongCup.png',
    title: 'Campeón, crack, tifón',
    description: 'Ganar un torneo de beer pong durante una villa.',
    type: 'copper',
    index: 0
  },
  {
    image: '',
    title: 'Barman',
    description: 'Traer o preparar alcohol tipico de tu tierra para el disfrute de todos.',
    type: 'copper',
    index: 1
  },
  {
    image: '',
    title: 'Turbo-Ciego',
    description: 'Hacer 2 o más turbolatas cada día de una villa.',
    type: 'copper',
    index: 2
  },
  {
    image: '',
    title: 'title 4',
    description: 'description 4',
    type: 'copper',
    index: 3
  },
  {
    image: '',
    title: 'nadamaR',
    description: 'Ramadán inverso, solo puedes beber de día, nada de comida hasta que caiga el sol.',
    type: 'copper',
    index: 4
  },
];
