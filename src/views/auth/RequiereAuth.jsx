import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getStorage } from "src/utils/storage";

const RequiereAuth = ({ children }) => {
  const navigate = useNavigate();
  const isAuthenticated = getStorage("auth");

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/auth/login");
    }
  }, [navigate, isAuthenticated]);

  return children;
};

export default RequiereAuth;
