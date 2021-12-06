import { StyleSheet } from "react-native";
import { colors, fontSize } from "../../styles/uniteTatto.styles";

export default StyleSheet.create({
  button: {
    backgroundColor: colors.mediumBrown,
    borderBottomColor: colors.lightBrown,
    borderBottomWidth: 2,

    borderRadius: 5,
    width: 80,
  },
  buttonText: {
    color: colors.lightBrown,
    fontSize: fontSize.text,
    padding: 5,
    textAlign: "center",
  },
  buttonsContain: {
    alignItems: "center",
  },
});
