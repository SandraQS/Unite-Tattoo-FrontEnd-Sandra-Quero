import React from "react";
import { render } from "@testing-library/react-native";
import NavHeader from "./NavHeader";

describe("Given a NavHeader component", () => {
  describe("When it is rendered", () => {
    test("Then it should show match the last snapshot", () => {
      const nameUser = "Sandra";
      const screen = render(<NavHeader nameUser={nameUser} />);

      expect(screen).toMatchSnapshot();
    });
  });
});
