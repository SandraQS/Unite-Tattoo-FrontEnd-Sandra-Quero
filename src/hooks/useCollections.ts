import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editedCollectionAction } from "../redux/actions/actionCreators";
import {
  collectionsThunk,
  createCollectionThunk,
  deleteCollectionThunk,
  editCollectionThunk,
} from "../redux/thunks/collectionsThunk";
import { ICollection } from "../types/interfacesComponent";

export const useCollections = () => {
  const { collections, edited } = useSelector(
    ({ collections, edited }: any) => ({
      collections,
      edited,
    })
  );

  const dispatch = useDispatch();

  const loadCollections = useCallback(() => {
    dispatch(collectionsThunk());
  }, [dispatch]);

  const createCollection = (collection: Omit<ICollection, "id"> | FormData) => {
    dispatch(createCollectionThunk(collection));
  };

  const deleteCollection = (id: string) => {
    dispatch(deleteCollectionThunk(id));
  };

  const editCollection = (collection: ICollection) => {
    dispatch(editCollectionThunk(collection));
  };

  const editedCollection = (collection: ICollection) => {
    dispatch(editedCollectionAction(collection));
  };

  return {
    collections,
    loadCollections,
    createCollection,
    deleteCollection,
    editCollection,
    edited,
    editedCollection,
  };
};
