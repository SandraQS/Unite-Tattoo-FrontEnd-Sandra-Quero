import axios from "axios";
import {
  loadAllWorksAction,
  loadWorksCollectionAction,
} from "../actions/actionCreators";

import { REACT_APP_URL_API_UNITETATTOO } from "@env";
import { ICollection } from "../../types/interfacesComponent";
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
  (collection:ICollection) => async (dispatch: any) => {
    try {
      const { token } = await getDataObject("userTattooArtist");
      if (token) {
        const response = await axios.get(
          `${REACT_APP_URL_API_UNITETATTOO}tattooArtist/works/${collection.id}`,
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );

        console.log("RESPONSE", response);
        console.log("DATA", response.data)
        if (response.status === 200) {
          dispatch(loadWorksCollectionAction(response.data));
        }
      }
    } catch (error) {
      return error;
    }
  };
