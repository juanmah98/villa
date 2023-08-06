export interface Medal {
  image: string;
  title: string;
  description: string;
  type: string;
  index: number;
}

export const MEDALS: Medal[] = [

  // Medallas bloqueadas
  {
    image: '',
    title: '???',
    description: 'Yo que sé, prueba a hacer cosas, quizás consigues algo crack.',
    type: 'unknown',
    index: 0
  },

  //Medallas de oro
  {
    image: 'TyrionLannister.png',
    title: 'Tyrion Lannister',
    description: 'Conseguir que venga un enano de fiesta a la villa de la manera que sea.',
    type: 'gold',
    index: 0
  },
  {
    image: 'CinturonDeCampeon.png',
    title: 'Cinturón de campeón',
    description: 'Hacer más de 2 tríos en una sola villa con personas diferentes.',
    type: 'gold',
    index: 1
  },
  {
    image: 'LlamadAMiAbogado.png',
    title: 'Llamad a mi abogado',
    description: 'Ser detenido por la policía por los motivos que sean durante una villa.',
    type: 'gold',
    index: 2
  },
  {
    image: 'JackAss.png',
    title: 'JackAss',
    description: 'Terminar en el hospital por algún accidente durante la villa.',
    type: 'gold',
    index: 3
  },
  {
    image: 'Malandro.png',
    title: 'Malandro',
    description: 'Hacerte un o más tatuajes durante cualquier momento de un villa.',
    type: 'gold',
    index: 4
  },

  // Medallas de plata
  {
    image: 'Perforado.png',
    title: 'Perforado',
    description: 'Hacerte uno o varios piercings durante una villa, con los medios que sean.',
    type: 'silver',
    index: 0
  },
  {
    image: 'WillyFog.png',
    title: 'Willy Fog',
    description: 'Recorrer más de 750Km para poder asistir a una villa.',
    type: 'silver',
    index: 1
  },
  {
    image: 'ElMesias.png',
    title: 'El mesías',
    description: 'Conseguir remontar la fiesta un día donde todo estaba perdido.',
    type: 'silver',
    index: 2
  },
  {
    image: 'caganer.png',
    title: 'El caganer',
    description: 'Enhorabuena, te has cagado en medio del salón, cada uno con sus capacidades.',
    type: 'silver',
    index: 3
  },
  {
    image: 'Carapolla.png',
    title: 'Carapolla',
    description: 'Recibir un "mortadelo" de manera voluntaria y estando consciente.',
    type: 'silver',
    index: 4
  },

  // Medallas de bronce

  {
    image: 'Nude.png',
    title: 'N-U-D-E',
    description: 'Levantar unos cuantos UWUU!! por ponerte en pelotas.',
    type: 'bronze',
    index: 0
  },
  {
    image: 'Dj.png',
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
    image: 'RobinHood.png',
    title: 'Robin Hood',
    description: 'Hacer o preparar alguna sorpresa de manera desinteresada para el resto de personas.',
    type: 'bronze',
    index: 3
  },
  {
    image: 'Billy.png',
    title: 'Billy el niño',
    description: 'Tomar al menos 4 chupitos al día durante una villa entera.',
    type: 'bronze',
    index: 4
  },

  // Medallas de cobre
  {
    image: 'Campeon.png',
    title: 'Campeón, crack, tifón',
    description: 'Ganar un torneo de beer pong durante una villa.',
    type: 'copper',
    index: 2
  },
  {
    image: 'Barman.png',
    title: 'Barman',
    description: 'Traer o preparar alcohol típico de tu tierra para el disfrute de todos.',
    type: 'copper',
    index: 3
  },
  {
    image: 'TurboCiego.png',
    title: 'Turbo-Ciego',
    description: 'Hacer 2 o más turbolatas cada día de una villa.',
    type: 'copper',
    index: 0
  },
  {
    image: 'ElPotas.png',
    title: 'El Potas',
    description: 'Acabar vomitando durante uno o más días en una villa.',
    type: 'copper',
    index: 4
  },
  {
    image: 'Nadamar.png',
    title: 'nadamaR',
    description: 'Ramadán inverso, solo puedes beber de día, nada de comida hasta que caiga el sol.',
    type: 'copper',
    index: 1
  },
];
