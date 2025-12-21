import { Text } from "@/components/ui/CustomText";
import { CustomTextObjectStyles } from "@/styles/typescriptStyles/uiStyles/CustomText";
import type { AuthTileType } from "@/types/AuthTypes";

export const AuthTile = ({
  heading,
  description,
  svgIcon,
  iconDivStyle,
}: AuthTileType) => {
  return (
    <div className="auth-tile-box">
      <div style={iconDivStyle}>{svgIcon}</div>
      <div>
        <Text
          children={heading}
          style={CustomTextObjectStyles.authTileHeading}
        />
        <Text
          children={description}
          style={CustomTextObjectStyles.authTileDescription}
        />
      </div>
    </div>
  );
};
