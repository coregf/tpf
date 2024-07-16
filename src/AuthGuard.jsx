import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./UserContext";

const useAuth = () => {
  const { user } = useContext(UserContext);
  return user;
};

const AuthGuard = () => {
  const isUser = useAuth();
  return isUser ? <Outlet /> : <Navigate to="/login" />;
};

export default AuthGuard;
