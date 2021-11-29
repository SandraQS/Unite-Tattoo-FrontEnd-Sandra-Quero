import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView, ScrollView, StatusBar, Text, View } from "react-native";

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView>
        <StatusBar />
        <ScrollView>
          <View>
            <Text>WOWOWOWOWOWOWOW!!!! FUNCIONAAAA</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </NavigationContainer>
  );
};
export default App;
