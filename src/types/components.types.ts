import { IWork } from "./interfacesComponent";

export type GeneralButtonProps = {
  textButton: string;
  functionOnPress: () => void;
};

export type TalentCardProps = {
  work: IWork;
};

export type TitlleProps = {
  text: string;
  textBold?: string;
};

export type NavHeaderProps = {
  goBack?: () => void;
  client?: boolean;
};

export type CreateButtonProps = {
  functionCreate: () => void;
};

export type ImagePickerResponse = {
  assets: object;
};
