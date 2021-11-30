import { useDispatch, useSelector } from "react-redux";
import createTattooArtistThunk from "../redux/thunks/tattooArtistThunk";

export const useTattooArtist = () => {
  const { tattooArtist } = useSelector(({ tattooArtist }: any) => ({
    tattooArtist,
  }));
  const dispatch = useDispatch();

  const tattooArtistCreate = (tattooArtist: any) => {
    dispatch(createTattooArtistThunk(tattooArtist));
  };
  return {
    tattooArtist,
    tattooArtistCreate,
  };
};
