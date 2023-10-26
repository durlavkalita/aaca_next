"use client";

import { FaBars } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navigation = [
  {
    name: "Blog",
    link: "/blog",
  },
  {
    name: "Register",
    link: "/register",
  },
  {
    name: "Players",
    link: "/players",
  },
  {
    name: "Events",
    link: "/events",
  },
  {
    name: "AACA",
    link: "/aaca",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="bg-white drop-shadow">
      <div className="mx-auto flex justify-between max-w-7xl p-4 sm:px-6 lg:px-8">
        {/* logo */}
        <a href="/">
          <div className="flex items-center">
            <Image
              width={100}
              height={100}
              src="/images/aaca_logo.jpg"
              alt="AACA"
              className="block h-8 w-auto"
            />
            <h1 className="block lg:hidden text-lg font-normal text-gray-500 lg:text-xl px-2 sm:px-4 dark:text-gray-400">
              AACA
            </h1>
            <h1 className="lg:block hidden text-lg font-normal text-gray-500 lg:text-xl sm:px-4 xl:px-8 dark:text-gray-400">
              All Assam Chess Association
            </h1>
          </div>
        </a>
        {/* main menu */}
        <div id="mainMenu" className="hidden lg:flex space-x-8 mr-8">
          {navigation.map((item) => (
            <Link
              key={item.link}
              href={item.link}
              className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
            >
              {item.name}
            </Link>
          ))}
        </div>
        {/* mobile menu */}
        <div className="flex flex-col items-end lg:hidden">
          {/* menu button */}
          <FaBars onClick={toggleMenu} className="mt-1 mb-3"></FaBars>
          <div
            id="mobileMenu"
            className={`flex flex-col lg:hidden space-x-4 items-end ${
              showMenu ? "" : "hidden"
            }`}
          >
            {navigation.map((item) => (
              <Link
                key={item.link}
                href={item.link}
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
