export type GeneralButtonProps = {
  textButton: string;
  functionOnPress: () => void;
};

export type TalentCardProps = {
  imageWork: string;
  tattooArtist: string;
  styleWork: string;
  functionOnPress?: () => void;
};

export type TitleProps = {
  text: string;
  textBold?: string;
};
