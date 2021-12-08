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

const collections = {
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
        tattooStyles: "Acuarela",
        image:
          "https://storage.googleapis.com/unite-tattoo.appspot.com/Acuarela-1638104950642-.png",
        works: [
          {
            tittle: "Lobo",
            tattooArtist: "Javi Wolff",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed felis magna, volutpat eget nulla in, consequat laoreet nisl. Integer faucibus elit sapien, sit amet volutpat libero congue non. Ut est erat, feugiat in feugiat sit amet, interdum at risus. Cras fringilla congue ipsum, vel vulputate diam fermentum vel. Mauris accumsan neque eget nisl consequat suscipit. Fusce aliquet mi quis mi condimentum egestas. Nunc gravida tempor commodo. Morbi gravida lectus quis augue faucibus ultricies. Fusce mi dui, interdum vitae scelerisque et, cursus id nisi.",
            tattooStyles: "Acuarela",
            likes: 0,
            image:
              "https://storage.googleapis.com/unite-tattoo.appspot.com/Acuarela-1638119881947-.png",
            collectionWork: "61a37f78b0e47a2b50e4635b",
            id: "61a3b9ca4cc19250ca826626",
          },
          {
            tittle: "Lobo2",
            tattooArtist: "Javi Wolff",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed felis magna, volutpat eget nulla in, consequat laoreet nisl. Integer faucibus elit sapien, sit amet volutpat libero congue non. Ut est erat, feugiat in feugiat sit amet, interdum at risus. Cras fringilla congue ipsum, vel vulputate diam fermentum vel. Mauris accumsan neque eget nisl consequat suscipit. Fusce aliquet mi quis mi condimentum egestas. Nunc gravida tempor commodo. Morbi gravida lectus quis augue faucibus ultricies. Fusce mi dui, interdum vitae scelerisque et, cursus id nisi.",
            tattooStyles: "Realista",
            likes: 0,
            image:
              "https://storage.googleapis.com/unite-tattoo.appspot.com/Realista-1638438947435-.png",
            collectionWork: "61a37f78b0e47a2b50e4635b",
            id: "61a89824ae8722adc47358c1",
          },
        ],
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
    "https://sandra-quero-unite-tattoo.herokuapp.com/uniteTattoo/tattooArtist/collections",
    async (req, res, ctx) => {
           const response = res(ctx.status(200), ctx.json(collections));
      return response;
    }
  ),
];
