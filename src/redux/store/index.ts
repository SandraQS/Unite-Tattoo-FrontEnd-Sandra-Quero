import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "remote-redux-devtools";

import rootReducer from "../reducers";

const configureStore = () => {
  const composeEnhancers = composeWithDevTools({});
  return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
};

export default configureStore;
