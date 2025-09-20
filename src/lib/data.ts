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
    title: "FERIA DE ASOCIACIONES",
    color: colors.teal,
    cover:
      "../assets/images/ONG.jpg",
    description: "En La Sonrisa Festival queremos dar voz y espacio a las organizaciones que trabajan cada día por construir un mundo mejor. En nuestra Feria de Asociaciones podrás conocer de cerca a distintas entidades, descubrir su labor, informarte sobre cómo colaborar y, si te animas, ¡dar el paso para participar activamente en alguna de ellas!",
    },
  {
    id: "2",
    title: "Escenario Sonrisas",
    color: colors.green,
    cover:
      "../assets/images/BANDAS.jpg",
    description: "Nuestro escenario será un espacio vivo y diverso donde todo puede pasar: música en directo, poesía, micro abierto, danza, clases colectivas de yoga o bachata... Una programación hecha para disfrutar y compartir, pensada para todas las edades y gustos.",},
  {
    id: "3",
    title: "Comida y Bebida",
    color: colors.rose,
    cover:
      "../assets/images/COMIDA.jpg",
    description: "En La Sonrisa Festival creemos que la gastronomía también puede ser una forma de cuidar el planeta 🌍. Por eso, toda la oferta del evento será vegetariana y vegana, con opciones sin gluten, pensadas para que todo el mundo pueda disfrutar sin preocuparse.Contaremos con la colaboración y donaciones de diferentes entidades que harán posible una barra solidaria variada y deliciosa. Desde snacks hasta platos completos, bebidas fresquitas y postres, ¡habrá opciones para todos los gustos! Además, cada consumición será un granito de arena para seguir cuidando de los animales de La Sonrisa Animal (LASA) 🐾.",},
  {
    id: "4",
    title: "Puestecitos Solidarios",
    color: colors.red,
    cover:
      "../assets/images/PUESTOS.jpg",
   description: "En La Sonrisa Festival también encontrarás un pequeño mercadillo lleno de cariño y creatividad, donde cada compra ayuda a una buena causa.",},
  {
    id: "5",
    title: "EQUIPO VOLUNTARIX",
    color: colors.pink,
    cover:
      "../assets/images/EQUIPO_VOLUNTARIO.jpeg",
    description: "El equipo de voluntarixs de La Sonrisa Festival es el corazón del evento. Formado por personas comprometidas y solidarias, su labor es fundamental para que todo funcione y los asistentes vivan una experiencia inolvidable. Los voluntarixs colaboran en la organización, atención al público, apoyo logístico y difusión de las actividades, siempre con una sonrisa y ganas de ayudar. Además, participan en acciones de sensibilización sobre el bienestar animal y la importancia de la solidaridad. Ser voluntarix en el festival es una oportunidad para aprender, conocer gente nueva y aportar tu energía a una causa que transforma vidas. ¡Gracias a su esfuerzo y dedicación, La Sonrisa Festival es posible!",},
    {
    id: "6",
    title: "Sorteos Solidarios",
    color: colors.pink,
    cover:
      "../assets/images/sorteo.jpeg",
    description: "En La Sonrisa Festival nunca faltan las sorpresas ✨. Muy pronto anunciaremos los sorteos de esta edición, con premios donados por diferentes entidades y comercios locales. Además, resolveremos los sorteos pendientes de la edición anterior, así que… ¡permanece atent@ a nuestro Instagram @lasonrisafestival! 📲",},
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

