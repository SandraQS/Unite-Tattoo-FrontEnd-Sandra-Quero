export interface ItattooArtistActions {
  type: string;
  tattooArtist: object;
}
export interface ItattooWorksActions {
  type: string;
  works: Array<object>;
}

export interface IUserDataTattooArtistActions {
  type: string;
  tattooArtist: object;
}

export interface IcollectionsActions {
  type: string;
  collections: Array<object>;
  collection: object;
  id: string;
}
