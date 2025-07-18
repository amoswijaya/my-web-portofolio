"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dialog } from "@headlessui/react";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";

const Header = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Project", href: "/project" },
    { name: "Experience", href: "/experience" },
  ];

  const NavLink = ({ item }: { item: (typeof navItems)[0] }) => {
    const isActive = pathname === item.href;
    return (
      <Link
        href={item.href}
        onClick={() => setMobileMenuOpen(false)}
        className={`
          block rounded-lg px-3 py-2 text-base font-medium
          transition-all duration-200
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
          dark:focus:ring-offset-gray-900
          ${
            isActive
              ? "bg-blue-500 text-white shadow-md"
              : "text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800"
          }
        `}
      >
        {item.name}
      </Link>
    );
  };

  return (
    <header className="bg-surface border-b border-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
          >
            My Portfolio
          </Link>

          <nav className="hidden lg:flex lg:gap-4">
            {navItems.map((item) => (
              <NavLink key={item.href} item={item} />
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {/* <ThemeToggle /> */}

            <div className="lg:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open menu</span>
                <HamburgerMenuIcon className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full max-w-xs bg-white dark:bg-gray-900 p-6 shadow-xl">
          <div className="flex items-center justify-between">
            <Dialog.Title className="text-lg font-semibold">Menu</Dialog.Title>
            <button
              type="button"
              className="rounded-md p-2 hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <Cross1Icon className="h-6 w-6" />
            </button>
          </div>

          <nav className="mt-6 flex flex-col gap-3">
            {navItems.map((item) => (
              <NavLink key={item.href} item={item} />
            ))}
          </nav>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Header;
