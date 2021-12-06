import React from "react";
import { server } from "../../mocks/server";
import { fireEvent, render } from "@testing-library/react-native";
import AllWorks from "../AllWorks/AllWorks";
import configureStore from "../../redux/store";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { MainNavigator } from "../../navigation/MainNavigator";
import CollectionsTattooArtist from "./CollectionsTattooArtist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CollectionCard from "../../components/CollectionCard/CollectionCard";

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});

const mockReturnValues: any = {
  token: JSON.stringify("token"),
};

jest.mock("@react-native-async-storage/async-storage", () => ({
  setItem: jest.fn(() => {
    return new Promise((resolve) => {
      resolve(null);
    });
  }),
  multiSet: jest.fn(() => {
    return new Promise((resolve) => {
      resolve(null);
    });
  }),
  getItem: jest.fn((key) => {
    return new Promise((resolve) => {
      if (mockReturnValues[key]) {
        resolve(mockReturnValues[key]);
      } else {
        resolve(null);
      }
    });
  }),
  removeItem: jest.fn(() => {
    return new Promise((resolve) => {
      resolve(null);
    });
  }),
}));

describe("Given AllWorks screen", () => {
  describe("When the user click at image collection", () => {
    //////==>>>>> REVISARRR!!!!!<<<<<====
    test("Then it should go to works and show works of that collection", async () => {
      const store = configureStore();

      const screen = render(
        <Provider store={store}>
          <NavigationContainer>
            <CollectionsTattooArtist />
          </NavigationContainer>
        </Provider>
      );

      const cardCollection = await screen.getByRole("button");
      const onPressCollection = jest.fn();
      fireEvent.press(cardCollection);

      expect(cardCollection).not.toBeNull();
      expect(onPressCollection).toHaveBeenCalled();

      const titleWork = await screen.getByText("Lobo");
      const tattoStyle = await screen.getByText("Realista");

      expect(titleWork).not.toBeNull();
      expect(tattoStyle).not.toBeNull();
    });

    //////==>>>>> REVISARRR!!!!!<<<<<====
    test("NO FUNCIONAAAAA", async () => {
      const store = configureStore();
      const collection: any = {
        tattooStyles: "Fine Line",
        image:
          "https://storage.googleapis.com/unite-tattoo.appspot.com/Fine Line-1638105044539-.png",
        works: [
          {
            tittle: "Lobo",
            tattooArtist: "Javi Wolff",
            description: "Otro tatoo artist",
            tattooStyles: "Realista",
            likes: 0,
            image:
              "https://logiabarcelona.com/wp-content/uploads/2019/05/tatuaje_espalda_color_flor_cara_mujer_logia_barcelona_lincoln_lima.jpg",
            collectionWork: "61a37fd5b0e47a2b50e46363",
            id: "61ad1c16e0ac2f441146c6bc",
          },
        ],
        id: "61a37fd5b0e47a2b50e46363",
      };
      const functionGoWorks: any = jest.fn();
      const functionGoEdit: any = jest.fn();

      const screen = render(
        <Provider store={store}>
          <NavigationContainer>
            <CollectionCard
              key={collection.id}
              collection={collection}
              functionGoWorks={functionGoWorks}
              functionGoEdit={functionGoEdit}
            />
          </NavigationContainer>
        </Provider>
      );

      const cardCollection = await screen.getByRole("button");
      const onPressCollection = jest.fn();
      fireEvent.press(cardCollection);

      expect(cardCollection).not.toBeNull();
      expect(onPressCollection).toHaveBeenCalled();

      const titleWork = await screen.getByText("Lobo");
      const tattoStyle = await screen.getByText("Realista");

      expect(titleWork).not.toBeNull();
      expect(tattoStyle).not.toBeNull();
    });
  });
});
