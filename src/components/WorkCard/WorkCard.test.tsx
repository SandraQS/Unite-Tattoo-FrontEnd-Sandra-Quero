import { render } from "@testing-library/react-native";
import React from "react";
import WorkCard from "./WorkCard";
import configureStore from "../../redux/store";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";

describe("Given a WorkCard component", () => {
  describe("When it is rendered", () => {
    test("Then it should show match the last snapshot", () => {
      const store = configureStore();

      const work: any = {
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
      };
      const collection: any = {
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
        ],
      };

      const screen = render(
        <Provider store={store}>
          <NavigationContainer>
            <WorkCard key={work.id} work={work} collection={collection} />
          </NavigationContainer>
        </Provider>
      );

      expect(screen).toMatchSnapshot();
    });
  });
});
