"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: "Dashboard", href: "/", icon: "📊", shortName: "Dashboard" },
    {
      name: "Portfolio",
      href: "/portfolio",
      icon: "👤",
      shortName: "Portfolio",
    },
    { name: "Learning", href: "/learning", icon: "📚", shortName: "Learning" },
    {
      name: "Wellbeing",
      href: "/wellbeing",
      icon: "❤️",
      shortName: "Wellbeing",
    },
    {
      name: "Interview Practice",
      href: "/interview",
      icon: "🎤",
      shortName: "Interview",
    },
    {
      name: "Opportunities",
      href: "/opportunities",
      icon: "💼",
      shortName: "Jobs",
    },
  ];

  const isActive = (path) => pathname === path;

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest("nav")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 h-5 z-20 bg-white border-b-2 border-gray-300 transition-all duration-300 ${
        isScrolled
          ? "shadow-xl backdrop-blur-sm bg-white/98 border-gray-400"
          : "shadow-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto px-1 sm:px-4 lg:px-6 xl:px-8 bg-white">
        <div className="flex justify-between items-center bg-white px-2 sm:px-4">
          {/* Logo and Brand */}
          <div className="flex items-center flex-shrink-0">
            <Link
              href="/"
              className="flex items-center space-x-2 group bg-white px-2 py-1 rounded-lg"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-emerald-600 rounded-lg flex items-center justify-center group-hover:bg-emerald-700 transition-colors shadow-md">
                <span className="text-white font-bold text-base sm:text-lg">
                  H
                </span>
              </div>
              <span className="text-lg sm:text-xl font-bold text-gray-900 hidden xs:block drop-shadow-sm">
                Hiron AI
              </span>
              <span className="text-lg sm:text-xl font-bold text-gray-900 block xs:hidden drop-shadow-sm">
                Hiron AI
              </span>
            </Link>
          </div>

          {/* Desktop Navigation - Hidden on smaller screens, shows on large screens */}
          <div className="hidden lg:flex items-center space-x-5 xl:space-x-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center space-x-1 xl:space-x-2 px-2 xl:px-3 py-1.5 rounded-lg text-sm xl:text-base font-medium transition-all duration-200 whitespace-nowrap border border-transparent ${
                  isActive(item.href)
                    ? "bg-emerald-100 text-emerald-700 shadow-md border-emerald-200"
                    : "text-gray-700 hover:text-emerald-600 hover:bg-gray-50 hover:border-gray-200"
                }`}
              >
                <span className="text-sm xl:text-base">{item.icon}</span>
                <span className="hidden xl:block">{item.name}</span>
                <span className="block xl:hidden">{item.shortName}</span>
              </Link>
            ))}
          </div>

          {/* User Profile - Desktop */}
          <div className="hidden lg:flex items-center space-x-2 xl:space-x-4 bg-white">
            <div className="flex items-center space-x-2 xl:space-x-3 cursor-pointer hover:bg-gray-50 rounded-lg p-2 xl:p-3 transition-colors border border-transparent hover:border-gray-200">
              <div className="w-8 h-8 xl:w-9 xl:h-9 bg-gray-300 rounded-full flex items-center justify-center shadow-sm">
                <Link href='/profile'><span className="text-sm xl:text-base font-medium text-gray-700">
                  AY                 
                </span></Link>
              </div>
              <div className="text-sm xl:text-base hidden xl:block">
                <p className="font-semibold text-gray-900">Ankit Yadav</p>
                <p className="text-gray-600 text-xs xl:text-sm">
                  ankit.yadav@hiron...
                </p>
              </div>
            </div>
          </div>

          {/* Mobile menu button and user avatar */}
          <div className="flex items-center space-x-2 lg:hidden">
            <div className="w-7 h-7 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-xs font-medium text-gray-700">AY</span>
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition-colors p-1"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu - Full screen overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-14 bg-white z-50 overflow-y-auto">
          <div className="px-4 pt-4 pb-6 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center space-x-4 px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                  isActive(item.href)
                    ? "bg-emerald-100 text-emerald-700 shadow-sm border border-emerald-200"
                    : "text-gray-700 hover:text-emerald-600 hover:bg-gray-50 active:bg-gray-100"
                }`}
                onClick={() => setIsOpen(false)}
              >
                <span className="text-xl">{item.icon}</span>
                <span>{item.name}</span>
                {isActive(item.href) && (
                  <span className="ml-auto w-2 h-2 bg-emerald-600 rounded-full"></span>
                )}
              </Link>
            ))}

            {/* Mobile User Profile */}
            <div className="border-t border-gray-200 pt-6 mt-6">
              <div className="flex items-center px-4 py-3 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="font-medium text-gray-700">AY</span>
                </div>
                <div className="ml-4">
                  <p className="font-medium text-gray-900">Ankit Yadav</p>
                  <p className="text-sm text-gray-500">ankit.yadav@hiron...</p>
                </div>
              </div>
              <Link
                href="/settings"
                className="flex items-center space-x-4 px-4 py-3 mt-2 text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-gray-50 rounded-xl transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-xl">⚙️</span>
                <span>Settings</span>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Bottom Navigation Bar - Alternative option */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-1 py-1 z-40">
        <div className="flex justify-around items-center">
          {navItems.slice(0, 5).map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center px-2 py-2 rounded-lg text-xs font-medium transition-all duration-200 min-w-0 flex-1 ${
                isActive(item.href)
                  ? "text-emerald-700 bg-emerald-50"
                  : "text-gray-600 hover:text-emerald-600"
              }`}
            >
              <span className="text-lg mb-1">{item.icon}</span>
              <span className="text-[10px] truncate w-full text-center leading-none">
                {item.shortName}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Spacer for fixed navbar */}
      <div className="h-12 sm:h-14"></div>
      {/* Spacer for bottom navigation on mobile */}
      <div className="sm:hidden h-16"></div>
    </nav>
  );
};

export default Navbar;
