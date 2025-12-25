import type React from "react";

export enum ButtonVariant {
  PRIMARY,
  SECONDARY,
  ICON,
  TEXT,
}

export enum InputVariant {
  TEXT = "text",
  EMAIL = "email",
  PASSWORD = "password",
}

export interface CustomButtonType {
  name?: string;
  variant?: ButtonVariant;
  children: React.ReactNode;
  onClick?: (...args: any[]) => void;
  width?: string | number;
  height?: string | number;
  style?: React.CSSProperties;
  className?: string;
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

export interface CustomFormInputType {
  label?: string;
  children: React.ReactNode;
  labelStyle?: React.CSSProperties;
}

export interface CustomInputType {
  value?: string;
  name?: string;
  variant?: InputVariant;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  placeholder?: string;
}
