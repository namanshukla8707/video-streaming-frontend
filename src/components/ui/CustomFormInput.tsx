import type { CustomFormInputType } from "@/types/UiTypes";

export const CustomFormInput = ({
  label,
  children,
  labelStyle,
}: CustomFormInputType) => {
  return (
    <div className="main-custom-form-input-box">
      <div style={labelStyle}>{label}</div>
      {children}
    </div>
  );
};
