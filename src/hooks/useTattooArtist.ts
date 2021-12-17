import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createTattooArtistThunk,
  tattooArtistPorfileThunk,
} from "../redux/thunks/tattooArtistThunk";

export const useTattooArtist = () => {
  const { tattooArtist } = useSelector(({ tattooArtist }: any) => ({
    tattooArtist,
  }));
  const dispatch = useDispatch();

  const tattooArtistCreate = (userTattooArtist: any) => {
    dispatch(createTattooArtistThunk(userTattooArtist));
  };

  const tattooArtistPorfile = useCallback(() => {
    dispatch(tattooArtistPorfileThunk());
  }, [dispatch]);

  return {
    tattooArtist,
    tattooArtistCreate,
    tattooArtistPorfile,
  };
};
