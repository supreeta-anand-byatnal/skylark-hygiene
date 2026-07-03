import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Skylark Hygiene Solutions | Commercial Hygiene Products - Bangalore",
  description:
    "Supplying dustbins, dispensers, hand dryers, air curtains, housekeeping trolleys and hygiene solutions for offices, hospitals, apartments, hotels and industries across India.",
  metadataBase: new URL("https://skylarkhygiene.com"),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Skylark Hygiene Solutions",
    description:
      "Commercial hygiene & housekeeping products for offices, hospitals, apartments, hotels and industries. Bangalore, India.",
    url: "https://skylarkhygiene.com",
    siteName: "Skylark Hygiene Solutions",
    images: [
      {
        url: "/og-image.png",
        width: 800,
        height: 800,
        alt: "Skylark Hygiene Solutions Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Skylark Hygiene Solutions",
    description:
      "Commercial hygiene & housekeeping products - Bangalore, India.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
