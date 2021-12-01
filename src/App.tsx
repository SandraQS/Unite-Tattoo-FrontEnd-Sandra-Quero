import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { BottomNavigator } from "./navigation/BottomNavigator";
import configureStore from "./redux/store";
import { Provider } from "react-redux";

const store = configureStore();
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomNavigator />
      </NavigationContainer>
    </Provider>
  );
};
export default App;
