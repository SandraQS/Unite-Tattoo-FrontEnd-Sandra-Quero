import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadAllWorksThunk, loadWorksCollectionThunk } from "../redux/thunks/worksThunks";
import { ICollection } from "../types/interfacesComponent";

export const useWorks = () => {
  const { works } = useSelector(({ works }: any) => ({
    works,
  }));
  const dispatch = useDispatch();
  const loadAllWorks = useCallback(() => {
    dispatch(loadAllWorksThunk());
  }, [dispatch]);
 
  const loadWorksCollection = useCallback((collection:ICollection) => {
    dispatch(loadWorksCollectionThunk(collection));
  }, [dispatch]);

  return {
    works,
    loadAllWorks,
    loadWorksCollection
  };
};
