import { ButtonVariant, type CustomButtonType } from "@/types/UiTypes";
import "@/styles/scssStyles/uiStyles/CustomButton.scss";

const ButtonVariantClassMap: Record<ButtonVariant, string> = {
  [ButtonVariant.PRIMARY]: "primary",
  [ButtonVariant.SECONDARY]: "secondary",
  [ButtonVariant.ICON]: "icon-button",
  [ButtonVariant.TEXT]:"text-button"
};

const getButtonVariantByClassName = (variant: ButtonVariant) => {
  return (
    "custom-button " + ButtonVariantClassMap[variant] ||
    ButtonVariantClassMap[ButtonVariant.PRIMARY]
  );
};

export const CustomButton = ({
  variant = ButtonVariant.PRIMARY,
  children,
  onClick,
  width,
  height,
  style,
}: CustomButtonType) => {
  return (
    <button
      className={getButtonVariantByClassName(variant)}
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
