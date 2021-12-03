import axios from "axios";
import { REACT_APP_URL_API_UNITETATTOO } from "@env";

import { getDataObject } from "../../storage/asyncStorage";
import { loadCollectionsAction } from "../actions/actionCreators";

export const collectionsThunk = () => async (dispatch: any) => {
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
    dispatch(loadCollectionsAction(response.data.tattooArtistUser.collections));
  }
};
