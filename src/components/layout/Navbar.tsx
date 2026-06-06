"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Úvod" },
  { href: "/menu", label: "Menu" },
  { href: "/o-nas", label: "O nás" },
  { href: "/galerie", label: "Galerie" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-krem/95 backdrop-blur-sm border-b border-zlata/20">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-2xl">🌾</span>
          <span className="font-heading text-xl font-bold text-kava group-hover:text-zlata transition-colors duration-300">
            U Zlatého klasu
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-300 relative after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:bg-zlata after:transition-all after:duration-300 ${
                  isActive
                    ? "text-zlata after:w-full"
                    : "text-kava/80 hover:text-zlata after:w-0 hover:after:w-full"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/kontakt"
            className="bg-zlata text-krem text-sm font-medium px-5 py-2 rounded-full hover:bg-cihlova transition-colors duration-300"
          >
            Objednat
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-kava transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-kava transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-kava transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-96" : "max-h-0"}`}>
        <nav className="flex flex-col px-6 pb-6 gap-4 bg-krem border-t border-zlata/20">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`transition-colors duration-300 py-1 font-medium ${
                  isActive ? "text-zlata" : "text-kava/80 hover:text-zlata"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/kontakt"
            onClick={() => setOpen(false)}
            className="bg-zlata text-krem text-sm font-medium px-5 py-2 rounded-full hover:bg-cihlova transition-colors duration-300 text-center"
          >
            Objednat
          </Link>
        </nav>
      </div>
    </header>
  );
}
