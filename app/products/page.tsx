import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Catalogue | Skylark Hygiene Solutions",
  description:
    "Browse our full range of commercial hygiene products — dispensers, hand dryers, dustbins, air curtains, trolleys and more.",
};

const catalogue = [
  {
    id: "aerosol",
    name: "Aerosol Dispensers",
    icon: "🌬️",
    description:
      "Automatic and manual aerosol dispensers for maintaining fresh air in offices, hotel lobbies, restrooms, and commercial spaces.",
    features: [
      "Programmable spray intervals",
      "Wall-mounted designs",
      "Refill cartridges available",
      "Battery and electric options",
    ],
  },
  {
    id: "fragrance",
    name: "Fragrance Refills",
    icon: "🌸",
    description:
      "Premium fragrance refills compatible with all major aerosol dispenser brands. Multiple scents available for every environment.",
    features: [
      "Long-lasting formulas",
      "Multiple fragrance options",
      "Eco-friendly variants",
      "Bulk packs available",
    ],
  },
  {
    id: "dispensers",
    name: "Soap Dispensers",
    icon: "🧴",
    description:
      "Manual and automatic soap dispensers in stainless steel and ABS plastic. Designed for high-traffic commercial restrooms.",
    features: [
      "Touchless / sensor-based models",
      "Stainless steel & ABS options",
      "Foam and liquid soap compatible",
      "Anti-drip mechanisms",
    ],
  },
  {
    id: "dryers",
    name: "Automatic Hand Dryers",
    icon: "💨",
    description:
      "High-speed automatic hand dryers that reduce paper waste and operating costs. Ideal for commercial restrooms and kitchens.",
    features: [
      "High-speed drying (10-15 seconds)",
      "Energy efficient motors",
      "HEPA filter options",
      "Vandal-resistant casings",
    ],
  },
  {
    id: "paper",
    name: "Paper Towel Dispensers",
    icon: "🧻",
    description:
      "Tissue and paper towel dispensers for restrooms, kitchens, and food courts. Centre-pull, multi-fold, and roll options.",
    features: [
      "Centre-pull and multi-fold types",
      "Transparent window for refill visibility",
      "Key-lock for controlled usage",
      "ABS and stainless steel bodies",
    ],
  },
  {
    id: "bins",
    name: "Dustbins & Trash Bins",
    icon: "🗑️",
    description:
      "SS hygiene bins, pedal bins, swing-top bins, and garbage bins for waste segregation in offices, hospitals, and public areas.",
    features: [
      "Stainless steel construction",
      "Pedal, push, and sensor-open types",
      "Colour-coded for waste segregation",
      "Multiple sizes (8L to 120L)",
    ],
  },
  {
    id: "wringer",
    name: "Wringer Buckets & Sign Boards",
    icon: "🪣",
    description:
      "Professional mop wringer buckets and wet-floor sign boards for housekeeping teams in hotels, hospitals, and commercial buildings.",
    features: [
      "Heavy-duty wringer mechanism",
      "Double bucket systems",
      "Caution/wet floor signage",
      "Durable commercial grade",
    ],
  },
  {
    id: "trolleys",
    name: "Housekeeping Trolleys",
    icon: "🛒",
    description:
      "Stainless steel housekeeping and janitorial trolleys for hotels, hospitals, and large facilities. Multiple configurations available.",
    features: [
      "SS and powder-coated frames",
      "Multiple shelf configurations",
      "Bag holders and compartments",
      "Smooth-rolling casters",
    ],
  },
  {
    id: "aircurtains",
    name: "Air Curtains",
    icon: "🌀",
    description:
      "Industrial and commercial air curtains for entrances. Keeps dust, insects, and pollutants out while maintaining indoor temperature.",
    features: [
      "Multiple sizes (3ft to 6ft)",
      "High velocity air flow",
      "Low noise operation",
      "Easy installation",
    ],
  },
  {
    id: "shoeshine",
    name: "Auto Shoe Shine / Polish Machines",
    icon: "👞",
    description:
      "Automatic shoe shine machines for hotel lobbies, office receptions, and corporate entrances. Sensor-activated operation.",
    features: [
      "Sensor-activated",
      "Multiple brush types",
      "Built-in polish dispenser",
      "Compact floor-standing design",
    ],
  },
  {
    id: "display",
    name: "SS Display Boards & News Paper Stands",
    icon: "📋",
    description:
      "Stainless steel display boards, notice boards, and newspaper stands for corporate offices, hotels, and public spaces.",
    features: [
      "Premium SS finish",
      "Multiple sizes",
      "Floor-standing and wall-mount",
      "Lockable options",
    ],
  },
  {
    id: "barricades",
    name: "SS Queue Stands & Barricades",
    icon: "🚧",
    description:
      "Stainless steel queue management stands (Q-Up stands) and barricades for banks, airports, hotels, and events.",
    features: [
      "Retractable belt mechanism",
      "Heavy SS base for stability",
      "Multiple belt colours",
      "Rope and belt variants",
    ],
  },
  {
    id: "flycatcher",
    name: "Fly Catchers & Insect Killer Lights",
    icon: "🪰",
    description:
      "UV fly catchers and electric insect killer lights for kitchens, food courts, restaurants, and food processing areas.",
    features: [
      "UV tube attraction technology",
      "Glue board and zapper types",
      "Wall-mount and ceiling-hang options",
      "FSSAI compliant models",
    ],
  },
];

export default function ProductsPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-[#1a5c3a] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Product Catalogue</h1>
          <p className="mt-4 text-green-100 text-lg max-w-2xl mx-auto">
            Complete range of commercial hygiene and housekeeping products for
            offices, hospitals, hotels, apartments, and industries.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-12">
            {catalogue.map((product) => (
              <div
                key={product.id}
                id={product.id}
                className="scroll-mt-24 border border-gray-200 rounded-2xl p-8 hover:shadow-md transition"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="text-5xl">{product.icon}</div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-slate-800">
                      {product.name}
                    </h2>
                    <p className="mt-3 text-gray-600 leading-relaxed">
                      {product.description}
                    </p>
                    <ul className="mt-4 grid sm:grid-cols-2 gap-2">
                      {product.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-center gap-2 text-sm text-gray-600"
                        >
                          <span className="text-[#1a5c3a] font-bold">✓</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <a
                      href={`https://wa.me/919663807006?text=Hi, I'm interested in ${product.name}. Please share details and pricing.`}
                      className="inline-block mt-6 bg-[#1a5c3a] text-white text-sm px-5 py-2.5 rounded-lg font-medium hover:bg-[#154f32] transition"
                    >
                      Enquire on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-2xl font-bold text-slate-800">
            Can&apos;t find what you need?
          </h2>
          <p className="mt-3 text-gray-500">
            We supply a wide range of commercial hygiene products. Contact us
            for custom requirements and bulk orders.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/919663807006"
              className="bg-[#1a5c3a] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#154f32] transition"
            >
              WhatsApp Us
            </a>
            <a
              href="tel:+919663807006"
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
