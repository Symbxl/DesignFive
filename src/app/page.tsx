"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import {
  ArrowRight,
  MoveRight,
  Palette,
  Megaphone,
  Package,
  Mail,
  MapPin,
} from "lucide-react";

export default function Home() {
  return (
    <>
      {/* ============================================================ */}
      {/*  HERO                                                        */}
      {/* ============================================================ */}
      <div className="relative min-h-screen overflow-hidden bg-[#0c0c0c]">
        <video
          src="/background.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />

        <header className="relative flex min-h-screen items-center">
          <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:px-10">
            <div className="pt-32 lg:pt-0">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 anim-fade-up">
                <span className="h-1.5 w-1.5 rounded-full bg-[#ff6600]" />
                <span className="text-xs font-semibold uppercase tracking-widest text-white/50">
                  Design 5 Studio
                </span>
              </div>

              <h1 className="text-[clamp(3.5rem,8vw,7.5rem)] font-black leading-[0.88] tracking-[-0.04em] text-white anim-fade-up d200">
                Get<br />
                <span className="text-[#ff6600]">Noticed.</span>
              </h1>

              <p className="mt-5 text-lg font-medium italic text-white/30 anim-fade-up d400">
                &ldquo;We&apos;re all just a bunch of fish in a pond.&rdquo;
              </p>

              <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-white/50 anim-fade-up d500">
                Design 5 Studio focuses on making your brand stand out. Personal
                branding, product branding or getting your business noticed is
                our number one goal when creating a presence.
              </p>

              <div className="mt-10 flex flex-wrap gap-4 anim-fade-up d600">
                <Link
                  href="/contact"
                  className="group flex items-center gap-3 rounded-full bg-[#ff6600] px-8 py-4 text-[13px] font-bold uppercase tracking-wider text-white transition-all hover:bg-[#ff8533] hover:shadow-xl hover:shadow-[#ff6600]/20"
                >
                  Make a Splash
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
                <Link
                  href="/portfolio"
                  className="flex items-center gap-3 rounded-full border border-white/15 px-8 py-4 text-[13px] font-bold uppercase tracking-wider text-white/70 transition-all hover:border-white/40 hover:text-white"
                >
                  View Portfolio
                </Link>
              </div>
            </div>

            <div className="hidden lg:block" />
          </div>

          {/* Bottom bar */}
          <div className="absolute inset-x-0 bottom-0 border-t border-white/[0.06]">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
              <span className="text-[11px] uppercase tracking-[0.2em] text-white/20">
                Fairfax, Virginia
              </span>
              <span className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-white/20">
                Scroll to explore
                <MoveRight size={14} />
              </span>
            </div>
          </div>
        </header>
      </div>

      {/* ============================================================ */}
      {/*  MARQUEE                                                     */}
      {/* ============================================================ */}
      <div className="overflow-hidden border-b border-[#e4e4e7] bg-[#fafafa] py-4">
        <div className="anim-marquee flex w-max gap-12">
          {[
            "Brand Identity",
            "Marketing Design",
            "Packaging Design",
            "Art Direction",
            "Campaign Design",
            "Custom Typography",
            "Brand Identity",
            "Marketing Design",
            "Packaging Design",
            "Art Direction",
            "Campaign Design",
            "Custom Typography",
          ].map((t, i) => (
            <span
              key={i}
              className="flex items-center gap-4 whitespace-nowrap text-sm font-bold uppercase tracking-widest text-[#d4d4d8]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#ff6600]" />
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* ============================================================ */}
      {/*  SERVICES PREVIEW (3 cards + link)                           */}
      {/* ============================================================ */}
      <Reveal className="py-28 lg:py-36 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between mb-16">
            <div>
              <span className="text-[13px] font-bold uppercase tracking-[0.2em] text-[#ff6600]">
                What We Do
              </span>
              <h2 className="mt-2 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
                Services
              </h2>
            </div>
            <p className="max-w-md text-[15px] leading-relaxed text-[#71717a]">
              From concept to execution, we offer a full range of creative
              services to elevate your brand.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Palette size={24} />,
                title: "Brand Identity",
                desc: "Distinctive visual elements that capture the essence of your brand.",
                num: "01",
              },
              {
                icon: <Megaphone size={24} />,
                title: "Marketing Design",
                desc: "Visual assets used to promote a product, service, or brand across various channels.",
                num: "02",
              },
              {
                icon: <Package size={24} />,
                title: "Packaging Design",
                desc: "Visual and structural design of product packaging to make it functional and visually appealing.",
                num: "03",
              },
            ].map((s) => (
              <div
                key={s.num}
                className="group relative overflow-hidden rounded-2xl border border-[#e4e4e7] bg-white p-8 transition-all duration-500 hover:border-[#ff6600]/40 hover:shadow-2xl hover:shadow-[#ff6600]/[0.06] hover:-translate-y-1"
              >
                <span className="absolute -right-2 -top-4 text-8xl font-black text-[#f4f4f5] transition-colors duration-500 group-hover:text-[#ff6600]/[0.08] select-none">
                  {s.num}
                </span>
                <div className="relative">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#0c0c0c] text-white transition-colors duration-500 group-hover:bg-[#ff6600]">
                    {s.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#18181b] mb-2">
                    {s.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#71717a]">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="group inline-flex items-center gap-3 text-[13px] font-bold uppercase tracking-wider text-[#ff6600] hover:text-[#ff8533] transition-colors"
            >
              View All Services
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </Reveal>

      {/* ============================================================ */}
      {/*  FEATURED PROJECT                                            */}
      {/* ============================================================ */}
      <Reveal className="py-28 lg:py-36 bg-[#fafafa]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-16 text-center">
            <span className="text-[13px] font-bold uppercase tracking-[0.2em] text-[#ff6600]">
              Our Work
            </span>
            <h2 className="mt-2 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Featured Project
            </h2>
          </div>

          <div className="group overflow-hidden rounded-3xl bg-white shadow-sm border border-[#e4e4e7] transition-all duration-500 hover:shadow-xl">
            <div className="grid lg:grid-cols-5">
              <div className="relative lg:col-span-3 aspect-[4/3] lg:aspect-auto overflow-hidden">
                <Image
                  src="/images/WLC_mockup.png"
                  alt="Watson's Landscaping – logo, door hanger, business card, and t-shirt"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-green-700" />
              </div>
              <div className="flex flex-col justify-center p-8 lg:col-span-2 lg:p-12">
                <span className="mb-3 inline-block w-fit rounded-full bg-green-50 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-green-600">
                  Rebrand
                </span>
                <h3 className="text-2xl font-black sm:text-3xl">
                  Watson&apos;s Landscaping
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-[#71717a]">
                  Landscape and contracting services rebrand. The monogram
                  &quot;W&quot; features a swoop signifying hills and leaves for
                  nature, paired with clean, commercial-style fonts.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["Logo Design", "Business Cards", "Merchandise", "Door Hangers", "Tear-off Cards"].map(
                    (t) => (
                      <span
                        key={t}
                        className="rounded-full bg-[#f4f4f5] px-3 py-1 text-[11px] font-semibold text-[#52525b]"
                      >
                        {t}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-3 text-[13px] font-bold uppercase tracking-wider text-[#ff6600] hover:text-[#ff8533] transition-colors"
            >
              View All Projects
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </Reveal>

      {/* ============================================================ */}
      {/*  CTA                                                         */}
      {/* ============================================================ */}
      <Reveal className="py-28 lg:py-36 bg-[#0c0c0c] relative noise">
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-10">
          <span className="text-[13px] font-bold uppercase tracking-[0.2em] text-[#ff6600]">
            Get In Touch
          </span>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.05]">
            Let&apos;s Create Something{" "}
            <span className="text-[#ff6600]">Extraordinary</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-relaxed text-white/40">
            From initial concept to final execution, we&apos;re here to
            transform your vision into compelling visual experiences that deliver
            real business impact.
          </p>

          <div className="mt-10 flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
            <a
              href="mailto:contact@design5studios.com"
              className="flex items-center gap-3 text-white/50 hover:text-[#ff6600] transition-colors"
            >
              <Mail size={18} />
              contact@design5studios.com
            </a>
            <span className="hidden sm:inline text-white/10">|</span>
            <span className="flex items-center gap-3 text-white/50">
              <MapPin size={18} />
              Fairfax, Virginia
            </span>
          </div>

          <Link
            href="/contact"
            className="group mt-12 inline-flex items-center gap-3 rounded-full bg-[#ff6600] px-12 py-5 text-base font-bold uppercase tracking-wider text-white transition-all hover:bg-[#ff8533] hover:shadow-2xl hover:shadow-[#ff6600]/30"
          >
            Let&apos;s Talk
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </Reveal>
    </>
  );
}
