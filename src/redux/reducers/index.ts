import { combineReducers } from "redux";
import tattooArtistReducer from "./tattooArtistReducer";
import userTattooArtistReducer from "./userTattooArtistReducer";
import worksReducer from "./worksReducer";

const rootReducer = combineReducers({
  tattooArtist: tattooArtistReducer,
  works: worksReducer,
  stateUserTattooArtist: userTattooArtistReducer,
});

export default rootReducer;
