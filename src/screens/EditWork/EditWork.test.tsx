import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Provider } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { render } from "@testing-library/react-native";
import configureStore from "../../redux/store";
import { EditWork } from "./EditWork";

jest.mock("@react-native-async-storage/async-storage", () => ({
  setItem: jest.fn(),
  getItem: jest.fn(),
  removeItem: jest.fn(),
}));

describe("Given EditWork screen", () => {
  describe("When it's rendered", () => {
    test("Then it should show match with the last snapshot", () => {
      const store = configureStore();
      AsyncStorage.getItem = jest.fn().mockResolvedValue({ token: "algo" });
      (global as any).FormData = jest.fn().mockReturnValue({
        append: jest.fn(),
      });
      const route = {
        params: {
          collection: {
            tattooStyles: "Realista",
            image:
              "https://storage.googleapis.com/unite-tattoo.appspot.com/Realista-1638921273323-.png",
            works: [[Object]],
            id: "61aff43a77a75540f78b8449",
          },
          work: {
            tittle: "Lobos - Espalda",
            tattooArtist: "Bruno",
            description:
              "Después de un largo tiempo pude terminar esta espalda, una más para la colección 😁👌🏼👌🏼\n➕After quite a long time I was able to finish this back piece, another one!!\n\n▪️TATTOOING IN @circatattoobcn BARCELONA, SPAIN.\n\n@radiantcolorsink\n@bepantholtattoo\n@tsunami_tattoo_needles",
            tattooStyles: "Realista",
            likes: 0,
            image:
              "https://storage.googleapis.com/unite-tattoo.appspot.com/Realista-1638924401230-.png",
            collectionWork: {
              id: "61aff43a77a75540f78b8449",
            },
          },
        },
      } as any;
       const {
         params: { work, collection },
       } = route;
      new FormData();

      const screen = render(
        <Provider store={store}>
          <NavigationContainer>
            <EditWork route={route} />
          </NavigationContainer>
        </Provider>
      );

      expect(screen).toMatchSnapshot();
    });
  });
});
