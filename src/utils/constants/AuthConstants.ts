import { UserType } from "@/types/AuthTypes";

export const AuthConstant = {
  AUTH_FORM_INPUT_LIST: (
    inputComponent_1: React.ReactNode,
    inputComponent_2: React.ReactNode,
    inputComponent_3: React.ReactNode,
    inputComponent_4: React.ReactNode
  ) => [
    {
      label: "I am a",
      inputComponent: inputComponent_1,
    },
    {
      label: "Username",
      inputComponent: inputComponent_2,
    },
    {
      label: "Email",
      inputComponent: inputComponent_3,
    },
    {
      label: "Password",
      inputComponent: inputComponent_4,
    },
  ],

  AUTH_FORM_ROLE_BUTTON_LIST: [
    { role: UserType.STUDENT },
    { role: UserType.TEACHER },
  ],
};
