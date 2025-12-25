import { InputVariant, type CustomInputType } from "@/types/UiTypes";

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
      <div>{prefixIcon}</div>
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
      <div>{suffixIcon}</div>
    </div>
  );
};
