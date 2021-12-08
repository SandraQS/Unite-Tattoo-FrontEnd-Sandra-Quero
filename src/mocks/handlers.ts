import { rest } from "msw";
import { REACT_APP_URL_API_UNITETATTOO } from "@env";

const works = [
  {
    tittle: "Pajaritos",
    tattooArtist: "Javi Wolf",
    description: "descripción",
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

const user = {
  tattooArtistUser: {
    personalDataTattoArtist: {
      name: "Sandra",
      surname1: "Quero",
      surname2: "Sánchez",
    },
    userDataTattoArtist: {
      userName: "ShivaShana",
      password: "$2b$10$obzQkOXnHi.IyJZtst8FC.4CNK1XlliFmSqJ9VyHPmgBNmPu.fbO2",
      email: "email@gmail.com",
    },
    professionalDataTattooArtist: {
      studioName: "Shiva",
      professionalName: "ShivaShana",
      phone: 666666666,
      contactEmail: "email@gmail.com",
      openingHours: "de 9.00 a 18.00h",
      direction: "C/hola, nº13",
      tattooStyles: [],
      colaboration: "true",
    },
    collections: [
      {
        tattooStyles: "Realista",
        image:
          "https://storage.googleapis.com/unite-tattoo.appspot.com/Realista-1638921273323-.png",
        works: [
          {
            tittle: "Lobos - Espalda",
            tattooArtist: "Bruno",
            description:
              "Después de un largo tiempo pude terminar esta espalda, una más para la colección 😁👌🏼👌🏼\n➕After quite a long time I was able to finish this back piece, another one!!\n\n▪️TATTOOING IN @circatattoobcn BARCELONA, SPAIN.\n\n@radiantcolorsink\n@bepantholtattoo\n@tsunami_tattoo_needles",
            tattooStyles: "Realista",
            likes: 0,
            image:
              "https://storage.googleapis.com/unite-tattoo.appspot.com/Realista-1638924401230-.png",
            collectionWork: "61aff43a77a75540f78b8449",
            id: "61b0007377a75540f78b8cc3",
          },
        ],
        id: "61aff43a77a75540f78b8449",
      },
      {
        tattooStyles: "Acuarela",
        image:
          "https://storage.googleapis.com/unite-tattoo.appspot.com/Acuarela-1638923893558-.png",
        works: [],
        id: "61affe7677a75540f78b8569",
      },
    ],
    appointmentSchedule: [],
    imageAmbient: "nada",
    profileImage:
      "https://cdn.pixabay.com/photo/2016/04/01/10/11/avatar-1299805_1280.png",
    id: "61a37f0adaf203887dd7642c",
  },
};

export const handlers = [
  rest.get(
    `${REACT_APP_URL_API_UNITETATTOO}/tattooArtist/collections`,
    async (req, res, ctx) => {
      const response = res(ctx.status(200), ctx.json(user));
      return response;
    }
  ),

  rest.get(
    `${REACT_APP_URL_API_UNITETATTOO}/client/home`,
    async (req, res, ctx) => {
      const response = res(ctx.status(200), ctx.json(works));
      return response;
    }
  ),

  rest.post(
    `${REACT_APP_URL_API_UNITETATTOO}/tattooArtist/collection/create`,
    async (req, res, ctx) => {
      const response = res(
        ctx.status(200),
        ctx.json([
          {
            tattooStyles: "Realista",
            image:
              "https://storage.googleapis.com/unite-tattoo.appspot.com/Realista-1638921273323-.png",
            works: [
              {
                tittle: "Lobos - Espalda",
                tattooArtist: "Bruno",
                description:
                  "Después de un largo tiempo pude terminar esta espalda, una más para la colección 😁👌🏼👌🏼\n➕After quite a long time I was able to finish this back piece, another one!!\n\n▪️TATTOOING IN @circatattoobcn BARCELONA, SPAIN.\n\n@radiantcolorsink\n@bepantholtattoo\n@tsunami_tattoo_needles",
                tattooStyles: "Realista",
                likes: 0,
                image:
                  "https://storage.googleapis.com/unite-tattoo.appspot.com/Realista-1638924401230-.png",
                collectionWork: "61aff43a77a75540f78b8449",
                id: "61b0007377a75540f78b8cc3",
              },
            ],
            id: "61aff43a77a75540f78b8449",
          },
          {
            tattooStyles: "Acuarela",
            image:
              "https://storage.googleapis.com/unite-tattoo.appspot.com/Acuarela-1638923893558-.png",
            works: [],
            id: "61affe7677a75540f78b8569",
          },
        ])
      );
      return response;
    }
  ),
];
