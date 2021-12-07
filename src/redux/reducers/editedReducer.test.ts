import {
  editedCollectionAction,
  registerTattooArtistAction,
  tattooArtistLogOutAction,
} from "../actions/actionCreators";
import editedReducer from "./editedReducer";
import tattooArtistReducer from "./tattooArtistReducer";

describe("Given editedReducer reducer", () => {
  describe("When it receives an object and action editedCollectionAction", () => {
    test("Then it should return a new object", () => {
      const edited: any = {};
      const editedCollection: any = {
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
      };

      const action: any = editedCollectionAction(editedCollection);

      const newEdited = editedReducer(edited, action);

      expect(newEdited).toEqual(editedCollection);
    });
  });

  describe("When it receives an onbect and action inexistent", () => {
    test("Then it should return the same onject", () => {
      const action: any = "This action does not exist";
      const edited: any = {};
      const newEdited = tattooArtistReducer(edited, action);

      expect(newEdited).toEqual(edited);
    });
  });
});
