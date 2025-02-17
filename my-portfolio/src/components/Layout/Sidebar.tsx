"use client";

import Link from "next/link";
import { useState } from "react";
import {
  HomeIcon,
  UserIcon,
  BriefcaseIcon,
  EnvelopeIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/solid";
import { useTheme } from "@/context/ThemeContext";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { href: "/", label: "Home", icon: HomeIcon },
    { href: "/about", label: "About", icon: UserIcon },
    { href: "/projects", label: "Projects", icon: BriefcaseIcon },
    { href: "/contact", label: "Contact", icon: EnvelopeIcon },
  ];

  return (
    <>
      {/* Mobile Hamburger Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-light-background dark:bg-dark-background rounded-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✕" : "☰"}
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-64 bg-light-background dark:bg-dark-background 
          shadow-lg transform transition-transform duration-300 z-40
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0
        `}
      >
        <div className="flex flex-col h-full p-6">
          {/* Logo or Profile */}
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
              Mamadou Barry{" "}
            </h2>
            {/* Debug Theme
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Current Theme: {theme}
            </p> */}
          </div>

          {/* Navigation Links */}
          <nav className="flex-grow">
            <ul className="space-y-4">
              {navLinks.map(({ href, label, icon: Icon }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="
                      flex items-center space-x-3 
                      text-primary dark:text-gray-300 
                      hover:text-primary/60 dark:hover:text-primary 
                      transition
                    "
                  >
                    <Icon className="h-6 w-6" />
                    <span>{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Theme Toggle */}
          <div className="mt-auto">
            <button
              onClick={(e) => {
                e.preventDefault(); // Prevent default link behavior
                toggleTheme();
              }}
              className="
                w-full flex items-center justify-center space-x-3 
                bg-light-background dark:bg-dark-background 
                text-gray-800 dark:text-white 
                py-3 rounded-md
                hover:bg-secondary/10 dark:hover:bg-secondary/20
                transition
              "
            >
              {theme === "light" ? (
                <>
                  <MoonIcon className="h-6 w-6 text-orange-500" />
                  <span>Dark Mode</span>
                </>
              ) : (
                <>
                  <SunIcon className="h-6 w-6 text-[#FACC15]" />
                  <span>Light Mode</span>
                </>
              )}
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
