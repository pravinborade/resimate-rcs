import MainLayout from "../layouts/MainLayout";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { routes } from "./routeConfig";
import AuthLayout from "../layouts/AuthLayout";

const isAuth = () => !localStorage.getItem("token");

const getLayout = (layout, children) => {
  if (layout === "dashboard") return <MainLayout>{children}</MainLayout>;
  return <AuthLayout>{children}</AuthLayout>;
};

const buildRoutes = (routes) =>
  routes.map((route) => {
    if (route.children) {
      return {
        path: route.path,
        element: isAuth() ? (
          getLayout(route.layout, <></>)
        ) : (
          <Navigate to="/login" />
        ),
        children: buildRoutes(route.children),
      };
    }

    const Component = route.element;

    return {
      path: route.path,
      element: route.isPrivate ? (
        isAuth() ? (
          getLayout(route.layout, <Component />)
        ) : (
          <Navigate to="/login" />
        )
      ) : isAuth() ? (
        <Navigate to="/dashboard" />
      ) : (
        getLayout(route.layout, <Component />)
      ),
    };
  });

const router = createBrowserRouter([
  ...buildRoutes(routes),
  { path: "*", element: <div>Not Found</div> },
]);

export default router;
