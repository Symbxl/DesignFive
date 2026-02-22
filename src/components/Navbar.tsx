"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Process", href: "/process" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link href="/" className="relative z-10">
          <Image
            src={
              scrolled
                ? "/images/D5S_LOGO_square_black.png"
                : "/images/D5S_LOGO_white.png"
            }
            alt="Design Five Studio"
            width={scrolled ? 36 : 52}
            height={scrolled ? 36 : 26}
            priority
            className="transition-all duration-500"
          />
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-[13px] font-semibold uppercase tracking-[0.12em] transition-colors ${
                scrolled
                  ? "text-[#52525b] hover:text-[#ff6600]"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full bg-[#ff6600] px-7 py-2.5 text-[13px] font-bold uppercase tracking-wider text-white transition-all hover:bg-[#ff8533] hover:shadow-lg hover:shadow-[#ff6600]/25"
          >
            Let&apos;s Talk
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`relative z-10 md:hidden ${
            scrolled ? "text-black" : "text-white"
          }`}
          aria-label="Menu"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 bg-white transition-all duration-500 md:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="text-3xl font-black uppercase tracking-tight text-[#0c0c0c] hover:text-[#ff6600] transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 rounded-full bg-[#ff6600] px-10 py-3 text-sm font-bold uppercase tracking-wider text-white"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </div>
    </nav>
  );
}
