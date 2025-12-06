import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuthStore from "../../stores/AuthStore";
import type { BooleanType } from "../../types/GlobalTypes";

const AuthenticatedRouteComponent = ({ isAuthenticated }: BooleanType) => {
  const location = useLocation();
  return isAuthenticated ? (
    <Navigate to="/" state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
};

export const PublicRoute = () => {
  const authData = useAuthStore((state) => state);
  return (
    <AuthenticatedRouteComponent isAuthenticated={authData.isAuthenticated} />
  );
};
