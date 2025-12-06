import { Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Auth } from "./pages/auth";
import type { SuspenseRouteProps } from "./types/GlobalTypes";

const SuspenseRoute = ({ element }: SuspenseRouteProps) => {
  return <Suspense fallback={<div>Loading...</div>}>{element}</Suspense>;
};

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<SuspenseRoute element={<Auth />} />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
