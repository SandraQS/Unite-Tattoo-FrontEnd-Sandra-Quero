import axios from "axios";
import {
  loadAllWorksAction,
  loadWorksCollectionAction,
} from "../actions/actionCreators";

import { REACT_APP_URL_API_UNITETATTOO } from "@env";
import { getDataObject } from "../../storage/asyncStorage";

export const loadAllWorksThunk = () => async (dispatch: any) => {
  try {
    const response = await axios.get(
      `${REACT_APP_URL_API_UNITETATTOO}/client/home`
    );

    if (response.status === 200) {
      dispatch(loadAllWorksAction(response.data.works));
    }
  } catch (error) {
    return error;
  }
};

export const loadWorksCollectionThunk =
  (idCollection: string) => async (dispatch: any) => {
    try {
      const { token } = await getDataObject("userTattooArtist");

      const response = await axios.get(
        `${REACT_APP_URL_API_UNITETATTOO}/tattooArtist/works/${idCollection}`,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );

      if (response.status === 200) {
        dispatch(loadWorksCollectionAction(response.data));
      }
    } catch (error) {
      return error;
    }
  };
