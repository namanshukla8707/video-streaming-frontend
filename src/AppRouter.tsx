import { Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Auth } from "./pages/auth";
import type { SuspenseRouteProps } from "./types/GlobalTypes";
import { PublicRoute } from "./components/publicRoute";
import { ProtectedRoute } from "./components/protectedRoute";
import { Home } from "./pages/home";

const SuspenseRoute = ({ element }: SuspenseRouteProps) => {
  return <Suspense fallback={<div>Loading...</div>}>{element}</Suspense>;
};

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/auth" element={<SuspenseRoute element={<Auth />} />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<SuspenseRoute element={<Home />} />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
