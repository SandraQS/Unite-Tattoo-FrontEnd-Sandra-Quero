import { useDispatch, useSelector } from "react-redux";
import { tattooArtistLoginTunk } from "../redux/thunks/userTattooArtistThunk";

export const useUserTattooArtist = () => {
  const { stateUserTattooArtist }: any = useSelector((store) => store);
  const dispatch = useDispatch();

  const tattooArtistLogin = (userTattooArtist: any) => {
    dispatch(tattooArtistLoginTunk(userTattooArtist));
  };

  return {
    stateUserTattooArtist,
    tattooArtistLogin,
  };
};
