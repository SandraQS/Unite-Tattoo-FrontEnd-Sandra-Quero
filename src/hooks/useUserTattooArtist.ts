import jwtDecode from "jwt-decode";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tattooArtistLoginAction } from "../redux/actions/actionCreators";
import { tattooArtistLoginTunk } from "../redux/thunks/userTattooArtistThunk";
import { getDataObject } from "../storage/asyncStorage";

export const useUserTattooArtist = () => {
  const { stateUserTattooArtist }: any = useSelector((store) => store);
  const dispatch = useDispatch();

  const tattooArtistLogin = (userTattooArtist: any) => {
    dispatch(tattooArtistLoginTunk(userTattooArtist));
  };

  const tattooArtistRegistered = useCallback(async () => {
    const { token } = await getDataObject("userTattooArtist");
    if (token) {
      const userData: object = jwtDecode(token.token);
      dispatch(tattooArtistLoginAction(userData));
    }
  }, [dispatch]);

  return {
    stateUserTattooArtist,
    tattooArtistLogin,
    tattooArtistRegistered,
  };
};
