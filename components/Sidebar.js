"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setShowHeader(window.scrollY <= 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { href: "#about-me", label: "درباره من" },
    { href: "#skills", label: "مهارت ها" },
    { href: "#experience", label: "سوابق کاری" },
    { href: "#", label: "LOGO", isLogo: true },
    { href: "#education", label: "سوابق تحصیلی" },
    { href: "#Projects", label: "پروژه ها" },
    { href: "#call", label: "تماس با من" },
  ];

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        showHeader ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className="flex items-center justify-center px-4 py-3 max-w-7xl mx-auto rounded-b-xl"
        dir="rtl"
      >
        <button
          onClick={toggleMenu}
          className="text-white sm:hidden focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } w-full sm:block sm:w-auto mt-4 sm:mt-0`}
        >
          <ul className="flex flex-wrap sm:flex-nowrap sm:flex-row sm:items-center gap-2 sm:gap-4 bg-[#1e3a8a] sm:bg-transparent rounded-md sm:rounded-none p-4 sm:p-0">
            {menuItems.map(({ href, label, isLogo }) => (
              <li key={href} className="whitespace-nowrap">
                {isLogo ? (
                  <div className="ml-[100px] mr-[100px] w-[150px] sm:px-4 sm:mx-4 flex-shrink-0">
                    <Image
                      src="/logo.png"
                      alt="ANATECH Logo"
                      width={100}
                      height={100}
                      className="mx-auto"
                    />
                  </div>
                ) : (
                  <Link
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className="block px-[30px] transition text-white hover:text-gray-300 text-sm sm:text-base"
                  >
                    {label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
