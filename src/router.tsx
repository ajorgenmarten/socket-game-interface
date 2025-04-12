import { RouteObject, RouterProvider, createBrowserRouter } from "react-router";
import { HomePage } from "./pages/Home";
import { WaitForRival } from "./pages/WaitForRival";
import { SetSecretNumber } from "./pages/SetSecretNumber";
import { Game } from "./pages/Game";
import { StageFilter } from "./components/logic/StageFilter";

const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <StageFilter>
        <HomePage />
      </StageFilter>
    ),
  },
  {
    path: "/wait-room",
    element: (
      <StageFilter>
        <WaitForRival />
      </StageFilter>
    ),
  },
  {
    path: "/set-number",
    element: (
      <StageFilter>
        <SetSecretNumber />
      </StageFilter>
    )
  },
  {
    path: '/game',
    element: (
      <StageFilter>
        <Game />
      </StageFilter>
    )
  }
];

const router = createBrowserRouter(routes);

export function RouterApp() {
  return <RouterProvider router={router} />;
}
