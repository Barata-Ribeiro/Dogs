import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { data } = useSelector((state) => state.user);

  return data ? children : data === null ? <Navigate to="/login" /> : null;
};

export default ProtectedRoute;
