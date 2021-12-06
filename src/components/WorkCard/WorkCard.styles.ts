import { StyleSheet } from "react-native";
import { fontSize, colors } from "../../styles/uniteTatto.styles";

export default StyleSheet.create({
  buttonsEditDelete: {
    position: "absolute",
    right: 0,
    top: 0,
  },
  imageContainer: {
    position: "relative",
  },
  imageWork: {
    flex: 1,
    height: 350,
  },
  styleWork: {
    color: colors.darkGrey,
    fontSize: fontSize.tittleH3,
    fontWeight: "800",
    textTransform: "uppercase",
  },
  textContainer: {
    padding: 15,
  },
  textWork: {
    color: colors.darkGrey,
    fontSize: fontSize.text,
    fontWeight: "200",
  },
  titleWork: {
    color: colors.black,
    fontSize: fontSize.tittleH2,
    fontWeight: "900",
    textTransform: "uppercase",
  },
  workContainer: {
    borderColor: colors.mediumBrown,
    borderWidth: 1,
    margin: 10,
    position: "relative",
  },
});
