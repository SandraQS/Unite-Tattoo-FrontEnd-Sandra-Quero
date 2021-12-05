import { StyleSheet } from "react-native";
import { colors, fontSize } from "./uniteTatto.styles";

export default StyleSheet.create({
  buttonCancel: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    opacity: 0.5,
    paddingTop: 10,
  },

  forms: {
    marginTop: 30,
  },

  input: {
    borderBottomColor: colors.black,
    borderBottomWidth: 1,
    padding: 20,
  },

  logo: {
    margin: 20,
  },

  logoContainter: {
    alignItems: "center",
    justifyContent: "center",
  },

  positionButtonCancel: {
    alignItems: "flex-end",
    height: 300,
  },

  text: {
    fontSize: fontSize.text,
    textAlign: "center",
  },

  textBold: {
    fontWeight: "800",
  },

  textCancel: {
    marginLeft: 5,
  },

  tittleH2: {
    fontSize: fontSize.tittleH2,
    textAlign: "center",
  },
  welcomeContainer: {
    alignContent: "center",
    backgroundColor: colors.lightBrown,
    flex: 1,
    padding: 30,
  },
});
