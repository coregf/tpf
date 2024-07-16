import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./UserContext";

const useAuth = () => {
  const { user } = useContext(UserContext);
  return user;
};

export const PublicRouteGuard = () => {
  const isUser = useAuth();
  return isUser ? <Navigate to="/dashboard" /> : <Outlet />;
};
