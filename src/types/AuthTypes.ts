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

