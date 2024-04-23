import React from "react";

function Navbar() {
  return (
    <nav className="bg-blue-900 rounded-xl px-4">
        <div className="flex items-center justify-between h-16">
          <div>
            <h1 className="text-white font-bold hover:cursor-default">Retro Media Store</h1>
          </div>

            <div className="flex items-center">
              <a
                href="#"
                className="text-gray-300 hover:bg-blue-800 hover:text-white px-3 py-2 rounded-lg"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-300 hover:bg-blue-800 hover:text-white px-3 py-2 rounded-lg"
              >
                Media
              </a>
              <a
                href="#"
                className="text-gray-300 hover:bg-blue-800 hover:text-white px-3 py-2 rounded-lg"
              >
                Cart
              </a>
            </div>
      </div>
    </nav>
  );
}

export default Navbar;
