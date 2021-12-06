import { ItattooWorksActions } from "../../types/interfacesFlux";
import actionTypes from "../actions/actionTypes";

const worksReducer = (works = [], action: ItattooWorksActions) => {
  let newWorks;

  switch (action.type) {
    case actionTypes.loadAllWorks:
    case actionTypes.loadWorksCollection:
      newWorks = [...action.works];
      break;

   case actionTypes.createWork:
      newWorks = [...works, action.work];
      break;

    default:
      newWorks = works;
  }
  return newWorks;
};

export default worksReducer;
