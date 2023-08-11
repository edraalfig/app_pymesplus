import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = () => {
  let isLogged = localStorage.getItem("token")!=null? true: false;

  if (!isLogged) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};
