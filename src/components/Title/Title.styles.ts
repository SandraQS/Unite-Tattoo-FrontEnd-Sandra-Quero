import { StyleSheet } from "react-native";
import { fontSize, colors } from "../../styles/uniteTatto.styles";

export default StyleSheet.create({
  headerContainter: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 50,
  },

  logoContainter: {
    alignItems: "center",
    justifyContent: "center",
    left: 0,
    position: "absolute",
  },

  title: {
    color: colors.black,
    fontSize: fontSize.titleComponent,
  },

  titleBold: {
    fontWeight: "800",
  },

  titleContainter: {
    flex: 3,
    left: 30,
    position: "absolute",
  },
});
