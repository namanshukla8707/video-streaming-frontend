export interface User {
  id: number;
  username: string;
  email: string;
  role: UserType;
}

export interface AuthStoreState {
  isLoggedIn: boolean;
  user: User | null;

  login: (userData: User) => void;
  logout: () => void;
}

export interface AuthTileType {
  heading: string;
  description?: string;
  svgIcon?: React.ReactNode;
  iconDivStyle?: React.CSSProperties;
}

export enum UserType {
  STUDENT = "USER",
  TEACHER = "TEACHER",
}

export interface AuthMethodsType {
  authFormData: AuthUser;
  setAuthFormData: React.Dispatch<React.SetStateAction<any>>;
}

export interface AuthUser {
  username?: string;
  role?: UserType;
  email?: string;
  password: string;
}
