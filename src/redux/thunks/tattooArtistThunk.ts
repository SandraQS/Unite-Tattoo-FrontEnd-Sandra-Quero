import axios from "axios";
import { registerTattooArtistAction } from "../actions/actionCreators";

const createTattooArtistThunk =
  (tattooArtist: object) => async (dispatch: any) => {
    const response = await axios.post(
      "https://proyecto-final-sandra-back.herokuapp.com/uniteTattoo/tattooArtist/register",
      tattooArtist
    );

    if (response.status === 201) {
      dispatch(registerTattooArtistAction(response));
    }
  };

export default createTattooArtistThunk;
