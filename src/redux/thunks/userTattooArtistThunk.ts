import axios from "axios";
import jwtDecode from "jwt-decode";
import { REACT_APP_URL_API_UNITETATTOO } from "@env";

import { tattooArtistLoginAction } from "../actions/actionCreators";

import { tokenStorage } from "../../storage/asyncStorage";

export const tattooArtistLoginTunk =
  (userTattooArtist: object) => async (dispatch: any) => {
    try {
      const response = await axios.post(
        `${REACT_APP_URL_API_UNITETATTOO}/tattooArtist/login`,
        userTattooArtist
      );

      if (response.status === 200) {
        const token = response.data.token;
        const userRegistered: any = jwtDecode(token);
        const newToken = { token: token };

        dispatch(tattooArtistLoginAction(userRegistered.idUser));

        await tokenStorage("userTattooArtist", newToken);
      }
    } catch (error: any) {
      return error.message;
    }
  };
