import { combineReducers } from "redux";
import tattooArtistReducer from "./tattooArtistReducer";
import worksReducer from "./worksReducer";

const rootReducer = combineReducers({
  tattooArtist: tattooArtistReducer,
  works: worksReducer,
});

export default rootReducer;
