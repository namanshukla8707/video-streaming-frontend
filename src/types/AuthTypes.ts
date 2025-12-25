export interface User {
  id: number;
  username: string;
  email: string;
  role: string;
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

export enum UserType{
  STUDENT,
  TEACHER
}