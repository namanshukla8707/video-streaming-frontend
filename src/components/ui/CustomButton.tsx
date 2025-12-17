import { ButtonVariant, type CustomButtonType } from "@/types/UiTypes";
import "@/styles/uiStyles/CustomButton.scss";

const ButtonVariantClassMap: Record<ButtonVariant, string> = {
  [ButtonVariant.PRIMARY]: "primary",
  [ButtonVariant.SECONDARY]: "secondary",
  [ButtonVariant.ICONBUTTON]: "icon-button",
};

const getButtonVariantByClassName = (variant: ButtonVariant) => {
  console.log("custom-button " + ButtonVariantClassMap[variant]);
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
