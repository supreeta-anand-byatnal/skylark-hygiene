"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-[45px] h-[45px] flex-shrink-0 overflow-hidden flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="Skylark Hygiene"
              width={45}
              height={45}
              className="object-contain"
              unoptimized
            />
          </div>
          <span className="font-bold text-lg text-[#1a5c3a]">Skylark Hygiene</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  isActive
                    ? "text-[#5c1010] font-bold"
                    : "text-slate-700 hover:text-[#5c1010] transition"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <a
          href="https://wa.me/919663807006"
          className="hidden md:inline-block bg-[#1a5c3a] text-white text-sm px-4 py-2 rounded-lg font-medium hover:bg-[#154f32] transition"
        >
          Get Quote
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-slate-700 transition-all ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-6 h-0.5 bg-slate-700 transition-all ${mobileMenuOpen ? "opacity-0" : ""}`} />
          <span className={`w-6 h-0.5 bg-slate-700 transition-all ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 space-y-3">
          {links.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block text-base font-medium py-1 ${
                  isActive
                    ? "text-[#5c1010] font-bold"
                    : "text-slate-700"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href="https://wa.me/919663807006"
            className="block mt-3 text-center bg-[#1a5c3a] text-white text-sm px-4 py-2.5 rounded-lg font-medium"
          >
            Get Quote on WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
}
