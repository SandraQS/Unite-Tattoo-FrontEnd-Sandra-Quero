import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import { colors } from "../../styles/uniteTatto.styles";

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
  Image,
} from "react-native";

const AllWorks = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView>
        <View>
          <Image source={require("../../assets/Uttoo-logo.svg")} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AllWorks;
