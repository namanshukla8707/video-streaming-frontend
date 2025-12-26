import "@/styles/scssStyles/uiStyles/CustomText.scss";
import type { CustomTextType } from "@/types/UiTypes";

export const Text = ({ children, style, className }: CustomTextType) => {
  return (
    <div className={"general-text-div" + " " + className} style={style}>
      {children}
    </div>
  );
};
