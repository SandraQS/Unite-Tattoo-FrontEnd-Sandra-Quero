import { StyleSheet } from "react-native";
import { colors } from "../../styles/uniteTatto.styles";

export default StyleSheet.create({
  buttons: {
    position: "absolute",
    right: 0,
    top: 0,
  },

  collectionCard: {
    backgroundColor: colors.lightBrown,
    borderRadius: 20,
    flex: 1,
    flexDirection: "column",
    margin: 5,
    padding: 10,
    position: "relative",
  },

  imageCollection: {
    borderRadius: 20,
    flex: 5,
  },

  imageContainer: {
    alignContent: "center",
    borderRadius: 20,
    flex: 5,
    height: 200,
    justifyContent: "center",
  },

  mainContainerCard: {
    height: 300,
    width: 170,
  },

  styleTitle: {
    color: colors.darkBrown,
    fontSize: 20,
    fontWeight: "800",
  },
  textContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
