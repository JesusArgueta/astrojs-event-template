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
    title: "Veggie Sevilla",
    color: colors.teal,
    cover: "/assets/images/sorteos/4.png",
    description:
      "Gran donación! Una tablet nueva para niñas y un bolso Guess. Veggie Sevilla demuestra su compromiso social apoyando la educación y la infancia. ¡Gracias por vuestra solidaridad! 💚",
  },
  {
    id: "2",
    title: "Real Betis Balompié",
    color: colors.teal,
    cover: "/assets/images/sorteos/2.png",
    description:
      "¡Gran sorteo! Gana una camiseta oficial del Betis firmada por los jugadores. Participa y consigue este recuerdo único de tu equipo del alma. ¡Mucha suerte, béticos! ⚪💚",
  },
  {
    id: "3",
    title: "Sevilla FC - Sorteo Exclusivo",
    color: colors.teal,
    cover: "/assets/images/sorteos/3.png",
    description:
      "¡Sorteo especial! Gana una camiseta oficial del Sevilla FC firmada por toda la plantilla. Participa y llévate este recuerdo único de tus jugadores favoritos. ¡Mucha suerte, sevillistas! 🏆",
  },
  {
    id: "4",
    title: "Museo de las Ilusiones",
    color: colors.teal,
    cover: "/assets/images/sorteos/1.png",
    description:
      "¡Participa en nuestro sorteo y gana entradas para el Museo de las Ilusiones! Vive una experiencia única llena de magia, diversión y percepciones sorprendentes. ¡No te lo pierdas! ✨",
  },
  {
    id: "5",
    title: "Hotty Doggy",
    color: colors.teal,
    cover: "/assets/images/sorteos/5.png",
    description:
      "¡Premio especial! Cena romántica para 2 personas: entrante, 2 perritos de especialidad, 2 bebidas y postre a compartir. Disfruta de una velada deliciosa y diferente. ¡Perfecto para una cita inolvidable! 💫",
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

export const allPlaylists = [...playlists, ...morePlaylists];
