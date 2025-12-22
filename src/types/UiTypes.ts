export enum ButtonVariant {
  PRIMARY,
  SECONDARY,
  ICON,
  TEXT,
}

export interface CustomButtonType {
  variant?: ButtonVariant;
  children: React.ReactNode;
  onClick?: () => void;
  width?: string | number;
  height?: string | number;
  style?: React.CSSProperties;
  className?: string
}

export interface CustomImageType {
  imageUrl?: string;
  altText?: string;
  style?: React.CSSProperties;
}

export interface CustomTextType {
  children: React.ReactNode;
  style?: React.CSSProperties;
}
