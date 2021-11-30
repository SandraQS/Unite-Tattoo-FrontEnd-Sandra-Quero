import { ItattooArtistActions } from "../../types/interfacesFlux";
import actionTypes from "../actions/actionTypes";

const tattooArtistReducer = (
  tattooArtist = {},
  action: ItattooArtistActions
) => {
  let newTattooArtist;

  switch (action.type) {
    case actionTypes.createTattooArtist:
      newTattooArtist = { ...action.tattooArtist };
      break;

    default:
      newTattooArtist = tattooArtist;
  }

  return newTattooArtist;
};

export default tattooArtistReducer;
