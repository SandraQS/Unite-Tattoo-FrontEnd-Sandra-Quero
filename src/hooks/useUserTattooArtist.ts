import jwtDecode from "jwt-decode";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  tattooArtistLoginAction,
  tattooArtistLogOutAction,
  tattooArtistRegisteredAction,
} from "../redux/actions/actionCreators";
import { tattooArtistLoginTunk } from "../redux/thunks/userTattooArtistThunk";
import { getDataObject, removeStorage } from "../storage/asyncStorage";

export const useUserTattooArtist = () => {
  const { stateUserTattooArtist }: any = useSelector((store) => store);
  const dispatch = useDispatch();

  const tattooArtistLogin = (userTattooArtist: any) => {
    dispatch(tattooArtistLoginTunk(userTattooArtist));
  };

  const tattooArtistRegistered = useCallback(async () => {
    try {
      const { token } = await getDataObject("userTattooArtist");
      if (token) {
        const userData: object = jwtDecode(token);

        dispatch(tattooArtistRegisteredAction(userData));
      }
    } catch (error) {
      return error;
    }
  }, [dispatch]);

  const tattooArtistLogOut = useCallback(async () => {
    try {
       const userLogout = await removeStorage("userTattooArtist");
       if(!userLogout){
         dispatch(tattooArtistLogOutAction());
       }
      
    } catch (error) {
      return error;
    }
  }, [dispatch]);

  return {
    stateUserTattooArtist,
    tattooArtistLogin,
    tattooArtistRegistered,
    tattooArtistLogOut,
  };
};
