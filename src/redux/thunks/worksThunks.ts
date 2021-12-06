import axios from "axios";
import {
  createWorkAction,
  loadAllWorksAction,
  loadWorksCollectionAction,
} from "../actions/actionCreators";

import { REACT_APP_URL_API_UNITETATTOO } from "@env";
import { getDataObject } from "../../storage/asyncStorage";
import { IWork } from "../../types/interfacesComponent";

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

export const createWorkThunk =
  (work: Omit<IWork, "id">, idCollection: string) => async (dispatch: any) => {
    console.log("WORK", work);
    console.log("idCollection", idCollection);
    try {
      const { token } = await getDataObject("userTattooArtist");

      const response = await axios.post(
        `${REACT_APP_URL_API_UNITETATTOO}/tattooArtist/work/create/${idCollection}`,
        work,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      console.log("RESPONSE", response);

      if (response.status === 201) {
        const newWork = response.data;
        dispatch(createWorkAction(newWork));
      }
    } catch (error) {
      return error;
    }
  };
