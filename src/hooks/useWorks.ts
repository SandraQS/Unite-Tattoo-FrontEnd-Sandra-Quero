import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadAllWorksThunk } from "../redux/thunks/worksThunks";

export const useWorks = () => {
  const { works } = useSelector(({ works }: any) => ({
    works,
  }));
  const dispatch = useDispatch();
  const loadAllWorks = useCallback(() => {
    dispatch(loadAllWorksThunk());
  }, [dispatch]);

  return {
    works,
    loadAllWorks,
  };
};
