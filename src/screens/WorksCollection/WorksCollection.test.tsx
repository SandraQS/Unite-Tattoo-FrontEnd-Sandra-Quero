import React from "react";
import { server } from "../../mocks/server";
import { render, waitFor } from "@testing-library/react-native";
import configureStore from "../../redux/store";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import WorksCollection from "./WorksCollection";

jest.mock("@react-native-async-storage/async-storage", () => ({
  setItem: jest.fn(),
  getItem: jest.fn(),
  removeItem: jest.fn(),
}));

beforeAll(() => {
  server.listen({
    onUnhandledRequest: "warn",
  });
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

describe("Given WorksCollection screen", () => {
  describe("When it's rendered", () => {
    test("Then it should show a works list, with titlte, tattoo artist style and description", async () => {
      const store = configureStore();
      AsyncStorage.getItem = jest.fn().mockResolvedValue({ token: "algo" });

      const collection = {
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
      };
      const route = {
        params: {
          collection: {
            tattooStyles: "Realista",
            image:
              "https://storage.googleapis.com/unite-tattoo.appspot.com/Realista-1638921273323-.png",
            works: [[Object]],
            id: "61aff43a77a75540f78b8449",
          },
        },
      };
      const { params } = route;
      const toUpperCase = jest.fn();
      const textTitle = "COLECCIÓN";
      const textTitleBold = ` ${collection.tattooStyles.toUpperCase}`;

      const screen = render(
        <Provider store={store}>
          <NavigationContainer>
            <WorksCollection route={route} />
          </NavigationContainer>
        </Provider>
      );

      await waitFor(() => {
        const titleWork = screen.findByText("Lobos - Espalda");
        const tattooStyleWork = screen.findByText("Acuarela");
        const description = screen.findByText("descripción");

        expect(titleWork).not.toBeNull();
        expect(tattooStyleWork).not.toBeNull();
        expect(description).not.toBeNull();
      });
    });
  });
});
