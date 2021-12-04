import { IcollectionsActions } from "../../types/interfacesFlux";
import actionTypes from "../actions/actionTypes";

const collectionsReducer = (collections = [], action: IcollectionsActions) => {
  let newCollections;

  switch (action.type) {
    case actionTypes.loadCollections:
      newCollections = [...action.collections];
      break;

    case actionTypes.createCollection:
      newCollections = [...collections, action.collection];
      break;

    case actionTypes.deleteCollection:
      newCollections = collections.filter((collection: IcollectionsActions) => {
        collection.id !== action.id;
      });
      break;

    default:
      newCollections = collections;
  }
  return newCollections;
};

export default collectionsReducer;
