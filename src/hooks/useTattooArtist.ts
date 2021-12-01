import { useDispatch, useSelector } from "react-redux";
import createTattooArtistThunk from "../redux/thunks/tattooArtistThunk";

export const useTattooArtist = () => {
  const tattooArtist: any = useSelector(({ store: tattooArtist }: any) => ({
    store: tattooArtist,
  }));
  const dispatch = useDispatch();

  const tattooArtistCreate = (userTattooArtist: any) => {
    dispatch(createTattooArtistThunk(userTattooArtist));
  };
  return {
    tattooArtist,
    tattooArtistCreate,
  };
};
