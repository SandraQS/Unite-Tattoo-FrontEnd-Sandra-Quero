import { StyleSheet } from "react-native";
import { colors } from "./colors.styles";

export default StyleSheet.create({
  containerError: {
    borderBottomColor: colors.secondary,
    borderBottomWidth: 1,
    borderTopColor: colors.secondary,
    borderTopWidth: 1,
    marginTop: 10,
  },
  errorMessage: {
    color: colors.secondary,
    fontWeight: "800",
    margin: 5,
    opacity: 0.7,
    textAlign: "center",
    textTransform: "uppercase",
  },

  mainContainerGeneral: {
        marginBottom: 100,
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
