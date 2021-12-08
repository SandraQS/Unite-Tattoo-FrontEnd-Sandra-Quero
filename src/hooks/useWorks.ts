import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createWorkThunk,
  deleteWorkThunk,
  editWorkThunk,
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

  const deleteWork = (idWork: string) => {
    dispatch(deleteWorkThunk(idWork));
  };

  const editWork = (work: IWork) => {
    dispatch(editWorkThunk(work));
  };

  return {
    works,
    loadAllWorks,
    loadWorksCollection,
    createWork,
    deleteWork,
    editWork,
  };
};
