import { createBrowserRouter, RouteObject, RouterProvider } from "react-router";
import App from "./App";
import { Layout } from "./components/Layout";
import { CreateGame } from "./components/CreateGame";
import { JoinGame } from "./components/JoinGame";
import { SetNumber } from "./components/SetNumber";
import { GameLose } from "./components/GameLose";
import { GameWin } from "./components/GameWin";

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
      {
        path: "set-number",
        element: <SetNumber />,
      },
      {
        path: "losser",
        element: <GameLose />,
      },
      {
        path: "winner",
        element: <GameWin />,
      }
    ],
  },
];

const router = createBrowserRouter(routes);

export function RouterApp() {
  return <RouterProvider router={router} />;
}
