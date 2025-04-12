import { createBrowserRouter, RouteObject, RouterProvider } from "react-router";
import App from "./App";
import { Layout } from "./components/Layout";
import { CreateGame } from "./components/CreateGame";
import { JoinGame } from "./components/JoinGame";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "create",
        element: <CreateGame />,
      },
      {
        path: "join",
        element: <JoinGame />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export function RouterApp() {
  return <RouterProvider router={router} />;
}
