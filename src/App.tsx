import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import configureStore from "./redux/store";
import { Provider } from "react-redux";
import { MainNavigator } from "./navigation/MainNavigator";

const store = configureStore();
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </Provider>
  );
};
export default App;
