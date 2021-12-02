import { registerTattooArtistAction } from "../actions/actionCreators";
import tattooArtistReducer from "./tattooArtistReducer";

describe("Given tattooArtistReducer reducer", () => {
  describe("When it receives an object and action registerTattooArtistAction", () => {
    test("Then it should return a new tatooArtis", () => {
      type Props = {
        tattooArtist: object;
      };

      const tattooArtist: any = {
        personalDataTattoArtist: {
          name: "Gisela",
          surname1: "Quero",
          surname2: "Sánchez",
        },
        userDataTattoArtist: {
          userName: "ShivaShana",
          password: "hola",
          email: "email@gmail.com",
        },
        professionalDataTattooArtist: {
          studioName: "GQS",
          professionalName: "GQS",
          phone: 666666666,
          contactEmail: "otroemail@gmail.com",
          openingHours: "de 9.00 a 18.00h",
          direction: "C/hola, nº13",
          colaboration: "false",
        },
      };

      const expectnewTattooArtist = {
        personalDataTattoArtist: {
          name: "Gisela",
          surname1: "Quero",
          surname2: "Sánchez",
        },
        userDataTattoArtist: {
          userName: "ShivaShana",
          password: "hola",
          email: "email@gmail.com",
        },
        professionalDataTattooArtist: {
          studioName: "GQS",
          professionalName: "GQS",
          phone: 666666666,
          contactEmail: "otroemail@gmail.com",
          openingHours: "de 9.00 a 18.00h",
          direction: "C/hola, nº13",
          colaboration: "false",
        },
      };

      const action = registerTattooArtistAction(tattooArtist);

      const newTattooArtist = tattooArtistReducer(tattooArtist, action);

      expect(newTattooArtist).toEqual(expectnewTattooArtist);
    });
  });
});
