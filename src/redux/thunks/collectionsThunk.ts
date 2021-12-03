import axios from "axios";
import { REACT_APP_URL_API_UNITETATTOO } from "@env";

import { getDataObject } from "../../storage/asyncStorage";
import { createCollectionAction, loadCollectionsAction } from "../actions/actionCreators";

export const collectionsThunk = () => async (dispatch: any) => {
  const { token } = await getDataObject("userTattooArtist");
 
  try{
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

    }catch(error){
      return
    }
};

export const createCollectionThunk = (collection:object)=>async(dispatch: any)=>{
  const { token } = await getDataObject("userTattooArtist");

  try{
    const response = await axios.post(
      `${REACT_APP_URL_API_UNITETATTOO}/tattooArtist/collection/create`,
      collection,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );

    if (response.status === 200){
      const newCollection = response.data.collection;
      dispatch(createCollectionAction(newCollection))
    }

  }catch(error){
      return
    }
}
