import Reveal from "@/components/Reveal";
import Link from "next/link";
import {
  Palette,
  Megaphone,
  Package,
  Eye,
  Target,
  Type,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Services | Design 5 Studio",
  description:
    "Brand identity, marketing design, packaging, art direction, campaign design, and custom typography.",
};

const services = [
  {
    icon: <Palette size={24} />,
    title: "Brand Identity",
    desc: "Distinctive visual elements that capture the essence of your brand. We build complete brand systems including logos, color palettes, typography, and brand guidelines that ensure consistency across every touchpoint.",
    num: "01",
  },
  {
    icon: <Megaphone size={24} />,
    title: "Marketing Design",
    desc: "Visual assets used to promote a product, service, or brand across various channels. From social media graphics to digital ads and email campaigns, we create materials that convert.",
    num: "02",
  },
  {
    icon: <Package size={24} />,
    title: "Packaging Design",
    desc: "Visual and structural design of product packaging to make it functional and visually appealing. We design packaging that stands out on shelves and creates a memorable unboxing experience.",
    num: "03",
  },
  {
    icon: <Eye size={24} />,
    title: "Art Direction",
    desc: "Guiding visual style and creative vision of a project to ensure it aligns with the intended message. We oversee the creative direction of photoshoots, campaigns, and brand content.",
    num: "04",
  },
  {
    icon: <Target size={24} />,
    title: "Campaign Design",
    desc: "Strategic planning and creation of visual and messaging elements. We develop cohesive campaign materials that tell a story and drive results across multiple platforms.",
    num: "05",
  },
  {
    icon: <Type size={24} />,
    title: "Custom Typography",
    desc: "Designing bespoke typefaces and lettering for unique brand expressions. Custom type gives your brand a voice that's impossible to replicate and instantly recognizable.",
    num: "06",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page header */}
      <Reveal as="div" className="bg-[#0c0c0c] pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <span className="text-[13px] font-bold uppercase tracking-[0.2em] text-[#ff6600]">
            What We Do
          </span>
          <h1 className="mt-3 text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
            Our Services
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/40">
            From concept to execution, we offer a full range of creative
            services to elevate your brand and make you stand out.
          </p>
        </div>
      </Reveal>

      {/* Services grid */}
      <Reveal className="py-28 lg:py-36 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.num}
                className="group relative overflow-hidden rounded-2xl border border-[#e4e4e7] bg-white p-8 lg:p-10 transition-all duration-500 hover:border-[#ff6600]/40 hover:shadow-2xl hover:shadow-[#ff6600]/[0.06] hover:-translate-y-1"
              >
                <span className="absolute -right-2 -top-4 text-8xl font-black text-[#f4f4f5] transition-colors duration-500 group-hover:text-[#ff6600]/[0.08] select-none">
                  {s.num}
                </span>
                <div className="relative">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#0c0c0c] text-white transition-colors duration-500 group-hover:bg-[#ff6600]">
                    {s.icon}
                  </div>
                  <h2 className="text-xl font-bold text-[#18181b] mb-3">
                    {s.title}
                  </h2>
                  <p className="text-[15px] leading-relaxed text-[#71717a]">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* CTA */}
      <Reveal className="py-20 lg:py-28 bg-[#fafafa]">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
            Ready to get started?
          </h2>
          <p className="mt-4 text-[17px] text-[#71717a] leading-relaxed">
            Let&apos;s discuss how we can help bring your brand vision to life.
          </p>
          <Link
            href="/contact"
            className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#ff6600] px-10 py-4 text-[13px] font-bold uppercase tracking-wider text-white transition-all hover:bg-[#ff8533] hover:shadow-xl hover:shadow-[#ff6600]/20"
          >
            Let&apos;s Talk
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
