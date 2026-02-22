import Reveal from "@/components/Reveal";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";

export const metadata = {
  title: "Portfolio | Design 5 Studio",
  description:
    "Explore our latest projects — brand identities, packaging, and marketing design that make brands stand out.",
};

const projects = [
  {
    slug: "watsons-landscaping",
    title: "Watson's Landscaping",
    category: "Rebrand",
    color: "green",
    image: "/images/WLC_mockup.png",
    desc: "Landscape and contracting services rebrand. The monogram \"W\" features a swoop signifying hills and leaves for nature, paired with clean, commercial-style fonts.",
    tags: ["Logo Design", "Business Cards", "Merchandise", "Door Hangers", "Tear-off Cards"],
    accent: "from-green-500 to-green-700",
    badge: "bg-green-50 text-green-600",
  },
  {
    slug: "weblead-systems",
    title: "WebLead Systems",
    category: "Branding",
    color: "purple",
    image: "/images/WLS_branding_mockup.png",
    desc: "WebLead Systems helps car dealerships manage inventory and create customer-facing websites. We crafted a clean, modern identity that communicates trust and technology.",
    tags: ["Brand Identity", "Logo Design", "Web Design", "Style Guide"],
    accent: "from-purple-500 to-purple-700",
    badge: "bg-purple-50 text-purple-600",
  },
  {
    slug: "monster-armaments",
    title: "Monster Armaments",
    category: "Brand Identity",
    color: "red",
    image: "/images/MA_mockup.png",
    desc: "A bold, aggressive identity for a firearms and tactical gear company. The mark combines a monster silhouette with precision crosshairs, built for impact.",
    tags: ["Logo Design", "Brand Identity", "Packaging", "Apparel"],
    accent: "from-red-500 to-red-700",
    badge: "bg-red-50 text-red-600",
  },
];

const testimonials = [
  {
    quote:
      "Design 5 Studio completely transformed our brand. The new identity perfectly captures what we're about — professional, clean, and memorable.",
    author: "Watson's Landscaping",
  },
  {
    quote:
      "They understood our vision from day one and delivered beyond expectations. Our new branding has been a game-changer for how clients perceive us.",
    author: "WebLead Systems",
  },
  {
    quote:
      "Bold, aggressive, and exactly what we needed. Design 5 nailed the look and feel of our brand on the first round.",
    author: "Monster Armaments",
  },
];

export default function PortfolioPage() {
  return (
    <>
      {/* Page header */}
      <Reveal as="div" className="bg-[#0c0c0c] pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <span className="text-[13px] font-bold uppercase tracking-[0.2em] text-[#ff6600]">
            Our Work
          </span>
          <h1 className="mt-3 text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
            Portfolio
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/40">
            A selection of our recent work — brands we&apos;ve built, identities
            we&apos;ve crafted, and designs that make an impact.
          </p>
        </div>
      </Reveal>

      {/* Projects */}
      <Reveal as="div" className="py-28 lg:py-36 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="space-y-20">
            {projects.map((p, i) => (
              <Reveal key={p.slug}>
                <div
                  className={`group overflow-hidden rounded-3xl bg-white shadow-sm border border-[#e4e4e7] transition-all duration-500 hover:shadow-xl`}
                >
                  <div
                    className={`grid lg:grid-cols-5 ${
                      i % 2 !== 0 ? "lg:direction-rtl" : ""
                    }`}
                  >
                    <div
                      className={`relative lg:col-span-3 aspect-[4/3] lg:aspect-auto overflow-hidden ${
                        i % 2 !== 0 ? "lg:order-2" : ""
                      }`}
                    >
                      <Image
                        src={p.image}
                        alt={`${p.title} – brand mockup`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div
                        className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${p.accent}`}
                      />
                    </div>
                    <div
                      className={`flex flex-col justify-center p-8 lg:col-span-2 lg:p-12 ${
                        i % 2 !== 0 ? "lg:order-1" : ""
                      }`}
                    >
                      <span
                        className={`mb-3 inline-block w-fit rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-widest ${p.badge}`}
                      >
                        {p.category}
                      </span>
                      <h2 className="text-2xl font-black sm:text-3xl">
                        {p.title}
                      </h2>
                      <p className="mt-3 text-[15px] leading-relaxed text-[#71717a]">
                        {p.desc}
                      </p>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-full bg-[#f4f4f5] px-3 py-1 text-[11px] font-semibold text-[#52525b]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Testimonials */}
      <Reveal className="py-28 lg:py-36 bg-[#fafafa]">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-16 text-center">
            <span className="text-[13px] font-bold uppercase tracking-[0.2em] text-[#ff6600]">
              Client Love
            </span>
            <h2 className="mt-2 text-4xl font-black tracking-tight sm:text-5xl">
              What They Say
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div
                key={t.author}
                className="group rounded-2xl border border-[#e4e4e7] bg-white p-8 transition-all duration-500 hover:border-[#ff6600]/30 hover:shadow-lg hover:shadow-[#ff6600]/[0.04]"
              >
                <Quote
                  size={28}
                  className="mb-4 text-[#ff6600]/30 transition-colors duration-500 group-hover:text-[#ff6600]/60"
                />
                <p className="text-[15px] leading-relaxed text-[#52525b] italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-px flex-1 bg-[#e4e4e7]" />
                  <span className="text-[12px] font-bold uppercase tracking-widest text-[#a1a1aa]">
                    {t.author}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* CTA */}
      <Reveal className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
            Have a project in mind?
          </h2>
          <p className="mt-4 text-[17px] text-[#71717a] leading-relaxed">
            We&apos;d love to hear about it. Let&apos;s create something great together.
          </p>
          <Link
            href="/contact"
            className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#ff6600] px-10 py-4 text-[13px] font-bold uppercase tracking-wider text-white transition-all hover:bg-[#ff8533] hover:shadow-xl hover:shadow-[#ff6600]/20"
          >
            Start a Project
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </Reveal>
    </>
  );
}
