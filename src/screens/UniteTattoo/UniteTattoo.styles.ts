import { StyleSheet } from "react-native";
import { colors } from "../../styles/uniteTatto.styles";

export default StyleSheet.create({
  buttonInvited: {
    flex: 1,
  },
  buttonUniteTattoo: {
    padding: 20,
  },
  containerInvited: {
    alignItems: "flex-end",
    flexDirection: "row",
    flex: 1,
  },
  containerUsers: {
    flex: 2,
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
    flex: 1,
    minHeight: "100%",
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
