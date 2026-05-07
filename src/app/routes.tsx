import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { Universities } from "./components/Universities";
import { Partners } from "./components/Partners";
import { Projects } from "./components/Projects";
import { Dashboard } from "./components/Dashboard";
import { Contact } from "./components/Contact";
import { Auth } from "./components/Auth";
import { NotFound } from "./components/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "universities", Component: Universities },
      { path: "partners", Component: Partners },
      { path: "projects", Component: Projects },
      { path: "dashboard", Component: Dashboard },
      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
  {
    path: "/auth",
    Component: Auth,
  },
]);