import axios from "axios";
import { REACT_APP_URL_API_UNITETATTOO } from "@env";

import {
  registerTattooArtistAction,
  tattooArtistPorfileAction,
} from "../actions/actionCreators";
import { getDataObject } from "../../storage/asyncStorage";

export const createTattooArtistThunk =
  (tattooArtist: object) => async (dispatch: any) => {
    try {
      const response = await axios.post(
        `${REACT_APP_URL_API_UNITETATTOO}/tattooArtist/register`,
        tattooArtist
      );

      if (response.status === 201) {
        dispatch(registerTattooArtistAction(response));
      }
    } catch (error) {
      return error;
    }
  };

export const tattooArtistPorfileThunk = () => async (dispatch: any) => {
  try {
    const { token } = await getDataObject("userTattooArtist");

    const response = await axios.get(
      `${REACT_APP_URL_API_UNITETATTOO}/tattooArtist/porfile`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );

    if (response.status === 200) {
      dispatch(tattooArtistPorfileAction(response.data));
    }
  } catch (error) {
    return error;
  }
};
