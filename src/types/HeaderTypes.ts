export enum NavigationTextButtonEnum{
  COURSES,
  DASHBOARD
}

export interface ButtonListType {
    id:NavigationTextButtonEnum,
    name:string
}

export interface NavigationTextButtonsType {
    buttonList?: ButtonListType[];
    isLoggedIn:boolean
}
