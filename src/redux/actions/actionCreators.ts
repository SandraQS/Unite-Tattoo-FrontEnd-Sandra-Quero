import actionTypes from "./actionTypes";

export const registerTattooArtistAction = (tattooArtist: object) => ({
  type: actionTypes.createTattooArtist,
  tattooArtist,
});

export const loadAllWorksAction = (works: Array<object>) => ({
  type: actionTypes.loadAllWorks,
  works,
});
