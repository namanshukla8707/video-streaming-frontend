import { CustomButton } from "@/components/ui/CustomButton";
import { Text } from "@/components/ui/CustomText";
import { AuthPageStyles } from "@/styles/typescriptStyles/authStyles/AuthPage";
import { CustomTextObjectStyles } from "@/styles/typescriptStyles/uiStyles/CustomText";
import { UserType, type AuthTileType } from "@/types/AuthTypes";
import { ButtonVariant } from "@/types/UiTypes";
import { useState } from "react";
import "@/styles/scssStyles/uiStyles/CustomButton.scss";
import { getAuthMethods } from "./Auth.methods";

const AuthForm = () => {
  const [authFormData, setAuthFormData] = useState({
    role: UserType.STUDENT,
    username: "",
    email: "",
    password: "",
  });
  const { authFormInputComponentList } = getAuthMethods({
    authFormData,
    setAuthFormData,
  });
  
  return (
    <form className="main-auth-card-form">
      {authFormInputComponentList.map((item, key) => (
        <div key={key} className="auth-card-form-main-input-box">
          <Text children={item.label} style={{ fontSize: "16px" }} />
          {item.inputComponent}
        </div>
      ))}
      <CustomButton>Create Account</CustomButton>
    </form>
  );
};

const AuthCard = () => {
  return (
    <div className="main-auth-card">
      <div className="auth-card-heading">
        <Text
          children={"Create Account"}
          style={AuthPageStyles.authCardHeadingTextStyle}
        />
        <div className="auth-card-flip">
          <Text
            children={"Already have an account?"}
            style={AuthPageStyles.authCardSubHeadingTextStyle}
          />
          <CustomButton
            variant={ButtonVariant.TEXT}
            style={AuthPageStyles.authCardSignInBtnStyle}
            className="auth-card-sign-in-btn"
          >
            Sign In
          </CustomButton>
        </div>
      </div>
      <AuthForm />
    </div>
  );
};

export const AuthPageLeftPortion = ({
  authTileList,
}: {
  authTileList: AuthTileType[];
}) => {
  return (
    <div className="auth-left-box">
      <Text
        children={"Join EduVerse"}
        style={AuthPageStyles.authLeftBoxMainHeadingStyle}
      />
      <Text
        style={AuthPageStyles.authLeftBoxMainDescriptionStyle}
        children={"Start your learning journey today with expert-led courses."}
      />
      <div className="main-auth-tile-box">
        {authTileList.map((item, key) => (
          <AuthTile
            key={key}
            heading={item.heading}
            description={item.description}
            svgIcon={item.svgIcon}
            iconDivStyle={item.iconDivStyle}
          />
        ))}
      </div>
    </div>
  );
};

export const AuthPageRightPortion = () => {
  return <AuthCard />;
};

const AuthTile = ({
  heading,
  description,
  svgIcon,
  iconDivStyle,
}: AuthTileType) => {
  return (
    <div className="auth-tile-box">
      <div style={iconDivStyle}>{svgIcon}</div>
      <div className="auth-tile-text-box">
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
