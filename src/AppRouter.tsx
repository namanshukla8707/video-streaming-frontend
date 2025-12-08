import { Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Auth } from "./pages/auth";
import type { SuspenseRouteProps } from "./types/GlobalTypes";
import { PublicRoute } from "./components/publicRoute";
import { ProtectedRoute } from "./components/protectedRoute";
import { Home } from "./pages/home";
import { ProtectedLayout } from "./components/layout/protectedLayout";
import { PublicLayout } from "./components/layout/publicLayout";

const SuspenseRoute = ({ element }: SuspenseRouteProps) => {
  return <Suspense fallback={<div>Loading...</div>}>{element}</Suspense>;
};

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route element={<PublicLayout />}>
            <Route
              path="/auth"
              element={<SuspenseRoute element={<Auth />} />}
            />
          </Route>
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route element={<ProtectedLayout />}>
            <Route path="/" element={<SuspenseRoute element={<Home />} />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
