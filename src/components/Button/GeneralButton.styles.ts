import { StyleSheet } from "react-native";
import { uniteTattoo } from "../../styles/uniteTatto.styles";

export default StyleSheet.create({
  button: {
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 20,
    marginTop: 20,
    padding: 20,
  },
  buttonText: {
    color: "black",
    fontSize: uniteTattoo.fontSize.textButton,
    fontWeight: "900",
    textAlign: "center",
  },
});
