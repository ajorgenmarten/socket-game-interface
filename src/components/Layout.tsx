import { Outlet } from "react-router";
import { Navbar } from "./Navbar";

export function Layout() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <main >
        <Outlet />
      </main>
    </div>
  );
}