import { RouteObject, RouterProvider, createBrowserRouter } from "react-router";
import { HomePage } from "./pages/home";
import { IsNotPlaying } from "./components/IsNotPlaying";
import { IsPlaying } from "./components/IsPlaying";
import { WaitingRival } from "./pages/waiting-rival";

const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <IsNotPlaying>
        <HomePage />
      </IsNotPlaying>
    ),
  },
  {
    path: "/game",
    element: (
      <IsPlaying>
        <WaitingRival />
      </IsPlaying>
    ),
  },
];

const router = createBrowserRouter(routes);

export function RouterApp() {
  return <RouterProvider router={router} />;
}
