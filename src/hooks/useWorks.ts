import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createWorkThunk,
  loadAllWorksThunk,
  loadWorksCollectionThunk,
} from "../redux/thunks/worksThunks";
import { IWork } from "../types/interfacesComponent";

export const useWorks = () => {
  const { works } = useSelector(({ works }: any) => ({
    works,
  }));
  const dispatch = useDispatch();
  const loadAllWorks = useCallback(() => {
    dispatch(loadAllWorksThunk());
  }, [dispatch]);

  const loadWorksCollection = useCallback(
    (idCollection: string) => {
      dispatch(loadWorksCollectionThunk(idCollection));
    },
    [dispatch]
  );

  const createWork = (work: any, idCollection: string) => {
    dispatch(createWorkThunk(work, idCollection));
  };

  return {
    works,
    loadAllWorks,
    loadWorksCollection,
    createWork,
  };
};
