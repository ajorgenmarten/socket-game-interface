import { RouteObject, RouterProvider, createBrowserRouter } from "react-router";
import { HomePage } from "./pages/home";
import { WaitingRival } from "./pages/waiting-rival";
import { SetNumber } from "./pages/set-number";
import { CanStayInHomeScreen } from "./components/logic/CanStayInHomeScreen";
import { CanStayInWaitScreen } from "./components/logic/CantStayInWaitScreen";
import { CanStayInSetNumberScreen } from "./components/logic/CanStayInSetNumberScreen";

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
    path: "/game",
    element: (
        <CanStayInWaitScreen>
          <WaitingRival />
        </CanStayInWaitScreen>
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
