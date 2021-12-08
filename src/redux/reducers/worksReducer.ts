import { IWork } from "../../types/interfacesComponent";
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

    case actionTypes.deleteWork:
      newWorks = works.filter((work: IWork) => work.id !== work.id);
      break;

    case actionTypes.editWork:
      newWorks = works.map((work: IWork) =>
        work.id === action.work.id ? { ...action.work } : work
      );
      break;

    default:
      newWorks = works;
  }
  return newWorks;
};

export default worksReducer;
