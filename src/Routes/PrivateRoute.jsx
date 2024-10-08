import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading)
    return (
      <div className="text-center mt-5 text-5xl">
        <span className="loading loading-spinner text-secondary loading-lg"></span>
      </div>
    );
  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{from:location}} replace></Navigate>;
};

export default PrivateRoute;
