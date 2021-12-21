import {
  tattooArtistLoginAction,
  tattooArtistLogOutAction,
  tattooArtistRegisteredAction,
} from "../actions/actionCreators";
import userTattooArtistReducer from "./userTattooArtistReducer";

describe("Given stateUserTattooArtist reducer", () => {
  describe("When it receives a new object and a action tattooArtistLogin", () => {
    test("Then it should return isAuth in true and the dataUser login", () => {
      const tattooArtist = {
        email: "email@gmail.com",
        password: "hola",
      };

      // eslint-disable-next-line object-curly-spacing
      const stateUserTattooArtist = { isAuth: false, userTattooArtist: {} };
      const newstateUserTattooArtist = {
        isAuth: true,
        userTattooArtist: tattooArtist,
      };

      const action = tattooArtistLoginAction(tattooArtist);

      const newTattooArtist = userTattooArtistReducer(
        stateUserTattooArtist,
        action
      );

      expect(newTattooArtist).toEqual(newstateUserTattooArtist);
    });
  });

  describe("When it receives a new object and a action tattooArtistRegistered", () => {
    test("Then it should return isAuth in true and the dataUser login", () => {
      const tattooArtist = {
        email: "email@gmail.com",
        password: "hola",
      };

      // eslint-disable-next-line object-curly-spacing
      const stateUserTattooArtist = { isAuth: false, userTattooArtist: {} };
      const newstateUserTattooArtist = {
        isAuth: true,
        userTattooArtist: tattooArtist,
      };

      const action = tattooArtistRegisteredAction(tattooArtist);

      const newTattooArtist = userTattooArtistReducer(
        stateUserTattooArtist,
        action
      );

      expect(newTattooArtist).toEqual(newstateUserTattooArtist);
    });
  });

  describe("When it receives an action tattooArtistLogOutAction", () => {
    test("Then it should return a isAuth in false and useTattoArtist empty", () => {
      const tattooArtist: any = {
        isAuth: true,
        userTattooArtist: {
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
        },
      };

      const expectTattooArtist: any = {
        isAuth: false,
        userTattooArtist: {},
      };
      const action: any = tattooArtistLogOutAction();

      const newTattooArtist = userTattooArtistReducer(tattooArtist, action);

      expect(newTattooArtist).toEqual(expectTattooArtist);
    });
  });

  describe("When it receives an onbect and action inexistent", () => {
    test("Then it should return the same onject", () => {
      const action: any = "This action does not exist";
      // eslint-disable-next-line object-curly-spacing
      const stateUserTattooArtist = { isAuth: false, userTattooArtist: {} };

      const newTattooArtist = userTattooArtistReducer(
        stateUserTattooArtist,
        action
      );

      expect(newTattooArtist).toEqual(stateUserTattooArtist);
    });
  });
});
