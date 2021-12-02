import axios from "axios";
import jwtDecode from "jwt-decode";
import { tattooArtistLoginAction } from "../actions/actionCreators";

import AsyncStorage from "@react-native-community/async-storage";
import { tokenStorage } from "../../storage/asyncStorage";

export const tattooArtistLoginTunk =
  (userTattooArtist: object) => async (dispatch: any) => {
    try {
      // console.log("HOLA???");
      const response = await axios.post(
        "https://proyecto-final-sandra-back.herokuapp.com/uniteTattoo/tattooArtist/login",
        userTattooArtist
      );
      // console.log("HOLA???", response);

      if (response.status === 200) {
        const token = response.data.token;
        const userRegistered: any = jwtDecode(token);

        dispatch(tattooArtistLoginAction(userRegistered));

        const resultado = tokenStorage("userRegistered", token);

        // console.log("ESTOQUEESSS", resultado);
      }
    } catch (error: any) {
      return error.message;
    }
  };
