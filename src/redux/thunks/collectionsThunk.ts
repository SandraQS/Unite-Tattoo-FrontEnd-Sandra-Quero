import axios from "axios";
import { REACT_APP_URL_API_UNITETATTOO } from "@env";

import { getDataObject } from "../../storage/asyncStorage";
import {
  createCollectionAction,
  deleteCollectionAction,
  editCollectionAction,
  loadCollectionsAction,
} from "../actions/actionCreators";
import { ICollection } from "../../types/interfacesComponent";

export const collectionsThunk = () => async (dispatch: any) => {
  try {
    const { token } = await getDataObject("userTattooArtist");

    const response = await axios.get(
      `${REACT_APP_URL_API_UNITETATTOO}/tattooArtist/collections`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );

    if (response.status === 200) {
      dispatch(
        loadCollectionsAction(response.data.tattooArtistUser.collections)
      );
    }
  } catch (error) {
    return error;
  }
};

export const createCollectionThunk =
  (collection: Omit<ICollection, "id">) => async (dispatch: any) => {
    try {
      const { token } = await getDataObject("userTattooArtist");

      const response = await axios.post(
        `${REACT_APP_URL_API_UNITETATTOO}/tattooArtist/collection/create`,
        collection,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      if (response.status === 201) {
        const newCollection = response.data;
        dispatch(createCollectionAction(newCollection));
      }
    } catch (error) {
      return error;
    }
  };

export const deleteCollectionThunk = (id: string) => async (dispatch: any) => {
  try {
    const { token } = await getDataObject("userTattooArtist");

    const response = await axios.delete(
      `${REACT_APP_URL_API_UNITETATTOO}/tattooArtist/collection/delete/${id}`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    if (response.status === 200) {
      dispatch(deleteCollectionAction(id));
    }
  } catch (error) {
    return error;
  }
};

export const editCollectionThunk =
  (collection: ICollection) => async (dispatch: any) => {
    try {
      const { token } = await getDataObject("userTattooArtist");

      const response = await axios.put(
        `${REACT_APP_URL_API_UNITETATTOO}/tattooArtist/collection/edit/${collection.id}`,
        collection,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      if (response.status === 200) {
        const newCollection = response.data;
        dispatch(editCollectionAction(newCollection));
      }
    } catch (error) {
      return error;
    }
  };
