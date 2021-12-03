export interface IPersonalDataTattooArtist {
  name: string;
  surname1: string;
  surname2: string;
}

export interface IUserDataTattooArtist {
  userName: string;
  password: string;
  confirmPassword: string;
  email: string;
}

export interface IProfessionalDataTattooArtist {
  studioName: string;
  professionalName: string;
  phone: number;
  contactEmail: string;
  openingHours: string;
  direction: string;
  tattooStyles: Array<string>;
  colaboration: boolean;
}

export interface ITattooArtist {
  personalDataTattoArtist: IPersonalDataTattooArtist;
  userDataTattoArtist: IUserDataTattooArtist;
  professionalDataTattoArtist: IProfessionalDataTattooArtist;
  imageAmbient: string;
  profileImage: string;
}

export interface IWork {
  tittle: string;
  tattooArtist: string;
  description: string;
  tattooStyles: string;
  likes: number;
  image: string;
  collectionWork: Array<string>;
  id: string;
}
export interface ICollection {
  tattooStyles: string;
  image: string;
  works: Array<string>;
  id: string;
}
