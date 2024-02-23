import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/auth/LoginPage";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";
import ResetPassword from "../pages/auth/ResetPassword";
import { useSelector } from "react-redux";

function DefaultRoutes() {
    const loggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <Routes>
     <Route path="/" element={ <Navigate to="/login" />} />
      <Route
        path="/login"
        element={!loggedIn ? <LoginPage /> : <Navigate to="/" />}
      />
      <Route
        path="/register"
        element={!loggedIn ? <Register /> : <Navigate to="/" />}
      />
      <Route
        path="/forgot-password"
        element={!loggedIn ? <ForgotPassword /> : <Navigate to="/" />}
      />
      <Route
        path="/reset-password/:role/:id/:token"
        element={!loggedIn ? <ResetPassword /> : <Navigate to="/" />}
      />
    </Routes>
  );
}

export default DefaultRoutes;
