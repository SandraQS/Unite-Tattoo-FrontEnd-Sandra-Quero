import {
  createWorkAction,
  loadAllWorksAction,
  loadWorksCollectionAction,
} from "../actions/actionCreators";
import worksReducer from "./worksReducer";

describe("Given worksReducer reducer", () => {
  describe("When it receives an array and action loadWorksCollection", () => {
    test("Then it should return a new array whith the all works", () => {
      type Props = {
        works: Array<object>;
      };

      const arrayWorks = [
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

      const action: any = loadWorksCollectionAction(arrayWorks);
      const works: any = [];

      const newWorks = worksReducer(works, action);

      expect(newWorks).toEqual(arrayWorks);
    });
  });
  describe("When it receives an array and action loadAllWorks", () => {
    test("Then it should return a new array whith the all works", () => {
      type Props = {
        works: Array<object>;
      };

      const arrayWorks = [
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

      const action: any = loadAllWorksAction(arrayWorks);
      const works: any = [];

      const newWorks = worksReducer(works, action);

      expect(newWorks).toEqual(arrayWorks);
    });
  });

  describe("When it receives an object and action createWorkAction", () => {
    test("Then it should return a new array whith the new work", () => {
      const work: any = {
        tittle: "Pajaritos",
        tattooArtist: "Javi Wolf",
        description: "LoremmAfdsfas",
        tattooStyles: "Acuarela",
        likes: 0,
        image:
          "https://storage.googleapis.com/unite-tattoo.appspot.com/Acuarela-1638124122682-.png",
        collectionWork: "61a09756fe38230f0ba12827",
        id: "61a3b755afd97834ed4aca6e",
      };
      const works: any = [];
      const action: any = createWorkAction(work);

      const newWorks = worksReducer(works, action);

      expect(newWorks).toContain(work);
    });
  });

  describe("When it receives an array and action inexistent", () => {
    test("Then it should return the same array", () => {
      const action: any = "This action does not exist";
      const works: any = [];

      const newWorks = worksReducer(works, action);

      expect(newWorks).toEqual(works);
    });
  });
});
