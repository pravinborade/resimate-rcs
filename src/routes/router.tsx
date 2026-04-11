import React,{ type ComponentType, type ReactNode }  from "react";
import { createBrowserRouter, Navigate, type RouteObject } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import { routes } from "./routeConfig";

// 🔐 Auth check
const isAuth = (): boolean => !!localStorage.getItem("token");

// 🧩 Route Config Type
interface AppRoute {
  path: string;
  element?: ComponentType;
  layout?: "dashboard" | "auth";
  isPrivate?: boolean;
  children?: AppRoute[];
}

// 🎨 Layout wrapper
const getLayout = (layout: string | undefined, children: ReactNode) => {
  if (layout === "dashboard") {
    return <MainLayout/>
  }
  return <AuthLayout>{children}</AuthLayout>;
};

// 🔁 Build routes recursively
const buildRoutes = (routes: AppRoute[]): RouteObject[] =>
  routes.map((route) => {
    // 🧱 Parent route (with children)
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

    const Component = route.element as ComponentType;

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

// 🚀 Router
const router = createBrowserRouter([
  ...buildRoutes(routes as AppRoute[]),
  { path: "*", element: <div>Not Found</div> },
]);

export default router;