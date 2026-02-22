import Reveal from "@/components/Reveal";
import Link from "next/link";
import {
  Search,
  Lightbulb,
  PenTool,
  Layers,
  Rocket,
  BarChart3,
  ArrowRight,
} from "lucide-react";

export const metadata = {
  title: "Process | Design 5 Studio",
  description:
    "Our proven 6-step creative process — from discovery to launch and beyond.",
};

const steps = [
  {
    icon: <Search size={22} />,
    title: "Discovery",
    desc: "We start by understanding your brand, audience, and goals. Through in-depth research and competitive analysis, we uncover insights that inform every creative decision.",
    num: "01",
  },
  {
    icon: <Lightbulb size={22} />,
    title: "Strategy",
    desc: "We develop a clear creative strategy that aligns with your business objectives. This blueprint guides every design choice, ensuring consistency and purpose.",
    num: "02",
  },
  {
    icon: <PenTool size={22} />,
    title: "Concept",
    desc: "Our team explores multiple creative directions, sketching and ideating to find the perfect visual language that captures your brand's essence.",
    num: "03",
  },
  {
    icon: <Layers size={22} />,
    title: "Design",
    desc: "We refine and develop the chosen concept into polished, production-ready designs. Every detail is carefully considered to ensure maximum impact.",
    num: "04",
  },
  {
    icon: <Rocket size={22} />,
    title: "Deliver",
    desc: "All final assets are prepared and delivered in the formats you need. We ensure everything is optimized for its intended platform and use case.",
    num: "05",
  },
  {
    icon: <BarChart3 size={22} />,
    title: "Evolve",
    desc: "Great design is never truly finished. We monitor performance, gather feedback, and continuously refine to keep your brand growing and relevant.",
    num: "06",
  },
];

export default function ProcessPage() {
  return (
    <>
      {/* Page header */}
      <Reveal as="div" className="bg-[#0c0c0c] pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <span className="text-[13px] font-bold uppercase tracking-[0.2em] text-[#ff6600]">
            How We Work
          </span>
          <h1 className="mt-3 text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
            Our Process
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/40">
            Every great brand starts with a clear process. Here&apos;s how we take
            your vision from concept to reality.
          </p>
        </div>
      </Reveal>

      {/* Timeline */}
      <Reveal className="py-28 lg:py-36 bg-[#0c0c0c]">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          {/* Vertical connecting line (desktop only) */}
          <div className="relative">
            <div className="pointer-events-none absolute left-1/2 top-0 bottom-0 hidden w-px -translate-x-1/2 bg-gradient-to-b from-[#ff6600]/30 via-white/[0.06] to-[#ff6600]/30 lg:block" />

            <div className="space-y-12 lg:space-y-0">
              {steps.map((step, i) => {
                const isEven = i % 2 === 0;
                return (
                  <Reveal key={step.num}>
                    <div
                      className={`flex flex-col items-center gap-8 lg:flex-row ${
                        !isEven ? "lg:flex-row-reverse" : ""
                      }`}
                    >
                      {/* Content card */}
                      <div className="w-full lg:w-[calc(50%-40px)]">
                        <div className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 backdrop-blur-sm transition-all duration-500 hover:border-[#ff6600]/30 hover:bg-white/[0.04] hover:shadow-lg hover:shadow-[#ff6600]/[0.04]">
                          <div className="mb-4 flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#ff6600]/10 text-[#ff6600] transition-all duration-500 group-hover:bg-[#ff6600] group-hover:text-white">
                              {step.icon}
                            </div>
                            <span className="text-5xl font-black text-white transition-colors duration-500 group-hover:text-[#ff6600] select-none">
                              {step.num}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-white mb-2">
                            {step.title}
                          </h3>
                          <p className="text-[15px] leading-relaxed text-white/40">
                            {step.desc}
                          </p>
                        </div>
                      </div>

                      {/* Center node */}
                      <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[#ff6600] bg-[#0c0c0c] text-[11px] font-black text-white">
                        {step.num}
                      </div>

                      {/* Spacer for opposite side */}
                      <div className="hidden w-[calc(50%-40px)] lg:block" />
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </Reveal>

      {/* CTA */}
      <Reveal className="py-20 lg:py-28 bg-[#fafafa]">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
            Ready to start your project?
          </h2>
          <p className="mt-4 text-[17px] text-[#71717a] leading-relaxed">
            Let&apos;s walk through this process together and bring your brand to life.
          </p>
          <Link
            href="/contact"
            className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#ff6600] px-10 py-4 text-[13px] font-bold uppercase tracking-wider text-white transition-all hover:bg-[#ff8533] hover:shadow-xl hover:shadow-[#ff6600]/20"
          >
            Get Started
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
