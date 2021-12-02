import { IUserDataTattooArtistActions } from "../../types/interfacesFlux";
import actionTypes from "../actions/actionTypes";

const userTattooArtistReducer = (
  stateUserTattooArtist = { isAuth: false, userTattooArtist: {}},
  action: IUserDataTattooArtistActions
) => {
  let newstateUserTattooArtist;

  switch (action.type) {
    case actionTypes.tattooArtistLogin:
    case actionTypes.tattooArtistRegistered:
      newstateUserTattooArtist = {
        isAuth: true,
        userTattooArtist: { ...action.tattooArtist },
      };
      break;

    default:
      newstateUserTattooArtist = stateUserTattooArtist;
  }

  return newstateUserTattooArtist;
};

export default userTattooArtistReducer;
