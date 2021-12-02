import { StyleSheet } from "react-native";
import { fontSize, colors } from "../../styles/uniteTatto.styles";

export default StyleSheet.create({
  buttonInvited: {
    flex: 1,
  },
  buttonUniteTattoo: {
    padding: 20,
  },
  containerInvited: {
    flex: 1,
  },
  containerUsers: {
    flex: 4,
    justifyContent: "center",
  },
  imageBackground: {
    alignSelf: "stretch",
    flex: 1,
    justifyContent: "center",
  },
  invited: {
    fontSize: 30,
    textAlign: "center",
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
    flex: 1,
    padding: 20,
  },
  separator: {
    borderBottomWidth: 2,
    borderColor: colors.black,
  },
  text: {
    fontSize: 40,
    textAlign: "center",
  },
});
