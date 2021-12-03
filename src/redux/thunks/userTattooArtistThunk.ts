import axios from "axios";
import jwtDecode from "jwt-decode";
import { tattooArtistLoginAction } from "../actions/actionCreators";

import { tokenStorage } from "../../storage/asyncStorage";

export const tattooArtistLoginTunk =
  (userTattooArtist: object) => async (dispatch: any) => {
    try {
      const response = await axios.post(
        "https://proyecto-final-sandra-back.herokuapp.com/uniteTattoo/tattooArtist/login",
        userTattooArtist
      );

      if (response.status === 200) {
        const token = response.data.token;
        const userRegistered: any = jwtDecode(token);

        dispatch(tattooArtistLoginAction(userRegistered));

        const localStorage = await tokenStorage("userRegistered", token);

        // console.log(localStorage);
      }
    } catch (error: any) {
      return error.message;
    }
  };
