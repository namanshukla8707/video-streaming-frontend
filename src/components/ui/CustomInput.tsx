import { InputVariant, type CustomInputType } from "@/types/UiTypes";
import "@/styles/scssStyles/uiStyles/CustomInput.scss";

export const CustomInput = ({
  value,
  name,
  variant = InputVariant.TEXT,
  handleChange,
  prefixIcon,
  suffixIcon,
  placeholder,
}: CustomInputType) => {
  return (
    <div className="custom-input-box">
      {prefixIcon && <div className="prefix-icon">{prefixIcon}</div>}
      <input
        name={name}
        type={variant}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className={`custom-input ${prefixIcon ? "has-prefix" : ""} ${
          suffixIcon ? "has-suffix" : ""
        }`}
      />
      {suffixIcon && <div className="suffix-icon">{suffixIcon}</div>}
    </div>
  );
};
