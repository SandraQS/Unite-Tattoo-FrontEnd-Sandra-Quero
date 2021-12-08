import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "remote-redux-devtools";
import rootReducer from "../reducers";

export default (initialState?: any) => {
  const composeEnhancers = composeWithDevTools({
    realtime: true,
    hostname: "localhost",
    port: 8081,
  });
  return createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(thunk))
  );
};
