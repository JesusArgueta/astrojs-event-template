import { colors } from "./colors";

export interface Playlist {
  id: string;
  title: string;
  color: (typeof colors)[keyof typeof colors];
  cover: string;
  description: string;
  link: string;
}

export const playlists: Playlist[] = [
  {
    id: "1",
    title: "Museo de las Ilusiones",
    color: colors.teal,
    cover:
      "../assets/images/marcas/museo_ilusiones.png",
    description: "Entra en el fascinante mundo de las ilusiones, donde nada es lo que parece. ¡Visita el Museo de las Ilusiones Sevilla y experimenta lo imposible! Este museo forma parte del grupo global Museum of Illusions. Calle San Eloy 28, 41001 Sevilla",
    link:"https://moisevilla.es/"
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

