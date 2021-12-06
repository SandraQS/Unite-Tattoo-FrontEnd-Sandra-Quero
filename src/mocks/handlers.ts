import { rest } from "msw";

const works = [
  {
    tittle: "Pajaritos",
    tattooArtist: "Javi Wolf",
    description: "LoremmAfdsfas",
    tattooStyles: "Acuarela",
    likes: 0,
    image:
      "https://storage.googleapis.com/unite-tattoo.appspot.com/Acuarela-1638124122682-.png",
    collectionWork: "61a09756fe38230f0ba12827",
    id: "61a3b755afd97834ed4aca6e",
  },
  {
    tittle: "Lobo",
    tattooArtist: "Javi Wolff",
    description: "Loremm",
    tattooStyles: "Acuarela",
    likes: 0,
    image:
      "https://storage.googleapis.com/unite-tattoo.appspot.com/Acuarela-1638119881947-.png",
    collectionWork: "61a37f78b0e47a2b50e4635b",
    id: "61a3b9ca4cc19250ca826626",
  },
];

const collections = [
  {
    tattooStyles: "Shiiiii",
    image:
      "https://storage.googleapis.com/unite-tattoo.appspot.com/Realista-1638438947435-.png",
    works: [],
    id: "61a37fc1b0e47a2b50e4635f",
  },
  {
    tattooStyles: "Fine Line",
    image:
      "https://storage.googleapis.com/unite-tattoo.appspot.com/Fine Line-1638105044539-.png",
    works: [
      {
        tittle: "Lobo",
        tattooArtist: "Javi Wolff",
        description: "Otro tatoo artist",
        tattooStyles: "Realista",
        likes: 0,
        image:
          "https://logiabarcelona.com/wp-content/uploads/2019/05/tatuaje_espalda_color_flor_cara_mujer_logia_barcelona_lincoln_lima.jpg",
        collectionWork: "61a37fd5b0e47a2b50e46363",
        id: "61ad1c16e0ac2f441146c6bc",
      },
    ],
    id: "61a37fd5b0e47a2b50e46363",
  },
];

export const handlers = [
  rest.get(
    "https://proyecto-final-sandra-back.herokuapp.com/uniteTattoo/client/homhttps://sandra-quero-unite-tattoo.herokuapp.com/uniteTattoo/tattooArtist/collections",
    async (req, res, ctx) => {
      const response = res(ctx.status(200), ctx.json(collections));
      return response;
    }
  ),
];
