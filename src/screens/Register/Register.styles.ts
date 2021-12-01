import { StyleSheet } from "react-native";
import { colors, fontSize } from "../../styles/uniteTatto.styles";

export default StyleSheet.create({
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
  mainContainer: {
    backgroundColor: colors.mediumBrown,
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
    backgroundColor: colors.lightBrown,
    flex: 1,
    padding: 30,
  },
});
