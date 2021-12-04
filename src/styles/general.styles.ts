import { StyleSheet } from "react-native";
import { colors } from "./colors.styles";

export default StyleSheet.create({
  mainContainerGeneral: {
    marginTop: 80,
    padding: 20,
  },

  navHeader: {
    left: 0,
    position: "absolute",
    right: 0,
    top: 0,
    zIndex: 1,
  },
  screenLightBrown: {
    backgroundColor: colors.lightBrown,
    flex: 1,
  },
  screenMediumBrown: {
    backgroundColor: colors.mediumBrown,
    flex: 1,
  },
  screenWhite: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
