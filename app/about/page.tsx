import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Skylark Hygiene Solutions",
  description:
    "Learn about Skylark Hygiene Solutions — Bangalore's trusted supplier of commercial hygiene and housekeeping products.",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-[#1a5c3a] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">About Skylark Hygiene</h1>
          <p className="mt-4 text-green-100 text-lg">
            A healthy working environment for everyone
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex justify-center mb-10">
            <div className="w-[140px] h-[140px] bg-white rounded-full shadow-md overflow-hidden flex items-center justify-center border-2 border-[#1a5c3a]/20">
              <Image
                src="/logo.png"
                alt="Skylark Hygiene Solutions"
                width={120}
                height={120}
                className="object-contain"
                unoptimized
              />
            </div>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700">
            <h2 className="text-2xl font-bold text-slate-800">Who We Are</h2>
            <p>
              Skylark Hygiene Solutions is a <strong>woman-owned business</strong> based
              in Bangalore, supplying commercial hygiene and housekeeping
              products <strong>since 2012</strong>. We serve offices, hospitals,
              hotels, apartments, industries, and public facilities
              with high-quality products that maintain clean, healthy
              environments.
            </p>

            <h2 className="text-2xl font-bold text-slate-800 mt-10">What We Do</h2>
            <p>
              We supply a comprehensive range of hygiene products including
              aerosol dispensers, soap dispensers, paper towel dispensers,
              automatic hand dryers, dustbins, housekeeping trolleys, air
              curtains, shoe shine machines, fly catchers, SS queue stands, and
              more.
            </p>

            <h2 className="text-2xl font-bold text-slate-800 mt-10">Industries We Serve</h2>
            <div className="grid sm:grid-cols-2 gap-4 not-prose mt-4">
              {[
                "Corporate Offices",
                "Hospitals & Clinics",
                "Hotels & Resorts",
                "Apartment Complexes",
                "Shopping Malls",
                "Restaurants & Food Courts",
                "Educational Institutions",
                "Manufacturing & Industries",
              ].map((industry) => (
                <div
                  key={industry}
                  className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg"
                >
                  <span className="text-[#1a5c3a] font-bold">✓</span>
                  <span className="text-gray-700 font-medium">{industry}</span>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-slate-800 mt-10">Our Promise</h2>
            <div className="grid sm:grid-cols-2 gap-6 not-prose mt-4">
              {[
                {
                  title: "Quality Assured",
                  desc: "Only commercial-grade products from trusted manufacturers",
                },
                {
                  title: "Competitive Pricing",
                  desc: "Best prices for bulk and commercial orders",
                },
                {
                  title: "Expert Guidance",
                  desc: "We help you choose the right products for your space",
                },
                {
                  title: "After-Sales Support",
                  desc: "Continued support with refills, spares, and service",
                },
              ].map((item) => (
                <div key={item.title} className="p-4 border rounded-lg">
                  <h3 className="font-bold text-slate-800">{item.title}</h3>
                  <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-2xl font-bold text-slate-800">
            Let&apos;s work together
          </h2>
          <p className="mt-3 text-gray-500">
            Whether you need products for a new setup or want to upgrade your
            existing hygiene systems, we&apos;re here to help.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/919663807008"
              className="bg-[#1a5c3a] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#154f32] transition"
            >
              WhatsApp Us
            </a>
            <a
              href="tel:+919663807008"
              className="border-2 border-[#1a5c3a] text-[#1a5c3a] px-6 py-3 rounded-lg font-medium hover:bg-[#1a5c3a] hover:text-white transition"
            >
              Call +91 96638 07006
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
