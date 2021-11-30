import { StyleSheet } from "react-native";
import { uniteTattoo } from "../../styles/uniteTatto.styles";

const { color, fontSize } = uniteTattoo;
export default StyleSheet.create({
  checkbox: {},

  forms: {
    marginTop: 30,
  },

  input: {
    borderBottomColor: color.black,
    borderBottomWidth: 1,
    padding: 20,
  },
  mainContainer: {
    backgroundColor: color.mediumBrown,
    padding: 20,
  },
  text: {
    fontSize: fontSize.text,
    textAlign: "center",
  },

  tittleH2: {
    fontSize: fontSize.tittleH2,
    textAlign: "center",
  },
  welcomeContainer: {
    alignContent: "center",
    backgroundColor: color.lightBrown,
    flex: 1,
    padding: 30,
  },
});
