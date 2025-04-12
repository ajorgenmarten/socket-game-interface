import { useEffect, useState } from "react";
import { socket } from "../socket";

export function Navbar() {
  const [activeUsers, setActiveUsers] = useState(0);

  useEffect(() => {
    socket.on("users_count", (count: number) => {
      setActiveUsers(count);
    });

    return () => {
      socket.off("users_count");
    };
  }, []);

  return (
    <nav className="bg-gray-800 sticky w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-white text-xl font-bold">NumeritosGame</h1>
          </div>
          <div className="flex items-center">
            <span className="bg-green-500 rounded-full w-3 h-3 mr-2"></span>
            <span className="text-white">{activeUsers} usuarios activos</span>
          </div>
        </div>
      </div>
    </nav>
  );
}