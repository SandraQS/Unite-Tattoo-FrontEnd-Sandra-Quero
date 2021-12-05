import {
  createCollectionAction,
  deleteCollectionAction,
  editCollectionAction,
  loadCollectionsAction,
} from "../actions/actionCreators";
import collectionsReducer from "./collectionsReducer";

describe("Given collectionsReducer reducer", () => {
  describe("When it receives an array and action loadCollectionsAction", () => {
    test("Then it should return a new array whith the all collections", () => {
      const arrayCollections: any = [
        {
          tattooStyles: "Acuarela",
          image:
            "https://storage.googleapis.com/unite-tattoo.appspot.com/Acuarela-1638104950642-.png",
          works: [
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
          ],
          id: "61a37f78b0e47a2b50e4635b",
        },
        {
          tattooStyles: "Fine Line",
          image:
            "https://storage.googleapis.com/unite-tattoo.appspot.com/Fine Line-1638105044539-.png",
          works: [],
          id: "61a37fd5b0e47a2b50e46363",
        },
      ];
      const collections: any = [];
      const action: any = loadCollectionsAction(arrayCollections);

      const newCollections = collectionsReducer(collections, action);

      expect(newCollections).toEqual(arrayCollections);
    });
  });

  describe("When it receives an object and action createCollectionsAction", () => {
    test("Then it should return a new array whith the new collection", () => {
      const collection: any = {
        tattooStyles: "Acuarela",
        image:
          "https://storage.googleapis.com/unite-tattoo.appspot.com/Acuarela-1638104950642-.png",
      };
      const collections: any = [];
      const action: any = createCollectionAction(collection);

      const newCollections = collectionsReducer(collections, action);

      expect(newCollections).toContain(collection);
    });
  });

  describe("When it receives an id and action deleteCollectionsAction", () => {
    test("Then it should return a new array whithout the collection with this id", () => {
      const collection: any = {
        tattooStyles: "Acuarela",
        image:
          "https://storage.googleapis.com/unite-tattoo.appspot.com/Acuarela-1638104950642-.png",
        id: "2",
      };
      const collections: any = [
        {
          tattooStyles: "Acuarela",
          image:
            "https://storage.googleapis.com/unite-tattoo.appspot.com/Acuarela-1638104950642-.png",
          works: [],
          id: "1",
        },
        {
          tattooStyles: "Fine Line",
          image:
            "https://storage.googleapis.com/unite-tattoo.appspot.com/Fine Line-1638105044539-.png",
          works: [],
          id: "2",
        },
      ];
      const id: any = "2";
      const action: any = deleteCollectionAction(id);

      const newCollections = collectionsReducer(collections, action);

      expect(newCollections).not.toContain(collection);
    });
  });

  describe("When it receives an object and action editCollectionAction", () => {
    test("Then it should return a new array with the collection modified", () => {
      const collection: any = {
        tattooStyles: "Titulo Modificado",
        image:
          "https://storage.googleapis.com/unite-tattoo.appspot.com/Acuarela-1638104950642-.png",
        works: [],
        id: "2",
      };
      const collections: any = [
        {
          tattooStyles: "Acuarela",
          image:
            "https://storage.googleapis.com/unite-tattoo.appspot.com/Acuarela-1638104950642-.png",
          works: [],
          id: "1",
        },
        {
          tattooStyles: "Fine Line",
          image:
            "https://storage.googleapis.com/unite-tattoo.appspot.com/Fine Line-1638105044539-.png",
          works: [],
          id: "2",
        },
      ];
      const expectedCollection: any = [
        {
          tattooStyles: "Acuarela",
          image:
            "https://storage.googleapis.com/unite-tattoo.appspot.com/Acuarela-1638104950642-.png",
          works: [],
          id: "1",
        },
        {
          tattooStyles: "Titulo Modificado",
          image:
            "https://storage.googleapis.com/unite-tattoo.appspot.com/Acuarela-1638104950642-.png",
          works: [],
          id: "2",
        },
      ];
      const action: any = editCollectionAction(collection);

      const newCollections = collectionsReducer(collections, action);

      expect(newCollections).toEqual(expectedCollection);
    });
  });

  describe("When it receives an array and action inexistent", () => {
    test("Then it should return the same array", () => {
      const action: any = "This action does not exist";
      const collections: any = [];

      const newCollections = collectionsReducer(collections, action);

      expect(newCollections).toEqual(collections);
    });
  });
});
