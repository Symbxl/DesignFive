"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Youtube,
  Linkedin,
  ChevronUp,
} from "lucide-react";

const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Process", href: "/process" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#0c0c0c] pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-10 md:grid-cols-4 mb-12">
          {/* Brand */}
          <div>
            <Image
              src="/images/D5S_LOGO_white.png"
              alt="Design Five Studio"
              width={80}
              height={40}
              className="mb-5"
            />
            <p className="text-sm leading-relaxed text-white/30">
              We create bold and unique designs that make brands stand out,
              offering eye-catching visuals and fresh ideas.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-white/60">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/30 hover:text-[#ff6600] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-white/60">
              Services
            </h4>
            <ul className="space-y-2.5">
              {[
                "Brand & Identity",
                "Web & Digital",
                "Print Media",
                "Merch Design",
              ].map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="text-sm text-white/30 hover:text-[#ff6600] transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-widest text-white/60">
              Follow Us
            </h4>
            <div className="flex gap-3">
              {[
                { icon: <Facebook size={16} />, l: "Facebook" },
                { icon: <Twitter size={16} />, l: "Twitter" },
                { icon: <Youtube size={16} />, l: "Youtube" },
                { icon: <Linkedin size={16} />, l: "LinkedIn" },
              ].map((s) => (
                <a
                  key={s.l}
                  href="#"
                  aria-label={s.l}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-white/30 transition-all hover:bg-[#ff6600] hover:text-white"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-8 sm:flex-row">
          <p className="text-xs text-white/20">
            &copy; {new Date().getFullYear()} Design Five Studio. All rights
            reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ff6600] text-white transition-all hover:bg-[#ff8533] hover:shadow-lg hover:shadow-[#ff6600]/20"
            aria-label="Back to top"
          >
            <ChevronUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
}
