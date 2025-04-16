"use client";

import { links } from "@/utils/pathHelpers";
import { useState, useEffect } from "react";
import MobileLinkItem from "./mobile-link-item";
import { Menu, X } from "lucide-react";
import HeaderButton from "./header-button";

export default function MobileMenu() {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowMenu(false);
    };

    if (showMenu) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [showMenu]);

  function toggleShowMenu() {
    setShowMenu((prevState) => !prevState);
  }

  function closeMenu() {
    setShowMenu(false);
  }

  return (
    <div className="lg:hidden">
      <button
        onClick={toggleShowMenu}
        aria-expanded={showMenu}
        aria-label="Toggle menu"
        className="bg-transparent border-none"
      >
        <Menu className="h-6 w-6" />
      </button>

      <div
        className={`fixed inset-0 bg-secondary/80 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          showMenu ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!showMenu}
        onClick={closeMenu}
      />

      <div
        className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ${
          showMenu ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="relative bg-white rounded-lg shadow-xl p-8 w-full max-w-md mx-4">
          <button
            onClick={closeMenu}
            aria-label="Close menu"
            className="block ms-auto mb-2 text-gray-500 hover:text-gray-700"
          >
            <X className="h-6 w-6" />
          </button>

          <nav aria-label="Mobile navigation">
            <ul className="space-y-6 text-center">
              {links.map((link) => (
                <li key={link.href}>
                  <MobileLinkItem {...link} onClick={closeMenu} />
                </li>
              ))}
            </ul>
          </nav>
          <div className="w-full flex justify-center items-center mt-4">
            <HeaderButton />
          </div>
        </div>
      </div>
    </div>
  );
}
