import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Design 5 Studios",
  description:
    "Design 5 Studios focuses on making your brand stand out. Personal branding, product branding or getting your business noticed is our number one goal.",
  keywords: [
    "branding",
    "design studio",
    "logo design",
    "brand identity",
    "marketing design",
    "packaging design",
  ],
  openGraph: {
    title: "Design 5 Studios",
    description:
      "Making your brand stand out. Personal branding, product branding or getting your business noticed is our number one goal.",
    images: [
      {
        url: "/images/D5S_LOGO_square_black.png",
        width: 512,
        height: 512,
        alt: "Design 5 Studios",
      },
    ],
    siteName: "Design 5 Studios",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Design 5 Studios",
    description:
      "Making your brand stand out. Personal branding, product branding or getting your business noticed is our number one goal.",
    images: ["/images/D5S_LOGO_square_black.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
