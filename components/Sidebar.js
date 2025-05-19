"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setShowHeader(window.scrollY <= 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { href: "#about-me", label: "درباره من" },
    { href: "#skills", label: "مهارت ها" },
    { href: "#experience", label: "سوابق کاری" },
    { href: "#education", label: "سوابق تحصیلی" },
    { href: "#languages", label: "زبان" },
    { href: "#projects", label: "پروژه ها" },
    { href: "#certifection", label: "دوره ها و مدارک" },
    { href: "#call", label: "تماس با من" },
  ];

  // پیدا کردن ایندکس شروع تغییر رنگ متن (سوابق کاری)
  const textColorChangeIndex = menuItems.findIndex(
    (item) => item.href === "#experience"
  );

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
          <ul className="flex flex-col sm:flex-row sm:items-center sm:gap-6 bg-[#1e3a8a] sm:bg-transparent rounded-md sm:rounded-none p-4 sm:p-0">
            {menuItems.map(({ href, label }, index) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-7 py-2 transition ${
                    index >= textColorChangeIndex
                      ? "text-[#374151] hover:text-gray-600"
                      : "text-white hover:text-gray-300"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
