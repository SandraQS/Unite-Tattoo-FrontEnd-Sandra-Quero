import { ItattooWorksActions } from "../../types/interfacesFlux";
import actionTypes from "../actions/actionTypes";

const worksReducer = (works = [], action: ItattooWorksActions) => {
  let newWorks;

  switch (action.type) {
    case actionTypes.loadAllWorks:
      newWorks = [...action.works];
      break;

    default:
      newWorks = works;
  }
  return newWorks;
};

export default worksReducer;
