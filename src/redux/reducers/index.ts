import { combineReducers } from "redux";
import collectionsReducer from "./collectionsReducer";
import editedReducer from "./editedReducer";
import tattooArtistReducer from "./tattooArtistReducer";
import userTattooArtistReducer from "./userTattooArtistReducer";
import worksReducer from "./worksReducer";

const rootReducer = combineReducers({
  tattooArtist: tattooArtistReducer,
  works: worksReducer,
  stateUserTattooArtist: userTattooArtistReducer,
  collections: collectionsReducer,
  edited: editedReducer,
});

export default rootReducer;
