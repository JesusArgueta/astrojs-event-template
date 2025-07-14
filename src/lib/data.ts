import { colors } from "./colors";

export interface Playlist {
  id: string;
  title: string;
  color: (typeof colors)[keyof typeof colors];
  cover: string;
  description: string;
}

export const playlists: Playlist[] = [
  {
    id: "1",
    title: "ONGS",
    color: colors.teal,
    cover:
      "../assets/images/ONG.jpg",
    description: "En La Sonrisa Festival colaboran varias ONGs que trabajan incansablemente por el bienestar animal y social en Sevilla. Estas organizaciones dedican sus esfuerzos a rescatar animales en situación de abandono, ofrecerles atención veterinaria y buscarles un hogar responsable. Además, promueven la adopción ética y la concienciación sobre el respeto a todos los seres vivos. Muchas de estas ONGs también desarrollan proyectos de integración comunitaria, educación ambiental y actividades solidarias que involucran a vecinos y voluntarios. Gracias a su labor y compromiso, el festival tiene un impacto positivo en la ciudad, fomenta valores de solidaridad y ayuda a quienes más lo necesitan. Participar en La Sonrisa Festival es también una oportunidad para conocer el trabajo de estas entidades, apoyar sus causas y formar parte de una red de ayuda que transforma vidas.",
    },
  {
    id: "2",
    title: "BANDAS",
    color: colors.green,
    cover:
      "../assets/images/BANDAS.jpg",
    description: "Las bandas que participan en La Sonrisa Festival representan lo mejor del talento musical local y nacional. Cada grupo aporta su estilo único y su energía para crear una experiencia inolvidable para todos los asistentes. Desde el rock alternativo hasta la música indie y los ritmos más actuales, el festival ofrece una programación variada pensada para todos los gustos. Los músicos no solo comparten su arte en el escenario, sino que también colaboran con la causa solidaria del evento, apoyando a las ONGs y fomentando valores de comunidad y solidaridad. La Sonrisa Festival es una oportunidad para descubrir nuevas bandas, disfrutar de actuaciones en vivo y conectar con la pasión por la música en un ambiente festivo y comprometido.",},
  {
    id: "3",
    title: "COMIDA",
    color: colors.rose,
    cover:
      "../assets/images/COMIDA.jpg",
    description: "La oferta gastronómica de La Sonrisa Festival está pensada para ser inclusiva y satisfacer todos los gustos y necesidades. Contamos con una amplia variedad de puestos de comida que ofrecen opciones para personas con intolerancias alimentarias, menús veganos y vegetarianos, así como platos tradicionales y propuestas innovadoras. Nuestro objetivo es que todos los asistentes puedan disfrutar de una experiencia culinaria segura, deliciosa y responsable. Los proveedores han sido seleccionados por su compromiso con la calidad, la sostenibilidad y el respeto a la diversidad alimentaria. Ven y descubre sabores únicos, comparte momentos especiales y disfruta de la comida en un ambiente festivo y solidario, donde nadie se queda sin su plato favorito.",},
  {
    id: "4",
    title: "PUESTOS",
    color: colors.red,
    cover:
      "../assets/images/PUESTOS.jpg",
   description: "Los puestos que participan en La Sonrisa Festival ofrecen una gran variedad de productos y servicios pensados para todos los asistentes. Cada puesto se suma a la causa solidaria del evento, destinando una parte de sus beneficios para ayudar a los animales rescatados por las ONGs colaboradoras. Encontrarás desde artesanía local, ropa, accesorios y productos ecológicos, hasta actividades interactivas y propuestas innovadoras. Además de disfrutar de una experiencia de compra única, estarás contribuyendo directamente al bienestar animal y apoyando proyectos solidarios en Sevilla. Ven, descubre los puestos, apoya a los emprendedores y forma parte de una red de colaboración que transforma vidas y fomenta la solidaridad en la comunidad.",},
  {
    id: "5",
    title: "EQUIPO VOLUNTARIX",
    color: colors.pink,
    cover:
      "../assets/images/EQUIPO_VOLUNTARIO.jpeg",
    description: "El equipo de voluntarixs de La Sonrisa Festival es el corazón del evento. Formado por personas comprometidas y solidarias, su labor es fundamental para que todo funcione y los asistentes vivan una experiencia inolvidable. Los voluntarixs colaboran en la organización, atención al público, apoyo logístico y difusión de las actividades, siempre con una sonrisa y ganas de ayudar. Además, participan en acciones de sensibilización sobre el bienestar animal y la importancia de la solidaridad. Ser voluntarix en el festival es una oportunidad para aprender, conocer gente nueva y aportar tu energía a una causa que transforma vidas. ¡Gracias a su esfuerzo y dedicación, La Sonrisa Festival es posible!",},
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

