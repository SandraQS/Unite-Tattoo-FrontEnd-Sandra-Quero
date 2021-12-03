import axios from "axios";
import { getDataObject } from "../../storage/asyncStorage";
import { loadCollectionsAction } from "../actions/actionCreators";

export const collectionsThunk = () => async (dispatch: any) => {
  const { token } = await getDataObject("userTattooArtist");

  const response = await axios.get(
    "https://proyecto-final-sandra-back.herokuapp.com/uniteTattoo/tattooArtist/collections",
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
