import { StyleSheet } from "react-native";
import { colors, fontSize } from "../../styles/uniteTatto.styles";

export default StyleSheet.create({
  allWorkList: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  mainContainer: {
    backgroundColor: colors.white,
  },
});
