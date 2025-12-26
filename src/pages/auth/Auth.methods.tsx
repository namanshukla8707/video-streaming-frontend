import { CustomButton } from "@/components/ui/CustomButton";
import { CustomInput } from "@/components/ui/CustomInput";
import { Text } from "@/components/ui/CustomText";
import { AuthPageStyles } from "@/styles/typescriptStyles/authStyles/AuthPage";
import {
  UserType,
  type AuthMethodsType,
  type AuthUser,
} from "@/types/AuthTypes";
import { ButtonVariant, InputVariant } from "@/types/UiTypes";
import { AuthConstant } from "@/utils/constants/AuthConstants";

export const getAuthMethods = ({
  authFormData,
  setAuthFormData,
}: AuthMethodsType) => {
  const handleFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAuthFormData((prev: AuthUser) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRoleSelect = (role: UserType) => {
    setAuthFormData((prev: AuthUser) => ({
      ...prev,
      role,
    }));
  };

  const getStyleForRoleButtons = (role: UserType) => {
    return authFormData.role === role
      ? AuthPageStyles.authCardSelectedStudentRoleButtonStyle
      : AuthPageStyles.authCardNotSelectedRoleButtonStyle;
  };

  const getStyleForRoleButtonText = (role: UserType) => {
    return authFormData.role === role
      ? AuthPageStyles.selectedRoleButtonTextStyle
      : AuthPageStyles.notSelectedRoleButtonTextStyle;
  };

  const roleInput = (
    <div className="role-input-box">
      {AuthConstant.AUTH_FORM_ROLE_BUTTON_LIST.map((item, key) => (
        <CustomButton
          key={key}
          name="role"
          onClick={() => {
            handleRoleSelect(item.role);
          }}
          variant={ButtonVariant.SECONDARY}
          style={getStyleForRoleButtons(item.role)}
          className="secondary-btn-hover"
        >
          <Text
            className="auth-form-role-not-selected-text"
            style={getStyleForRoleButtonText(item.role)}
          >
            {item.role.valueOf()}
          </Text>
        </CustomButton>
      ))}
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

  return { authFormInputComponentList };
};
