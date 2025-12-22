import { ButtonVariant, type CustomButtonType } from "@/types/UiTypes";
import "@/styles/scssStyles/uiStyles/CustomButton.scss";

const ButtonVariantClassMap: Record<ButtonVariant, string> = {
  [ButtonVariant.PRIMARY]: "primary",
  [ButtonVariant.SECONDARY]: "secondary",
  [ButtonVariant.ICON]: "icon-button",
  [ButtonVariant.TEXT]: "text-button",
};

const getButtonVariantByClassName = (
  variant: ButtonVariant,
  className: string
) => {
  return (
    "custom-button " +
    (ButtonVariantClassMap[variant] ||
      ButtonVariantClassMap[ButtonVariant.PRIMARY]) +
    " " +
    className
  );
};

export const CustomButton = ({
  variant = ButtonVariant.PRIMARY,
  children,
  onClick,
  width,
  height,
  style,
  className = "",
}: CustomButtonType) => {
  return (
    <button
      className={getButtonVariantByClassName(variant, className)}
      onClick={onClick}
      style={{
        width,
        height,
        ...style,
      }}
    >
      {children}
    </button>
  );
};
