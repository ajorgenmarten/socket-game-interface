import { RouteObject, RouterProvider, createBrowserRouter } from "react-router";
import { SetNumber } from "./pages/set-number";
import { CanStayInHomeScreen } from "./components/logic/CanStayInHomeScreen";
import { CanStayInSetNumberScreen } from "./components/logic/CanStayInSetNumberScreen";
import { HomePage } from "./pages/Home";
import { WaitForRival } from "./pages/WaitForRival";

const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <CanStayInHomeScreen>
        <HomePage />
      </CanStayInHomeScreen>
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
    element: (
      <CanStayInSetNumberScreen>
        <SetNumber />
      </CanStayInSetNumberScreen>
    ),
  },
];

const router = createBrowserRouter(routes);

export function RouterApp() {
  return <RouterProvider router={router} />;
}
