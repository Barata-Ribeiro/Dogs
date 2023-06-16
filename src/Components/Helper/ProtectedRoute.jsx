import React from "react";
import { UserContext } from "../../UserContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { login } = React.useContext(UserContext);

  return login === true ? (
    children
  ) : login === false ? (
    <Navigate to="/login" />
  ) : null;
};

export default ProtectedRoute;