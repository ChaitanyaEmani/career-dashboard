"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  name: string;
  href: string;
  icon: string; // Change to JSX.Element if using Lucide icons
  shortName: string;
}

const navItems: NavItem[] = [
  { name: "Dashboard", href: "/", icon: "📊", shortName: "Dashboard" },
  { name: "Portfolio", href: "/portfolio", icon: "👤", shortName: "Portfolio" },
  { name: "Learning", href: "/learning", icon: "📚", shortName: "Learning" },
  { name: "Wellbeing", href: "/wellbeing", icon: "❤️", shortName: "Wellbeing" },
  { name: "Interview Practice", href: "/interview", icon: "🎤", shortName: "Interview" },
  { name: "Opportunities", href: "/opportunities", icon: "💼", shortName: "Opportunities" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && !(event.target as HTMLElement).closest("nav")) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      const originalWarn = console.warn;
      console.warn = (...args) => {
        if (typeof args[0] === 'string' && args[0].includes('Skipping auto-scroll behavior')) {
          return;
        }
        originalWarn(...args);
      };
      return () => {
        console.warn = originalWarn;
      };
    }
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 h-20 z-20 bg-white border-b border-gray-200 transition-all duration-300 ${
          isScrolled ? "shadow-xl backdrop-blur-sm bg-white/98" : "shadow-lg"
        }`}
        style={{ position: "fixed", transform: "translateZ(0)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center flex-shrink-0">
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center group-hover:bg-emerald-700 transition-colors shadow-md">
                  <span className="text-white font-bold text-lg">H</span>
                </div>
                <span className="text-xl font-bold text-gray-900 hidden sm:block">
                  Hiron AI
                </span>
              </Link>
            </div>

            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                    isActive(item.href)
                      ? "bg-emerald-100 text-emerald-700 shadow-md"
                      : "text-gray-700 hover:text-emerald-600 hover:bg-gray-50"
                  }`}
                >
                  <span className="text-base">{item.icon}</span>
                  <span className="hidden xl:block">{item.name}</span>
                  <span className="block xl:hidden">{item.shortName}</span>
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center space-x-4">
              <Link href="/profile" className="flex items-center space-x-3 hover:bg-gray-50 rounded-lg p-3 transition-colors">
                <div className="w-9 h-9 bg-gray-300 rounded-full flex items-center justify-center shadow-sm">
                  <span className="text-base font-medium text-gray-700">AY</span>
                </div>
                <div className="hidden xl:block">
                  <p className="font-semibold text-gray-900">Ankit Yadav</p>
                  <p className="text-gray-600 text-sm">ankit.yadav@hiron...</p>
                </div>
              </Link>
            </div>

            <div className="flex items-center space-x-2 lg:hidden">
              <Link href="/profile">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                  <span className="text-xs font-medium text-gray-700">AY</span>
                </div>
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen}
                aria-label="Toggle menu"
                className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition-colors p-1"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg max-h-[calc(100vh-4rem)] overflow-y-auto z-20">
            <div className="px-4 pt-4 pb-6 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-4 px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                    isActive(item.href)
                      ? "bg-emerald-100 text-emerald-700 shadow-sm"
                      : "text-gray-700 hover:text-emerald-600 hover:bg-gray-50"
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
              <div className="border-t border-gray-200 pt-6 mt-6">
                <Link href="/profile" className="flex items-center px-4 py-3 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="font-medium text-gray-700">AY</span>
                  </div>
                  <div className="ml-4">
                    <p className="font-medium text-gray-900">Ankit Yadav</p>
                    <p className="text-sm text-gray-500">ankit.yadav@hiron...</p>
                  </div>
                </Link>
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
      </nav>

      <div className="h-16"></div>
    </>
  );
};

export default Navbar;
