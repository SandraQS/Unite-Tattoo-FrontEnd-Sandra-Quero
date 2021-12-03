import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { collectionsThunk } from "../redux/thunks/collectionsThunk";

export const useCollections = () => {
  const { collections } = useSelector(({ collections }: any) => ({
    collections,
  }));

  const dispatch = useDispatch();

  const loadCollections = useCallback(() => {
    dispatch(collectionsThunk());
  }, [dispatch]);

  return {
    collections,
    loadCollections,
  };
};
