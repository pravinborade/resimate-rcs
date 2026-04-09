import Login from "../pages/login";
import Dashboard from "../pages/dashboard";
export const routes = [
  {
    path: "/login",
    element: Login,
    isPrivate: false,
    layout: "auth",
  },
  {
    path: "/",
    element: "layout", // handled separately
    isPrivate: true,
    layout: "dashboard",
    children: [
      {
        path: "dashboard",
        element: Dashboard,
        meta: { title: "Dashboard", icon: "home" },
      },
    ],
  },
];
