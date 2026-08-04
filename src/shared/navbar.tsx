"use client";

import Link from "next/link";
import { useState } from "react";

type MenuItem = {
  text: string;
  link: string;
};

const HOTLINE_PHONE = "+7 914 167 37 77";
const HOTLINE_PHONE_HREF = "tel:+79141673777";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems: MenuItem[] = [
    { text: "Главная", link: "/" },
    { text: "Наша команда", link: "/volunteers" },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="relative w-full border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        {/* Левый блок */}
        <div className="flex items-center">
          {/* Десктопное меню */}
          {/* <div className="hidden items-center gap-6 md:flex">
            {menuItems.map((item) => (
              <Link
                key={item.link}
                href={item.link}
                className="text-sm font-medium text-slate-700 transition-colors hover:text-orange-500"
              >
                {item.text}
              </Link>
            ))}
          </div> */}

          {/* Бургер */}
          {/* <button
            aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
            className="relative h-6 w-6 md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span
              className={`absolute left-0 block h-0.5 w-6 bg-slate-800 transition-all duration-300 ${
                isOpen ? "top-3 rotate-45" : "top-1"
              }`}
            />

            <span
              className={`absolute left-0 top-3 block h-0.5 w-6 bg-slate-800 transition-all duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />

            <span
              className={`absolute left-0 block h-0.5 w-6 bg-slate-800 transition-all duration-300 ${
                isOpen ? "top-3 -rotate-45" : "top-5"
              }`}
            />
          </button> */}
        </div>

        {/* Правый блок */}
        <a
          href={HOTLINE_PHONE_HREF}
          className="text-right leading-tight"
        >
          <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 sm:text-xs">
            Горячая линия
          </div>

          <div className="text-sm font-bold text-orange-600 sm:text-base">
            {HOTLINE_PHONE}
          </div>
        </a>
      </div>

      {/* Мобильное меню */}
      <div
        className={`absolute left-0 top-full z-50 w-full bg-white shadow-lg transition-all duration-300 ease-out md:hidden ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <div className="border-t border-slate-200 px-4 py-4">
          <div className="flex flex-col">
            {menuItems.map((item) => (
              <Link
                key={item.link}
                href={item.link}
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-orange-50 hover:text-orange-500"
              >
                {item.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}