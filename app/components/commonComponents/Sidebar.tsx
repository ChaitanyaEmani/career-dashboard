"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  name: string;
  href: string;
  icon: string;
}

const navItems: NavItem[] = [
  { name: "Dashboard", href: "/", icon: "📊" },
  { name: "Portfolio", href: "/portfolio", icon: "👤" },
  { name: "Learning", href: "/learning", icon: "📚" },
  { name: "Wellbeing", href: "/wellbeing", icon: "❤️" },
  { name: "Interview Practice", href: "/interview", icon: "🎤" },
  { name: "Portfolio Generator", href: "/portfolio-generator", icon: "📄" },
  { name: "Opportunities", href: "/opportunities", icon: "💼" },
];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  // Ensure sidebar starts closed on mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        // On desktop, sidebar should always be open
        setIsOpen(false); // Reset mobile state
      } else {
        // On mobile, sidebar should start closed
        setIsOpen(false);
      }
    };

    // Set initial state
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        !(event.target as HTMLElement).closest("aside") &&
        !(event.target as HTMLElement).closest("button")
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  // Suppress Next.js auto-scroll warning for fixed positioned elements
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      const originalWarn = console.warn;
      console.warn = (...args) => {
        if (
          typeof args[0] === "string" &&
          args[0].includes("Skipping auto-scroll behavior")
        ) {
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
      {/* Mobile Menu Button - Now on the right side */}
      <div className="lg:hidden fixed top-4 right-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 bg-white rounded-lg shadow-md border border-gray-200 hover:bg-gray-50 transition-colors"
          aria-label="Toggle sidebar"
        >
          <svg
            className="w-6 h-6 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-gray-900/20 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed left-0 top-0 h-full w-80 bg-white border-r border-gray-200 shadow-lg z-50 transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          lg:translate-x-0
        `}
        suppressHydrationWarning
      >
        {/* ...rest of the sidebar content... */}
        <div className="flex flex-col h-full">
          {/* Header - Fixed */}
          <div className="flex-shrink-0 p-6 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center group-hover:bg-emerald-700 transition-colors shadow-md">
                  <span className="text-white font-bold text-lg">H</span>
                </div>
                <span className="text-xl font-bold text-gray-900">
                  Hiron AI
                </span>
              </Link>

              {/* Close button for mobile - only visible when sidebar is open */}
              <button
                onClick={() => setIsOpen(false)}
                className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Close sidebar"
              >
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto">
            {/* Navigation Items */}
            <nav className="p-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 group ${
                    isActive(item.href)
                      ? "bg-emerald-600 text-white shadow-md"
                      : "text-gray-700 hover:bg-gray-50 hover:text-emerald-600"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span>{item.name}</span>
                </Link>
              ))}

              {/* Settings */}
              <Link
                href="/settings"
                className="flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-emerald-600 transition-all duration-200 group"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-lg">⚙️</span>
                <span>Settings</span>
              </Link>
            </nav>
          </div>

          {/* User Profile - Fixed at bottom */}
          <div className="flex-shrink-0 p-4 border-t border-gray-100">
            <Link
              href="/profile"
              className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-colors group"
              onClick={() => setIsOpen(false)}
            >
              <div className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center shadow-sm">
                <span className="text-sm font-medium text-white">AY</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-gray-900 truncate">
                  Ankit Yadav
                </p>
                <p className="text-sm text-gray-500 truncate">
                  ankit.yadav@hiron...
                </p>
              </div>
            </Link>
          </div>
        </div>
      </aside>

      {/* Main content spacer for desktop */}
      <div className="hidden lg:block w-80 flex-shrink-0" />
    </>
  );
};

export default Sidebar;