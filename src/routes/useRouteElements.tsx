import { Outlet, useRoutes } from "react-router-dom";
import HomePage from "../modules/User/HomePage";
import UserLayout from "../layouts/UserLayout";
import MovieDetails from "../modules/User/MovieDetails";
import NotFound from "../modules/NotFound";
import AuthLayout from "../layouts/AuthLayout";
import LoginPage from "../modules/Auth/LoginPage";
import RegisterPage from "../modules/Auth/RegisterPage";
import AdminLayout from "../layouts/AdminLayout";
import UserManagement from "../modules/Admin/UserManagement";
import MovieManagement from "../modules/Admin/MovieManagement";
import CinemaManagement from "../modules/Admin/CinemaManagement";
import AccountSettings from "../modules/Admin/AccountSettings";

const ProtectedRoute = () => {
  return <Outlet />;
};

const RejectedRoute = () => {
  return <Outlet />;
};

const ProtectedAdminRoute = () => {
  return <Outlet />;
};

const useRouteElement = () => {
  const element = useRoutes([
    {
      path: "",
      element: <UserLayout />,
      children: [
        {
          path: "",
          element: <HomePage />,
        },
        {
          path: "/details",
          element: <MovieDetails />,
        },
      ],
    },
    {
      path: "/auth",
      element: <AuthLayout />,
      children: [
        {
          path: "/auth/login",
          element: <LoginPage />,
        },
        {
          path: "/auth/register",
          element: <RegisterPage />,
        },
      ],
    },
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        {
          path: "/admin/user",
          element: <UserManagement />,
        },
        {
          path: "/admin/movie",
          element: <MovieManagement />,
        },
        {
          path: "/admin/cinema",
          element: <CinemaManagement />,
        },
        {
          path: "/admin/account-settings",
          element: <AccountSettings />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return element;
};
export default useRouteElement;
