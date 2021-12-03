import { IcollectionsActions } from "../../types/interfacesFlux";
import actionTypes from "../actions/actionTypes";

const collectionsReducer = (collections = [], action: IcollectionsActions) => {
  let newCollections;

  switch (action.type) {
    case actionTypes.loadCollections:
      newCollections = [...action.collections];
      break;

    default:
      newCollections = collections;
  }
  return newCollections;
};

export default collectionsReducer;
