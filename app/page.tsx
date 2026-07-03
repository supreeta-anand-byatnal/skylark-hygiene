import Image from "next/image";
import Link from "next/link";

const productCategories = [
  {
    name: "Aerosol Dispensers",
    description: "Automatic air freshener dispensers for offices, lobbies, and restrooms.",
    icon: "🌬️",
  },
  {
    name: "Soap Dispensers",
    description: "Manual and automatic soap dispensers for hygiene-conscious workplaces.",
    icon: "🧴",
  },
  {
    name: "Paper Towel Dispensers",
    description: "Tissue and paper towel dispensers for restrooms and kitchens.",
    icon: "🧻",
  },
  {
    name: "Hand Dryers",
    description: "High-speed automatic hand dryers for commercial restrooms.",
    icon: "💨",
  },
  {
    name: "Dustbins & Trash Bins",
    description: "SS hygiene bins, garbage bins, and waste management solutions.",
    icon: "🗑️",
  },
  {
    name: "Air Curtains",
    description: "Industrial air curtains for entrances to keep dust and insects out.",
    icon: "🌀",
  },
  {
    name: "Housekeeping Trolleys",
    description: "SS trolleys and janitorial carts for hotels and hospitals.",
    icon: "🛒",
  },
  {
    name: "Shoe Shine Machines",
    description: "Automatic shoe shine and polish machines for lobbies and offices.",
    icon: "👞",
  },
  {
    name: "Fly Catchers & Insect Killers",
    description: "UV fly catchers and insect killer lights for food areas and kitchens.",
    icon: "🪰",
  },
];

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-[#1a5c3a] text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="flex items-center gap-6 mb-10">
            <div className="w-[110px] h-[110px] flex-shrink-0 bg-white rounded-full shadow-lg overflow-hidden flex items-center justify-center">
              <Image
                src="/logo.png"
                alt="Skylark Hygiene Solutions"
                width={100}
                height={100}
                className="object-contain"
                priority
                unoptimized
              />
            </div>

            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Skylark Hygiene Solutions
              </h1>
              <p className="text-green-200 mt-2 text-lg tracking-wide">
                A healthy working environment for everyone
              </p>
            </div>
          </div>

          <div className="max-w-3xl">
            <p className="text-xl text-green-100 leading-relaxed">
              Supplying dustbins, dispensers, hand dryers, air curtains,
              housekeeping trolleys and hygiene solutions for offices,
              hospitals, apartments, hotels and industries across India.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="https://wa.me/919663807008"
                className="bg-white text-[#1a5c3a] hover:bg-green-50 px-6 py-3 rounded-lg font-semibold transition"
              >
                Get Quote on WhatsApp
              </a>
              <a
                href="tel:+919663807008"
                className="border-2 border-white text-white hover:bg-white hover:text-[#1a5c3a] px-6 py-3 rounded-lg font-medium transition"
              >
                Call +91 96638 07008
              </a>
            </div>
            <div className="flex flex-wrap gap-4 mt-6 text-sm text-green-200">
              <span className="border border-green-200/40 px-3 py-1 rounded-full">👩‍💼 Woman-Owned Business</span>
              <span className="border border-green-200/40 px-3 py-1 rounded-full">📅 Since 2012</span>
              <span className="border border-green-200/40 px-3 py-1 rounded-full">🇮🇳 Pan India Delivery</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By */}
      <section className="py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm text-gray-400 uppercase tracking-wider font-semibold mb-6">Trusted by 100+ businesses since 2012</p>
          <div className="flex flex-wrap justify-center gap-8 text-gray-500 text-sm">
            <span className="flex items-center gap-2">🏢 Corporate Offices</span>
            <span className="flex items-center gap-2">🏥 Hospitals & Clinics</span>
            <span className="flex items-center gap-2">🏨 Hotels & Resorts</span>
            <span className="flex items-center gap-2">🏬 Shopping Malls</span>
            <span className="flex items-center gap-2">🏫 Educational Institutions</span>
            <span className="flex items-center gap-2">🏭 Industries</span>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4 text-[#1a5c3a]">Our Product Catalogue</h2>
          <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
            Commercial grade hygiene and housekeeping products for every workspace
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories.map((cat) => (
              <Link
                key={cat.name}
                href="/products"
                className="group border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-[#1a5c3a]/30 active:shadow-lg active:border-[#1a5c3a]/30 transition"
              >
                <div className="text-3xl mb-3">{cat.icon}</div>
                <h3 className="text-lg font-semibold text-slate-800 group-hover:text-[#1a5c3a] transition">
                  {cat.name}
                </h3>
                <p className="text-gray-500 mt-2 text-sm leading-relaxed">
                  {cat.description}
                </p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/products"
              className="inline-block bg-[#1a5c3a] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#154f32] transition"
            >
              View Full Catalogue →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Why Skylark?</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "✅", title: "Quality Products", desc: "Premium commercial-grade products from trusted manufacturers" },
              { icon: "📦", title: "Bulk Supply", desc: "Large quantity orders for offices, hospitals & industries" },
              { icon: "🏢", title: "Commercial Solutions", desc: "Tailored solutions for hotels, apartments & workplaces" },
              { icon: "🚚", title: "Fast Delivery", desc: "Quick delivery across India" },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1a5c3a] text-white py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold">Need a Quote?</h2>
          <p className="mt-4 text-lg text-green-100">
            Contact us for bulk orders and commercial enquiries.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/919663807008"
              className="bg-white text-[#1a5c3a] px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition"
            >
              WhatsApp Us
            </a>
            <a
              href="tel:+919663807008"
              className="border-2 border-white text-white hover:bg-white hover:text-[#1a5c3a] px-6 py-3 rounded-lg font-medium transition"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
