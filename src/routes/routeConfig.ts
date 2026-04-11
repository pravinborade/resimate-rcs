import Dashboard from "@/modules/dashboard";
import Login from "@/modules/login/pages";

export const routes = [
  {
    path: "/login",
    element: Login,
    isPrivate: false,
    layout: "auth",
  },
  {
    path: "/",
    element: "layout",
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
