import React from "react";
import { Navigate } from "react-router-dom";
import { getToken } from "../services/authService";

const PrivateRoute = ({ children }) => {
  return getToken() ? children :<Navigate to="/login" />;
};

export default PrivateRoute;