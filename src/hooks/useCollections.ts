import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  collectionsThunk,
  createCollectionThunk,
} from "../redux/thunks/collectionsThunk";

export const useCollections = () => {
  const { collections } = useSelector(({ collections }: any) => ({
    collections,
  }));

  const dispatch = useDispatch();

  const loadCollections = useCallback(() => {
    dispatch(collectionsThunk());
  }, [dispatch]);

  const createCollection = (collection: object) => {
    dispatch(createCollectionThunk(collection));
  };
  return {
    collections,
    loadCollections,
    createCollection,
  };
};
