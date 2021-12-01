import axios from "axios";
import { loadAllWorksAction } from "../actions/actionCreators";

export const loadAllWorksThunk = () => async (dispatch: any) => {
  const response = await axios.get(
    "https://proyecto-final-sandra-back.herokuapp.com/uniteTattoo/client/home"
  );

  if (response.status === 200) {
    dispatch(loadAllWorksAction(response.data));
  }
};
