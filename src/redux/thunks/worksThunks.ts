import axios from "axios";
import { loadAllWorksAction } from "../actions/actionCreators";

import { REACT_APP_URL_API_UNITETATTOO } from "@env";

export const loadAllWorksThunk = () => async (dispatch: any) => {
  const response = await axios.get(
    `${REACT_APP_URL_API_UNITETATTOO}/client/home`
  );

  if (response.status === 200) {
    dispatch(loadAllWorksAction(response.data.works));
  }
};
