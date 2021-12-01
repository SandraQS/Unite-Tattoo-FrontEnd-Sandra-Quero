import { combineReducers } from "redux";
import tattooArtistReducer from "./tattooArtistReducer";
import worksReducer from "./worksREducer";

const rootReducer = combineReducers({
  tattooArtist: tattooArtistReducer,
  work: worksReducer,
});

export default rootReducer;
