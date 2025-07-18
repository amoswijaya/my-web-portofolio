"use client";

import { useTheme } from "./themeProvider";
import { useState } from "react";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleToggle = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    toggleTheme();
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <button
      onClick={handleToggle}
      disabled={isAnimating}
      className="
        relative flex items-center justify-center
        w-14 h-7 rounded-full
        bg-gradient-to-r from-gray-200 to-gray-300
        dark:from-gray-700 dark:to-gray-800
        border border-gray-300 dark:border-gray-600
        transition-all duration-500 ease-in-out
        hover:scale-105 active:scale-95
        hover:shadow-lg dark:hover:shadow-gray-900/50
        focus:outline-none focus:ring-2 focus:ring-offset-2 
        focus:ring-blue-500 focus:ring-offset-white dark:focus:ring-offset-gray-900
        cursor-pointer
      "
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {/* Background Glow Effect */}
      <div
        className={`
          absolute inset-0 rounded-full
          transition-opacity duration-500 ease-in-out
          ${
            theme === "light"
              ? "bg-yellow-400/20 opacity-0"
              : "bg-blue-400/20 opacity-100"
          }
        `}
      />

      {/* Toggle Circle with Icon Inside */}
      <div
        className={`
          absolute w-6 h-6 rounded-full
          bg-white dark:bg-gray-900
          border border-gray-300 dark:border-gray-600
          shadow-md dark:shadow-lg dark:shadow-black/30
          transition-all duration-500 ease-in-out
          flex items-center justify-center
          ${
            theme === "light"
              ? "translate-x-[-10px] rotate-0"
              : "translate-x-[10px] rotate-180"
          }
        `}
      >
        {/* Inner Icon */}
        <div className="relative w-3.5 h-3.5">
          {/* Sun rays (visible in light mode) */}
          <div
            className={`
              absolute inset-0 transition-all duration-500
              ${
                theme === "light"
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-0"
              }
            `}
          >
            <svg
              className="w-full h-full text-yellow-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 18a6 6 0 100-12 6 6 0 000 12zM12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
            </svg>
          </div>

          {/* Moon (visible in dark mode) */}
          <div
            className={`
              absolute inset-0 transition-all duration-500
              ${
                theme === "dark" ? "opacity-100 scale-100" : "opacity-0 scale-0"
              }
            `}
          >
            <svg
              className="w-full h-full text-blue-400"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Stars (only visible in dark mode) */}
      <div
        className={`
          absolute inset-0 overflow-hidden rounded-full
          transition-opacity duration-500
          ${theme === "dark" ? "opacity-100" : "opacity-0"}
        `}
      >
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className={`
              absolute w-0.5 h-0.5 bg-white rounded-full
              animate-pulse
            `}
            style={{
              left: `${20 + i * 25}%`,
              top: `${30 + (i % 2) * 40}%`,
              animationDelay: `${i * 200}ms`,
              animationDuration: "2s",
            }}
          />
        ))}
      </div>
    </button>
  );
};
