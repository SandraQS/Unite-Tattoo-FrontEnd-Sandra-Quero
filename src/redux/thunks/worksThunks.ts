import axios from "axios";
import {
  createWorkAction,
  deleteWorkAction,
  editWorkAction,
  loadAllWorksAction,
  loadWorksCollectionAction,
} from "../actions/actionCreators";

import { REACT_APP_URL_API_UNITETATTOO } from "@env";
import { getDataObject } from "../../storage/asyncStorage";
import { IWork } from "../../types/interfacesComponent";
import { response } from "msw";

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
  (work: Omit<IWork, "id"> | FormData, idCollection: string) =>
  async (dispatch: any) => {
    try {
      const { token } = await getDataObject("userTattooArtist");
      const response = await axios.post(
        `${REACT_APP_URL_API_UNITETATTOO}/tattooArtist/work/create/${idCollection}`,
        work,
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status === 201) {
        const newWork = response.data;
        dispatch(createWorkAction(newWork));
      }
    } catch (error) {
      return error;
    }
  };

export const deleteWorkThunk = (idWork: string) => async (dispatch: any) => {
  try {
    const { token } = await getDataObject("userTattooArtist");

    const response = await axios.delete(
      `${REACT_APP_URL_API_UNITETATTOO}/tattooArtist/work/delete/${idWork}`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    if (response.status === 200) {
      dispatch(deleteWorkAction(idWork));
    }
  } catch (error) {
    return error;
  }
};

export const editWorkThunk =
  (work: IWork | any, idWork: string) => async (dispatch: any) => {
    try {
      const { token } = await getDataObject("userTattooArtist");

      const response = await axios.put(
        `${REACT_APP_URL_API_UNITETATTOO}/tattooArtist/work/edit/${idWork}`,
        work,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      if (response.status === 202) {
        const newWork = response.data;
        dispatch(editWorkAction(newWork));
      }
    } catch (error) {
      return error;
    }
  };
