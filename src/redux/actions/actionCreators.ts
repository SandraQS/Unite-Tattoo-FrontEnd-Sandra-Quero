import actionTypes from "./actionTypes";

export const registerTattooArtistAction = (tattooArtist: object) => ({
  type: actionTypes.createTattooArtist,
  tattooArtist,
});
