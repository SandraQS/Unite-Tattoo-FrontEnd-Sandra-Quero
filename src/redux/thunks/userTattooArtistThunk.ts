import axios from "axios";
import jwtDecode from "jwt-decode";
import { tattooArtistLoginAction } from "../actions/actionCreators";

export const tattooArtistLoginTunk =
  (userTattooArtist: any) => async (dispatch: any) => {
    const response = await axios.post(
      "https://proyecto-final-sandra-back.herokuapp.com/uniteTattoo/tattooArtist/login",
      userTattooArtist
    );

    if (response.status === 200) {
      const token = response.data.token;
      const userRegistered: any = jwtDecode(token);
      dispatch(tattooArtistLoginAction(userRegistered));

      localStorage.setItem("userTattooArtis", JSON.stringify({ token: token }));
    }
  };
