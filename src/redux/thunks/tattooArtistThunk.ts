import axios from "axios";
import { REACT_APP_URL_API_UNITETATTOO } from "@env";

import { registerTattooArtistAction } from "../actions/actionCreators";

const createTattooArtistThunk =
  (tattooArtist: object) => async (dispatch: any) => {
    const response = await axios.post(
      `${REACT_APP_URL_API_UNITETATTOO}/tattooArtist/register`,
      tattooArtist
    );

    if (response.status === 201) {
      dispatch(registerTattooArtistAction(response));
    }
  };

export default createTattooArtistThunk;
