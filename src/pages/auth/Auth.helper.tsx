import { CustomButton } from "@/components/ui/CustomButton";
import { CustomInput } from "@/components/ui/CustomInput";
import { Text } from "@/components/ui/CustomText";
import { AuthPageStyles } from "@/styles/typescriptStyles/authStyles/AuthPage";
import { CustomTextObjectStyles } from "@/styles/typescriptStyles/uiStyles/CustomText";
import { UserType, type AuthTileType } from "@/types/AuthTypes";
import { ButtonVariant, InputVariant } from "@/types/UiTypes";
import { AuthConstant } from "@/utils/constants/AuthConstants";
import { useState } from "react";
import "@/styles/scssStyles/uiStyles/CustomButton.scss";

const AuthForm = () => {
  const [authFormData, setAuthFormData] = useState({
    role: UserType.STUDENT,
    username: "",
    email: "",
    password: "",
  });

  const handleFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setAuthFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRoleSelect = (role: UserType) => {
    console.log(role, "Role Logged");
    setAuthFormData((prev) => ({
      ...prev,
      role,
    }));
  };

  const getStyleForRoleButtons = (role: UserType) => {
    return authFormData.role === role
      ? AuthPageStyles.authCardSelectedStudentRoleButtonStyle
      : authFormData.role === role
      ? AuthPageStyles.authCardSelectedTeacherRoleButtonStyle
      : AuthPageStyles.authCardNotSelectedRoleButtonStyle;
  };

  const roleInput = (
    <div className="role-input-box">
      <CustomButton
        name="role"
        onClick={() => {
          handleRoleSelect(UserType.STUDENT);
        }}
        variant={ButtonVariant.SECONDARY}
        style={getStyleForRoleButtons(UserType.STUDENT)}
        className="secondary-btn-hover"
      >
        <Text style={AuthPageStyles.studentRoleButtonTextStyle}>Student</Text>
      </CustomButton>
      <CustomButton
        name="role"
        onClick={() => {
          handleRoleSelect(UserType.TEACHER);
        }}
        style={getStyleForRoleButtons(UserType.TEACHER)}
        variant={ButtonVariant.SECONDARY}
        className="secondary-btn-hover"
      >
        <Text>Teacher</Text>
      </CustomButton>
    </div>
  );

  const usernameInput = (
    <CustomInput
      name="username"
      placeholder="Username"
      value={authFormData.username}
      handleChange={() => {
        handleFormData;
      }}
    />
  );

  const emailInput = (
    <CustomInput
      placeholder="Email"
      name="email"
      variant={InputVariant.EMAIL}
      value={authFormData.email}
      handleChange={() => {
        handleFormData;
      }}
    />
  );

  const passwordInput = (
    <CustomInput
      placeholder="Password"
      name="password"
      variant={InputVariant.PASSWORD}
      value={authFormData.password}
      handleChange={() => {
        handleFormData;
      }}
    />
  );

  const authFormInputComponentList = AuthConstant.AUTH_FORM_INPUT_LIST(
    roleInput,
    usernameInput,
    emailInput,
    passwordInput
  );

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

const AuthCard = ({}) => {
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

export const AuthPageRightPortion = ({}) => {
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
