import actionTypes from "./actionTypes";

export const registerTattooArtistAction = (tattooArtist: object) => ({
  type: actionTypes.createTattooArtist,
  tattooArtist,
});

export const tattooArtistPorfileAction = (userPorfile: object) => ({
  type: actionTypes.tattooArtistPorfile,
  userPorfile,
});

export const tattooArtistLoginAction = (tattooArtist: object) => ({
  type: actionTypes.tattooArtistLogin,
  tattooArtist,
});

export const tattooArtistRegisteredAction = (tattooArtist: object) => ({
  type: actionTypes.tattooArtistRegistered,
  tattooArtist,
});

export const tattooArtistLogOutAction = () => ({
  type: actionTypes.tattooArtistLogOut,
});

export const loadCollectionsAction = (collections: Array<object>) => ({
  type: actionTypes.loadCollections,
  collections,
});

export const createCollectionAction = (collection: object) => ({
  type: actionTypes.createCollection,
  collection,
});

export const deleteCollectionAction = (id: string) => ({
  type: actionTypes.deleteCollection,
  id,
});

export const editCollectionAction = (collection: object) => ({
  type: actionTypes.editCollection,
  collection,
});

export const editedCollectionAction = (collection: object) => ({
  type: actionTypes.editedCollection,
  collection,
});

export const loadAllWorksAction = (works: Array<object>) => ({
  type: actionTypes.loadAllWorks,
  works,
});

export const loadWorksCollectionAction = (works: Array<object>) => ({
  type: actionTypes.loadWorksCollection,
  works,
});

export const createWorkAction = (work: object) => ({
  type: actionTypes.createWork,
  work,
});

export const deleteWorkAction = (id: string) => ({
  type: actionTypes.deleteWork,
  id,
});

export const editWorkAction = (work: object) => ({
  type: actionTypes.editWork,
  work,
});
