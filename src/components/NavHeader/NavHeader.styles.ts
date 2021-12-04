import { StyleSheet } from "react-native";
import { fontSize, colors } from "../../styles/uniteTatto.styles";

export default StyleSheet.create({
  logoContainter: {},
  nameUserContainter: {},
  nameUserText: {
    color: colors.darkBrown,
    fontSize: 15,
    paddingEnd: 10,
  },

  navContainter: {
    backgroundColor: colors.white,
    borderBottomColor: colors.darkBrown,
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  userContainter: {
    alignItems: "center",
    flexDirection: "row",
  },
});
