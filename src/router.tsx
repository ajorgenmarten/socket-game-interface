import { RouteObject, RouterProvider, createBrowserRouter } from "react-router";
import { HomePage } from "./pages/Home";
import { WaitForRival } from "./pages/WaitForRival";
import { SetSecretNumber } from "./pages/SetSecretNumber";

const routes: RouteObject[] = [
  {
    path: "/",
    element: (
        <HomePage />
    ),
  },
  {
    path: "/wait-room",
    element: (
        <WaitForRival />
    ),
  },
  {
    path: "/set-number",
    element: <SetSecretNumber />
  }
];

const router = createBrowserRouter(routes);

export function RouterApp() {
  return <RouterProvider router={router} />;
}
