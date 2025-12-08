export interface User {
  id: string;
  username: string;
  email: string;
  role: string;
}

export interface AuthStoreState {
  isAuthenticated: boolean;
  user: User | null;

  login: (userData: User) => void;
  logout: () => void;
}
