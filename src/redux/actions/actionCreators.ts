import actionTypes from "./actionTypes";

export const registerTattooArtistAction = (tattooArtist: object) => ({
  type: actionTypes.createTattooArtist,
  tattooArtist,
});

export const loadAllWorksAction = (works: Array<object>) => ({
  type: actionTypes.loadAllWorks,
  works,
});

export const tattooArtistLoginAction = (tattooArtist: object) => ({
  type: actionTypes.tattooArtistLogin,
  tattooArtist,
});

export const tattooArtistRegisteredAction = (tattooArtist: object) => ({
  type: actionTypes.tattooArtistRegistered,
  tattooArtist,
});

export const loadCollectionsAction = (collections: Array<object>) => ({
  type: actionTypes.loadCollections,
  collections,
});

