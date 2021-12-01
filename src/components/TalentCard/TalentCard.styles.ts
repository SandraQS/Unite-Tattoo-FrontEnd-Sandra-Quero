import { StyleSheet } from "react-native";
import {
  fontSize,
  colors,
  mainContainer,
} from "../../styles/uniteTatto.styles";

export default StyleSheet.create({
  imageContainer: {
    alignContent: "center",
    borderRadius: 20,
    flex: 3,
    height: 200,
    justifyContent: "center",
    padding: 10,
  },
  imageWork: {
    borderRadius: 20,
    flex: 5,
  },
  mainContainerCard: {
    height: 300,
    width: 150,
  },
  styleSubtitle: {
    color: colors.mediumBrown,
    fontSize: 15,
  },
  talentCard: {
    backgroundColor: colors.lightBrown,
    borderRadius: 20,
    flex: 1,
    flexDirection: "column",
  },
  tattooArtistTitle: {
    color: colors.darkBrown,
    fontSize: 20,
  },
  textContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
