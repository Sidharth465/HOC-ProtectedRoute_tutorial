import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import ProtectedRoute from "./ProtectedRoute";
import NotFound from "./pages/NotFound/NotFound";
import { useAuth } from "./Context/AuthContext";
import React from "react";

const LazyHome = React.lazy(() => import("./pages/Home"));
const LazyDashboard = React.lazy(() => import("./pages/Dashboard"));


const App = () => {
  const { state } = useAuth();
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute
              children={<LazyHome />}
              isAuthenticated={state.isAuthenticated}
            />
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isAuthenticated={state.isAuthenticated}>
              <LazyDashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
