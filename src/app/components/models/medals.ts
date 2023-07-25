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
    image: 'Oro1.png',
    title: 'Tyrion Lannister',
    description: 'Conseguir que venga un enano de fiesta a la villa de la manera que sea.',
    type: 'gold',
    index: 0
  },
  {
    image: 'Oro2.png',
    title: 'Cinturón de campeón',
    description: 'Hacer más de 2 tríos en una sola villa con personas diferentes.',
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
    image: 'Oro4.png',
    title: 'Llamad a mi abogado',
    description: 'Ser detenido por la policía por los motivos que sean durante una villa.',
    type: 'gold',
    index: 3
  },
  {
    image: 'Oro5.png',
    title: 'Malandro',
    description: 'Hacerte un o más tatuajes durante cualquier momento de un villa.',
    type: 'gold',
    index: 4
  },

  // Medallas de plata
  {
    image: 'Plata1.png',
    title: 'JackAss',
    description: 'Terminar en el hospital o similares por algún accidente durante la villa.',
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
    title: 'El caganer',
    description: 'Enhorabuena, te has cagado en medio del salón, cada uno con sus capacidades.',
    type: 'silver',
    index: 2
  },
  {
    image: 'Plata4.png',
    title: 'El mesías',
    description: 'Conseguir remontar la fiesta un día donde todo estaba perdido.',
    type: 'silver',
    index: 3
  },
  {
    image: 'Plata5.png',
    title: 'Perforado',
    description: 'Hacerte uno o varios piercings durante una villa, con los medios que sean.',
    type: 'silver',
    index: 4
  },

  // Medallas de bronce
  {
    image: 'Bronce1.png',
    title: 'N-U-D-E',
    description: 'Levantar unos cuantos UWUU!! por ponerte en pelotas.',
    type: 'bronze',
    index: 0
  },
  {
    image: '',
    title: 'Mister World Wide',
    description: 'Traer o hacer tu mismo de Dj durante una villa.',
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
    image: 'Bronce4Claro.png',
    title: 'Robin Hood',
    description: 'Hacer o preparar alguna sorpresa de manera desinteresada para el resto de personas.',
    type: 'bronze',
    index: 3
  },
  {
    image: 'Bronce5.png',
    title: 'Carapolla',
    description: 'Recibir un "mortadelo" de manera voluntaria y estando consciente.',
    type: 'bronze',
    index: 4
  },

  // Medallas de cobre
  {
    image: 'Cobre1.png',
    title: 'Campeón, crack, tifón',
    description: 'Ganar un torneo de beer pong durante una villa.',
    type: 'copper',
    index: 0
  },
  {
    image: 'Cobre2.png',
    title: 'Barman',
    description: 'Traer o preparar alcohol típico de tu tierra para el disfrute de todos.',
    type: 'copper',
    index: 1
  },
  {
    image: 'Cobre3.png',
    title: 'Turbo-Ciego',
    description: 'Hacer 2 o más turbolatas cada día de una villa.',
    type: 'copper',
    index: 2
  },
  {
    image: 'Cobre4.png',
    title: 'El Potas',
    description: 'Acabar vomitando durante uno o más dias en una villa.',
    type: 'copper',
    index: 3
  },
  {
    image: 'Cobre5.png',
    title: 'nadamaR',
    description: 'Ramadán inverso, solo puedes beber de día, nada de comida hasta que caiga el sol.',
    type: 'copper',
    index: 4
  },
];
