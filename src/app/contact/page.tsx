"use client";

import Reveal from "@/components/Reveal";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  ArrowRight,
} from "lucide-react";
import { useState, type FormEvent } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // In production, wire this up to an API route or email service
    setSubmitted(true);
  }

  return (
    <>
      {/* Page header */}
      <div className="bg-[#0c0c0c] pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <span className="text-[13px] font-bold uppercase tracking-[0.2em] text-[#ff6600] anim-fade-up">
            Get In Touch
          </span>
          <h1 className="mt-3 text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl anim-fade-up d200">
            Contact Us
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/40 anim-fade-up d400">
            Have a project in mind? We&apos;d love to hear from you. Drop us a line
            and let&apos;s start creating something extraordinary.
          </p>
        </div>
      </div>

      {/* Contact section */}
      <Reveal className="py-28 lg:py-36 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="grid gap-16 lg:grid-cols-5">
            {/* Contact info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-black tracking-tight sm:text-3xl">
                Let&apos;s Talk
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-[#71717a]">
                Whether you need a complete rebrand or a single design asset,
                we&apos;re here to help. Reach out and let&apos;s discuss how we
                can elevate your brand.
              </p>

              <div className="mt-10 space-y-6">
                <a
                  href="mailto:contact@design5studios.com"
                  className="group flex items-start gap-4 text-[15px] text-[#52525b] hover:text-[#ff6600] transition-colors"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f4f4f5] text-[#71717a] transition-all duration-500 group-hover:bg-[#ff6600] group-hover:text-white">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#a1a1aa]">
                      Email
                    </span>
                    <p className="mt-0.5 font-semibold">
                      contact@design5studios.com
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4 text-[15px] text-[#52525b]">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f4f4f5] text-[#71717a]">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#a1a1aa]">
                      Location
                    </span>
                    <p className="mt-0.5 font-semibold">Fairfax, Virginia</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 text-[15px] text-[#52525b]">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f4f4f5] text-[#71717a]">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#a1a1aa]">
                      Phone
                    </span>
                    <p className="mt-0.5 font-semibold">Available upon request</p>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="mt-10 rounded-2xl border border-[#e4e4e7] bg-[#fafafa] p-6">
                <h3 className="text-[12px] font-bold uppercase tracking-widest text-[#a1a1aa] mb-3">
                  Business Hours
                </h3>
                <div className="space-y-2 text-[14px]">
                  <div className="flex justify-between">
                    <span className="text-[#71717a]">Monday – Friday</span>
                    <span className="font-semibold text-[#18181b]">
                      9:00 AM – 6:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#71717a]">Saturday</span>
                    <span className="font-semibold text-[#18181b]">
                      By Appointment
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#71717a]">Sunday</span>
                    <span className="font-semibold text-[#18181b]">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-3">
              <div className="rounded-3xl border border-[#e4e4e7] bg-[#fafafa] p-8 lg:p-12">
                {submitted ? (
                  <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-50 text-green-600">
                      <Send size={28} />
                    </div>
                    <h3 className="text-2xl font-black">Message Sent!</h3>
                    <p className="mt-3 max-w-sm text-[15px] text-[#71717a]">
                      Thanks for reaching out. We&apos;ll get back to you within
                      24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 text-[13px] font-bold uppercase tracking-wider text-[#ff6600] hover:text-[#ff8533] transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-black mb-2">
                      Send Us a Message
                    </h2>
                    <p className="text-[15px] text-[#71717a] mb-8">
                      Fill out the form below and we&apos;ll get back to you as
                      soon as possible.
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid gap-6 sm:grid-cols-2">
                        <div>
                          <label
                            htmlFor="name"
                            className="mb-2 block text-[12px] font-bold uppercase tracking-widest text-[#a1a1aa]"
                          >
                            Name
                          </label>
                          <input
                            id="name"
                            name="name"
                            type="text"
                            required
                            placeholder="Your name"
                            className="w-full rounded-xl border border-[#e4e4e7] bg-white px-4 py-3.5 text-[15px] text-[#18181b] placeholder:text-[#d4d4d8] outline-none transition-all focus:border-[#ff6600] focus:ring-2 focus:ring-[#ff6600]/10"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="email"
                            className="mb-2 block text-[12px] font-bold uppercase tracking-widest text-[#a1a1aa]"
                          >
                            Email
                          </label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            required
                            placeholder="you@example.com"
                            className="w-full rounded-xl border border-[#e4e4e7] bg-white px-4 py-3.5 text-[15px] text-[#18181b] placeholder:text-[#d4d4d8] outline-none transition-all focus:border-[#ff6600] focus:ring-2 focus:ring-[#ff6600]/10"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="company"
                          className="mb-2 block text-[12px] font-bold uppercase tracking-widest text-[#a1a1aa]"
                        >
                          Company{" "}
                          <span className="normal-case tracking-normal text-[#d4d4d8]">
                            (optional)
                          </span>
                        </label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          placeholder="Your company"
                          className="w-full rounded-xl border border-[#e4e4e7] bg-white px-4 py-3.5 text-[15px] text-[#18181b] placeholder:text-[#d4d4d8] outline-none transition-all focus:border-[#ff6600] focus:ring-2 focus:ring-[#ff6600]/10"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="service"
                          className="mb-2 block text-[12px] font-bold uppercase tracking-widest text-[#a1a1aa]"
                        >
                          Service Interested In
                        </label>
                        <select
                          id="service"
                          name="service"
                          className="w-full rounded-xl border border-[#e4e4e7] bg-white px-4 py-3.5 text-[15px] text-[#18181b] outline-none transition-all focus:border-[#ff6600] focus:ring-2 focus:ring-[#ff6600]/10 appearance-none"
                        >
                          <option value="">Select a service</option>
                          <option value="brand-identity">Brand Identity</option>
                          <option value="marketing-design">
                            Marketing Design
                          </option>
                          <option value="packaging-design">
                            Packaging Design
                          </option>
                          <option value="art-direction">Art Direction</option>
                          <option value="campaign-design">
                            Campaign Design
                          </option>
                          <option value="custom-typography">
                            Custom Typography
                          </option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label
                          htmlFor="message"
                          className="mb-2 block text-[12px] font-bold uppercase tracking-widest text-[#a1a1aa]"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          placeholder="Tell us about your project..."
                          className="w-full rounded-xl border border-[#e4e4e7] bg-white px-4 py-3.5 text-[15px] text-[#18181b] placeholder:text-[#d4d4d8] outline-none transition-all focus:border-[#ff6600] focus:ring-2 focus:ring-[#ff6600]/10 resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="group flex w-full items-center justify-center gap-3 rounded-full bg-[#ff6600] px-10 py-4 text-[13px] font-bold uppercase tracking-wider text-white transition-all hover:bg-[#ff8533] hover:shadow-xl hover:shadow-[#ff6600]/20"
                      >
                        Send Message
                        <ArrowRight
                          size={16}
                          className="transition-transform group-hover:translate-x-1"
                        />
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Map / CTA section */}
      <Reveal className="py-20 lg:py-28 bg-[#0c0c0c] relative noise">
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center lg:px-10">
          <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
            Let&apos;s Create Something{" "}
            <span className="text-[#ff6600]">Extraordinary</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[17px] leading-relaxed text-white/40">
            From initial concept to final execution, we&apos;re here to
            transform your vision into compelling visual experiences that deliver
            real business impact.
          </p>
          <div className="mt-8 flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
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
        </div>
      </Reveal>
    </>
  );
}
