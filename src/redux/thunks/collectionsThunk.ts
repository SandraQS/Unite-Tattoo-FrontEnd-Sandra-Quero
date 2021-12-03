import axios from "axios";
// import AsyncStorage from "@react-native-community/async-storage";
import { loadCollectionsAction } from "../actions/actionCreators";

// const getData = async (keyToken: string) => {
//   try {
//     const userData = await AsyncStorage.getItem(keyToken);
//     if (userData !== null) {
//       return userData;
//     }
//   } catch ({ message }) {
//     return message;
//   }
// };

export const collectionsThunk = () => async (dispatch: any) => {
  // const token = getData("userTattooArtist");
  const token = "PENDIENTE FUNCION DE LA LINEA 17";
  const response = await axios.get(
    "https://proyecto-final-sandra-back.herokuapp.com/uniteTattoo/tattooArtist/collections",
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );

  if (response.status === 200) {
    dispatch(loadCollectionsAction(response.data.collections));
  }
};
