import { useRoutes } from "react-router-dom";
import HomePage from "../modules/User/HomePage";
import UserLayout from "../layouts/UserLayout";
import MovieDetails from "../modules/User/MovieDetails";
import NotFound from "../modules/NotFound";

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
    // {
    //   path: "/admin",
    //   element: <AdminLayout/>,
    //   children: []
    // },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return element;
};
export default useRouteElement;
