import React from "react";
import { server } from "../../mocks/server";
import { render, waitFor } from "@testing-library/react-native";
import configureStore from "../../redux/store";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import CollectionsTattooArtist from "./CollectionsTattooArtist";
import AsyncStorage from "@react-native-async-storage/async-storage";
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

describe("Given CollectionsTattoArtist screen", () => {
  describe("When it's rendered", () => {
    test("Then it should show a button card, with titlte of tattoo artist style", async () => {
      const store = configureStore();
      AsyncStorage.getItem = jest.fn().mockResolvedValue({ token: "algo" });

      const screen = render(
        <Provider store={store}>
          <NavigationContainer>
            <CollectionsTattooArtist />
          </NavigationContainer>
        </Provider>
      );

      await waitFor(() => {
        const cardCollection = screen.queryByTestId("collectionCardButton");
        const titleWork = screen.queryByText("MIS COLECCIONES");
        const tattoStyle = screen.queryByText("Acuarela");

        expect(cardCollection).not.toBeNull();
        expect(titleWork).not.toBeNull();
        expect(tattoStyle).not.toBeNull();
      });
    });

    // //////==>>>>> REVISARRR!!!!!<<<<<====
    // test("NO FUNCIONAAAAA", async () => {
    //   const store = configureStore();
    //   const collection: any = {
    //     tattooStyles: "Fine Line",
    //     image:
    //       "https://storage.googleapis.com/unite-tattoo.appspot.com/Fine Line-1638105044539-.png",
    //     works: [
    //       {
    //         tittle: "Lobo",
    //         tattooArtist: "Javi Wolff",
    //         description: "Otro tatoo artist",
    //         tattooStyles: "Realista",
    //         likes: 0,
    //         image:
    //           "https://logiabarcelona.com/wp-content/uploads/2019/05/tatuaje_espalda_color_flor_cara_mujer_logia_barcelona_lincoln_lima.jpg",
    //         collectionWork: "61a37fd5b0e47a2b50e46363",
    //         id: "61ad1c16e0ac2f441146c6bc",
    //       },
    //     ],
    //     id: "61a37fd5b0e47a2b50e46363",
    //   };
    //   const functionGoWorks: any = jest.fn();
    //   const functionGoEdit: any = jest.fn();

    //   const screen = render(
    //     <Provider store={store}>
    //       <NavigationContainer>
    //         <CollectionCard
    //           key={collection.id}
    //           collection={collection}
    //           functionGoWorks={functionGoWorks}
    //           functionGoEdit={functionGoEdit}
    //         />
    //       </NavigationContainer>
    //     </Provider>
    //   );

    //   const cardCollection = await screen.getByRole("button");
    //   const onPressCollection = jest.fn();
    //   fireEvent.press(cardCollection);

    //   expect(cardCollection).not.toBeNull();
    //   expect(onPressCollection).toHaveBeenCalled();

    //   const titleWork = await screen.getByText("Lobo");
    //   const tattoStyle = await screen.getByText("Realista");

    //   expect(titleWork).not.toBeNull();
    //   expect(tattoStyle).not.toBeNull();
    // });
  });
});
