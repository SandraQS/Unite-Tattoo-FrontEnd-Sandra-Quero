import { useNavigation } from "@react-navigation/core";
import React from "react";
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
} from "react-native";

const Prueba = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView>
        <View>
          <Text>Estamos en la homeee</Text>
          <Text>WOWOWOWOWOWOWOW!!!! FUNCIONAAAAAAAA</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Prueba;
