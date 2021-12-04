import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  collectionsThunk,
  createCollectionThunk,
  deleteCollectionThunk,
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

  const deleteCollection = (id: string) => {
    dispatch(deleteCollectionThunk(id));
  };
  return {
    collections,
    loadCollections,
    createCollection,
    deleteCollection,
  };
};
