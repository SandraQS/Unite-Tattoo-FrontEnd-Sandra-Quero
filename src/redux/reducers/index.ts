import { combineReducers } from "redux";
import tattooArtistReducer from "./tattooArtistReducer";

const rootReducer = combineReducers({
  tattooArtist: tattooArtistReducer,
});

export default rootReducer;
