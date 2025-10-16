import { colors } from "./colors";

export interface Playlist {
  id: string;
  title: string;
  color: (typeof colors)[keyof typeof colors];
  cover: string;
  description: string;
  link?: string;
}

export const playlists: Playlist[] = [
  {
    id: "1",
    title: "Museo de las Ilusiones",
    color: colors.teal,
    cover:
      "../assets/images/marcas/FINANCIADOR 1 2025 (2).png",
    description: "Sumérgete al mundo de retos visuales que desafían para ver las cosas de manera diferente y revelan mucho sobre cómo nuestro cerebro interpreta la realidad. El Museo de las Ilusiones es el espacio más innovador dentro del campo de entretenimiento interactivo, donde educación y diversión van unidos. Aquí está permitido tocar, reír y hablar, ¡y es obligatorio pasarlo genial! Y si te encuentras acompañado por tu mascota y quieres visitar el museo, ¡os recibiremos encantados!",
    link:"https://moisevilla.es/"
    },
    {
    id: "2",
    title: "Vegavet",
    color: colors.teal,
    cover:
      "../assets/images/marcas/13.png",
    description: "Clínica Veterinaria Lora del Río 🐾 C. Sierra de Andújar, 7 • Lora del Río, Sevilla Atención veterinaria integral con enfoque cercano y especializado. Servicios de prevención, diagnóstico y tratamiento para garantizar el bienestar de tu compañero fiel. 💙 Cuidamos con amor de lo que más quieres.",
    link:"https://aeclo.es/project/clinica-veterinaria-vegavet/"
    },
    {
    id: "3",
    title: "Clínica Veterinaria Bichos",
    color: colors.teal,
    cover:
      "../assets/images/marcas/15.png",
    description: "Clínica Veterinaria Bichos 🐾 Tu centro de confianza donde cada mascota es familia. Ofrecemos atención veterinaria integral con cariño y profesionalidad: consultas, vacunaciones, urgencias y cuidados especializados. ¡Porque ellos merecen lo mejor! 💙",
    link:"https://clinicaveterinariabichos.es/"
    },
    {
    id: "4",
    title: "Clínica veterinaria Sam",
    color: colors.teal,
    cover:
      "../assets/images/marcas/14.png",
    description: "Av. Constitución, 9 • Bormujos, Sevilla. Clínica con ambiente acogedor donde mascotas y dueños reciben trato excepcional. Destacan sus instalaciones modernas, equipo empático liderado por la veterinaria Patricia, y atención urgente eficaz. Comprometidos con el bienestar animal y precios accesibles. ¡Tu mascota en las mejores manos! 💙",
    link:"https://www.instagram.com/clinicaveterinaria_sam/"
    },
    {
    id: "5",
    title: "Hotty Doggy",
    color: colors.teal,
    cover:
      "../assets/images/marcas/19.png",
    description: "En Hotty Doggy nos gusta ofrecer a nuestros clientes la máxima calidad en un ambiente familiar, donde humanos y peluditos se sientan como en casa. Queremos que  disfruteis de los mejores perritos calientes gourmet, preparados con ingredientes seleccionados y mucho cariño, mientras compartimos valores tan importantes como el respeto, la empatía y la solidaridad. Por eso hemos tomado una de las decisiones más bonitas y solidarias desde que tenemos abiertas nuestras puertas: colaborar con LASA aportando nuestro granito de arena para que más perritos puedan encontrar el hogar que merecen. Hotty Doggy x LASA: juntos por un mundo más sabroso y justo para todos.",
    link:"https://www.instagram.com/hottydoggy_es/?hl=es"
    },
    {
    id: "6",
    title: "Residencia Oasis",
    color: colors.teal,
    cover:
      "../assets/images/marcas/FINANCIADOR 1 2025 (3).png",
    description: "Residencia oasis 5 huesos, nuestra prioridad es que las mascotas salgan contentas y nuestros clientes satisfechos. Ofrecemos servicios individuales, teniendo siempre en cuenta la necesidad de cada cliente. Instalaciones climatizadas, habitaciones individuales y zonas de piscina para el disfrute de los peluditos.",
    link:"https://www.residenciaoasis.com/"
    },
    {
    id: "7",
    title: "Masscan",
    color: colors.teal,
    cover:
      "../assets/images/marcas/16.png",
    description: "Somos un centro de fisioterapia y rehabilitación de pequeños animales. Especializados en alivio del dolor y la recuperación de funcionalidad . Damos calidad de vida a tu compañero!!",
    link:"https://masscan.es/"
    },
    {
    id: "8",
    title: "Rotary",
    color: colors.teal,
    cover:
      "../assets/images/marcas/22.png",
    description: "Rotary es una red mundial compuesta por más de 1,2 millones de vecinos, amigos, líderes y personas dedicadas a solucionar problemas, quienes ven un planeta en que las personas se unen y toman acción para generar un cambio perdurable en el mundo, sus comunidades y en sí mismos.",
    link:"https://www.rotary.org/es"
    },
    {
    id: "9",
    title: "Acogida Días Felices",
    color: colors.teal,
    cover:
      "../assets/images/marcas/FINANCIADOR 1 2025.png",
    description: "Residencia canina de Sevilla, donde los animales son lo primero y se les da el trato y cuidado que merecen. Espacio para protectoras de animales.",
    },
    {
    id: "10",
    title: "Susana Chamizo Psicóloga",
    color: colors.teal,
    cover:
      "../assets/images/marcas/17.png",
    description: "Psicóloga General Sanitaria, Especialista en Psicopatología, Intervención Clínica y Salud. Especialista en Intervención y Prevención de la Violencia de Género. Terapeuta EMDR NIVEL II.Número: 686908565",
    link:" https://www.instagram.com/susanachamizo_psicologa/#www.linkedin.com/in/susana-chamizo-34064542"
    },
    {
    id: "11",
    title: "Okplanet",
    color: colors.teal,
    cover:
      "../assets/images/marcas/PLANTILLAS PUBLICACIONES DE CADA UNA.png",
    description: "OkPlanet es una asociación medioambiental sin ánimo de lucro nacida en Sevilla en 2021. Desarrolla limpiezas de espacios naturales, campañas educativas, reforestaciones y proyectos de sostenibilidad. Basada en la filosofía 'cada granito cuenta', promueve participación social frente al cambio climático y contribuye a los ODS, extendiendo su acción más allá de Andalucía.",
    link:" https://www.instagram.com/Okplanetsevilla"
    },
  ];

export const morePlaylists = [
  ...playlists.map((item) => ({
    ...item,
    id: item.id + "a",
  })),
];

export const sidebarPlaylists = [
  ...playlists.map((item) => ({
    ...item,
    id: item.id + "_side",
  })),
];

export const allPlaylists = [
  ...playlists,
  ...morePlaylists,
];

