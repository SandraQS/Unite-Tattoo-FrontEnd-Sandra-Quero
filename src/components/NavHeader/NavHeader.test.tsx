import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import NavHeader from "./NavHeader";

describe("Given a NavHeader component", () => {
  describe("When it is rendered", () => {
    test("Then it should show match the last snapshot", () => {
      const nameUser = "Sandra";
      const screen = render(<NavHeader nameUser={nameUser} />);

      expect(screen).toMatchSnapshot();
    });
  });

  describe("When it is click at logo", () => {
    test("Then it should call the receives function", () => {
      const nameUser = "Log Out";
      const goBack = jest.fn();

      const screen = render(<NavHeader nameUser={nameUser} goBack={goBack} />);

      const button = screen.getByRole("button");

      fireEvent.press(button);
      expect(goBack).toHaveBeenCalled();
    });
  });
});
