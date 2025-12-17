export enum ButtonVariant {
  PRIMARY,
  SECONDARY,
  ICONBUTTON,
}

export interface CustomButtonType {
  variant?: ButtonVariant;
  children: React.ReactNode;
  onClick?: () => void;
  width?: string | number;
  height?: string | number;
  style?: React.CSSProperties;
}
