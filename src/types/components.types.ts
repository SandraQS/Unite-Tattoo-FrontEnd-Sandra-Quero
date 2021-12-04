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
  nameUser: string;
  goBack?: () => void;
};

export type CreateButtonProps = {
  functionCreate: () => void;
};
