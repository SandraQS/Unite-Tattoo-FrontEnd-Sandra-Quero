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

export const handlers = [
  rest.get(
    "https://proyecto-final-sandra-back.herokuapp.com/uniteTattoo/client/home",
    async (req, res, ctx) => {
      const response = res(ctx.status(200), ctx.json(works));
      return response;
    }
  ),
];
