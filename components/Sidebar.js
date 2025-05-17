"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowHeader(window.scrollY <= 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full bg-transparent h-[60px] fixed top-0 z-50 transition-all duration-300 ${
        showHeader ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className="flex items-center justify-center p-4 max-w-7xl mx-auto"
        dir="rtl"
      >
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-16 w-full bg-gray-50 sm:bg-transparent sm:static sm:block`}
        >
          <ul className="flex flex-col sm:flex-row sm:items-center sm:justify-center sm:gap-6 p-4 sm:p-0">
            <li>
              <Link
                href="#about-me"
                onClick={() => setIsOpen(false)}
                className="block text-[#F3F4F6]"
              >
                درباره من
              </Link>
            </li>
            <li>
              <Link
                href="#skills"
                onClick={() => setIsOpen(false)}
                className="block px-10 text-[#F3F4F6]"
              >
                مهارت ها
              </Link>
            </li>
            <li>
              <Link
                href="#experience"
                onClick={() => setIsOpen(false)}
                className="block py-2 ml-40 text-[#F3F4F6]"
              >
                سوابق کاری
              </Link>
            </li>
            <li>
              <Link
                href="#education"
                onClick={() => setIsOpen(false)}
                className="block py-2 px-10 text-[#1a1b1b]"
              >
                سوابق تحصیلی
              </Link>
            </li>
            <li>
              <Link
                href="#languages"
                onClick={() => setIsOpen(false)}
                className="block py-2 px-10 text-[#1a1b1b]"
              >
                زبان
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                onClick={() => setIsOpen(false)}
                className="block py-2 px-10 text-[#1a1b1b]"
              >
                پروژه ها
              </Link>
            </li>
            <li>
              <Link
                href="#certifection"
                onClick={() => setIsOpen(false)}
                className="block py-2 px-10 text-[#1a1b1b]"
              >
                دوره ها و مدارک
              </Link>
            </li>
            <li>
              <Link
                href="#call"
                onClick={() => setIsOpen(false)}
                className="block py-2 text-[#1a1b1b]"
              >
                تماس با من
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
