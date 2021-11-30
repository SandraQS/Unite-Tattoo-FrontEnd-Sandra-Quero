import axios from "axios";
import { registerTattooArtistAction } from "../actions/actionCreators";

export const createTattooArtistThunk =
  (tattooArtist: object) => async (dispatch: any) => {
    const response = await axios.post(
      "https://proyecto-final-sandra-back.herokuapp.com/uniteTattoo/tattooArtist/register",
      tattooArtist
    );
    const newTattooArtist = response;
    if (response.status === 201) {
      dispatch(registerTattooArtistAction(newTattooArtist));
    }
  };
