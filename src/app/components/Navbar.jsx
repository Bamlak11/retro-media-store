import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-blue-900 rounded-xl px-4 flex justify-between h-16 p-5 m-0">

      <div>
          <h1 className="text-white font-bold hover:cursor-default">
            Retro Media Store
          </h1>
        </div>

      <ul className="flex items-center justify-between m-2">


        <li className="m-2">
          <Link href="/">Home</Link>
        </li>

        <li className="m-2">
          <Link href="/vhs">VHS</Link>
        </li>

        <li className="m-2">
          <Link href="/dvd">DVD</Link>
        </li>

        <li className="m-2">
          <Link href="/cd">CD</Link>
        </li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
