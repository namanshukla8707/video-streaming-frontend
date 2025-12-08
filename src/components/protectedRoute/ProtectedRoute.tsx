import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuthStore from "../../stores/AuthStore";
import type { BooleanType } from "../../types/GlobalTypes";

const AuthenticatedRouteComponent = ({ isAuthenticated }: BooleanType) => {
  const location = useLocation();
  return !isAuthenticated ? (
    <Navigate to="/auth" state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
};

export const ProtectedRoute = () => {
  const authData = useAuthStore((state) => state);
  return (
    <AuthenticatedRouteComponent isAuthenticated={authData.isAuthenticated} />
  );
};
