import { StyleSheet } from "react-native";
import { colors } from "../../styles/uniteTatto.styles";

export default StyleSheet.create({
  headerPorfile: {
    position: "relative",
  },

  imageAmbient: {
    height: 250,
    opacity: 0.5,
    width: "100%",
  },

  imageBackground: {
    height: 150,
    position: "relative",
    top: -90,
    width: 150,
  },

  imagePorfile: {
    height: 120,
    left: -20,
    position: "absolute",
    top: -20,
    transform: [{ rotateY: "0deg" }, { rotateZ: "-45deg" }],
    width: 120,
  },

  imagePorfileContainer: {
    bottom: 19,
    height: 82,
    left: 34,
    overflow: "hidden",
    position: "absolute",
    transform: [{ rotateY: "25deg" }, { rotateZ: "45deg" }],
    width: 82,
  },

  mainContainer: {
    marginTop: 20,
  },

  nameContainer: {
    bottom: 65,
    left: 150,
    position: "absolute",
  },

  nameTattooArtist: {
    fontSize: 35,
    fontWeight: "bold",
    textTransform: "uppercase",
  },

  secondName: {
    fontWeight: "300",
  },

  tattooStyle: {
    borderColor: colors.black,
    borderWidth: 2,
    marginHorizontal: 5,
    padding: 5,
    textAlign: "center",
    textTransform: "uppercase",
  },

  tattooStyleContainer: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 20,
  },

  textContainer: {
    flex: 1,
    flexDirection: "row",
  },

  texts: {
    color: colors.darkGrey,
    marginBottom: 20,
    marginLeft: 40,
  },
});
