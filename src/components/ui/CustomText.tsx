import "@/styles/scssStyles/uiStyles/CustomText.scss";
import type { CustomTextType } from "@/types/UiTypes";

export const Text = ({ children, style }: CustomTextType) => {
  return (
    <div className="general-text-div" style={style}>
      {children}
    </div>
  );
};
