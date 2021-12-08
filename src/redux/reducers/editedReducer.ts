import actionTypes from "../actions/actionTypes";

const editedReducer = (edited = {}, action: any) => {
  let newEdited;

  switch (action.type) {
    case actionTypes.editedCollection:
      newEdited = { ...action.collection };
      break;

    default:
      newEdited = edited;
  }

  return newEdited;
};

export default editedReducer;
