import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  collectionsThunk,
  createCollectionThunk,
  deleteCollectionThunk,
  editCollectionThunk,
} from "../redux/thunks/collectionsThunk";
import { ICollection } from "../types/interfacesComponent";

export const useCollections = () => {
  const { collections } = useSelector(({ collections }: any) => ({
    collections,
  }));

  const dispatch = useDispatch();

  const loadCollections = useCallback(() => {
    dispatch(collectionsThunk());
  }, [dispatch]);

  const createCollection = (collection: Omit<ICollection, "id">) => {
    dispatch(createCollectionThunk(collection));
  };

  const deleteCollection = (id: string) => {
    dispatch(deleteCollectionThunk(id));
  };

  const editCollection = (collection: ICollection) => {
    dispatch(editCollectionThunk(collection));
  };

  return {
    collections,
    loadCollections,
    createCollection,
    deleteCollection,
    editCollection,
  };
};
