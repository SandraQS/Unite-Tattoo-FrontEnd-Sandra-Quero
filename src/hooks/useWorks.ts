import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createWorkThunk,
  deleteWorkThunk,
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

  const createWork = (work: IWork, idCollection: string) => {
    dispatch(createWorkThunk(work, idCollection));
  };

  const deleteWork = (idWork: string, idCollection: string) => {
    dispatch(deleteWorkThunk(idWork, idCollection));
  };

  return {
    works,
    loadAllWorks,
    loadWorksCollection,
    createWork,
    deleteWork,
  };
};
