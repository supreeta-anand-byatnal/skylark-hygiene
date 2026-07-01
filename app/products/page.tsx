import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Catalogue | Skylark Hygiene Solutions",
  description:
    "Browse our full range of commercial hygiene products — dispensers, hand dryers, dustbins, air curtains, trolleys and more.",
};

const catalogue = [
  {
    id: "soap-dispensers",
    name: "Soap Dispensers",
    icon: "🧴",
    description:
      "Manual and automatic soap dispensers in stainless steel and ABS plastic. Designed for high-traffic commercial restrooms.",
    models: ["DC800", "SD1000", "DC900", "SS800", "SS1000"],
    features: [
      "Touchless / sensor-based models",
      "Stainless steel & ABS options",
      "Foam and liquid soap compatible",
      "Anti-drip mechanisms",
      "Wall-mounted designs",
    ],
  },
  {
    id: "paper-towel-dispensers",
    name: "Paper Towel Dispensers",
    icon: "🧻",
    description:
      "Tissue and paper towel dispensers for restrooms, kitchens, and food courts. Centre-pull, multi-fold, and roll options including S/Steel variants.",
    models: ["DC1210", "DC1220", "HD800", "JRD1200", "HD500", "S/Steel Paper Towel Dispenser"],
    features: [
      "Centre-pull and multi-fold types",
      "Transparent window for refill visibility",
      "Key-lock for controlled usage",
      "ABS and stainless steel bodies",
      "Multiple size options",
    ],
  },
  {
    id: "hand-dryers",
    name: "Fully Automatic Hand Dryers",
    icon: "💨",
    description:
      "High-speed automatic hand dryers that reduce paper waste and operating costs. Available in Prima I and Prima II models with stainless steel bodies.",
    models: ["Prima I", "Prima II"],
    features: [
      "100% stainless steel body",
      "Voltage: 220V / 50 Hz",
      "Rated power: 2200W",
      "Current: 11.4 A",
      "Sensing range: 5–12 cm",
      "Air temp: 55°C – 88°C",
      "Drying time: 10–15 seconds",
      "RPM: 16000 revolution/min",
      "Wind speed: 90 m/s",
    ],
  },
  {
    id: "aerosol-dispensers",
    name: "Aerosol Dispensers",
    icon: "🌬️",
    description:
      "Automatic and manual aerosol dispensers for maintaining fresh air in offices, hotel lobbies, restrooms, and commercial spaces.",
    models: ["DC120", "DC321"],
    features: [
      "Programmable spray intervals",
      "Wall-mounted designs",
      "Battery operated",
      "Refill cartridges available",
    ],
  },
  {
    id: "fragrance-refills",
    name: "Fragrance Refills",
    icon: "🌸",
    description:
      "Premium fragrance refills compatible with all major aerosol dispenser brands. Multiple scents available for every environment.",
    models: [],
    features: [
      "Long-lasting formulas",
      "Multiple fragrance options",
      "Compatible with DC120 & DC321",
      "Bulk packs available",
    ],
  },
  {
    id: "ss-hygiene-bins",
    name: "SS Hygiene Bins & Trash Bins",
    icon: "🗑️",
    description:
      "Stainless steel and MS powder coated hygiene bins, pedal bins, and trash bins for offices, hospitals, and public areas.",
    models: ["MS Powder Coated Perforated Bin", "MS Powder Coated Solid Bin", "Off Round Perforated & Solid Bin", "Pedal Solid Bin"],
    features: [
      "Sizes: 7\"×10\", 8\"×12\", 10\"×14\"",
      "MS powder coated finish",
      "Perforated and solid options",
      "Pedal-operated variants",
      "Durable commercial grade",
    ],
  },
  {
    id: "ss-planter-pots",
    name: "SS Planter Pots",
    icon: "🪴",
    description:
      "Stainless steel planter pots and decorative planters for office lobbies, hotel entrances, and commercial spaces.",
    models: ["Push Bin", "Ashtray Bin", "Swing Bin", "Planter"],
    features: [
      "Push Bin sizes: 8\"×12\", 8\"×16\", 12\"×32\"",
      "Ashtray Bin sizes: 8\"×12\", 10\"×24\", 12\"×28\", 14\"×32\"",
      "Swing Bin sizes: 8\"×12\", 10\"×24\", 14\"×28\"",
      "Planter sizes: 9\"×9\", 12\"×12\", 15\"×15\"",
      "Premium SS finish",
    ],
  },
  {
    id: "garbage-bins",
    name: "Garbage Bins With & Without Wheel",
    icon: "♻️",
    description:
      "Large capacity garbage bins with and without wheels for outdoor areas, industries, apartments, and municipal use.",
    models: ["028", "660 & 110 lts"],
    features: [
      "Without wheel: 60 lts, 80 lts, 110 lts",
      "With wheel: 120 lts, 240 lts, 360 lts",
      "Extra large: 660 & 110 lts",
      "UV stabilized plastic",
      "Colour coded options available",
    ],
  },
  {
    id: "plastic-pole-stand-bins",
    name: "Plastic Pole Stand Bins",
    icon: "🚮",
    description:
      "Plastic pole-mounted stand bins for parks, walkways, and public areas. Easy to install and maintain.",
    models: [],
    features: [
      "Pole-mounted design",
      "Weather resistant",
      "Easy waste collection",
      "Ideal for outdoor areas",
    ],
  },
  {
    id: "wringer-buckets",
    name: "Wringer Buckets, Sign Boards & Outdoor Bins",
    icon: "🪣",
    description:
      "Professional mop wringer buckets, wet-floor sign boards, and outdoor bins for housekeeping teams in hotels, hospitals, and commercial buildings.",
    models: ["DM25", "FMB25", "DC1080", "Animation Dustbin"],
    features: [
      "Heavy-duty wringer mechanism",
      "Double bucket systems",
      "Caution/wet floor signage",
      "Animated character dustbins for public areas",
      "Durable commercial grade",
    ],
  },
  {
    id: "shoe-shine",
    name: "Auto Shoe Shine / Polish Machine",
    icon: "👞",
    description:
      "Automatic shoe shine machines for hotel lobbies, office receptions, and corporate entrances. Multiple models with IR sensor activation.",
    models: ["ASPXD1", "ASP-G5", "ASP-G3"],
    features: [
      "ASPXD1: 510×320×495mm, 17.5kg, 105W, IR sensor, sole cleaner",
      "ASP-G5: 380×530×300mm, 17kg, 60W, IR sensor",
      "ASP-G3: 280×370×210mm, 7.5kg, 45W, compact design",
      "Noise: <50DB (ASPXD1 & G5), <63DB (G3)",
      "Speed: 800n (ASPXD1 & G5), 1400n (G3)",
    ],
  },
  {
    id: "fly-catcher",
    name: "Fly Catcher / Insect Killer Lights",
    icon: "🪰",
    description:
      "UV fly catchers and electric insect killer lights for kitchens, food courts, restaurants, and food processing areas.",
    models: ["Size 1.5'×2'"],
    features: [
      "UV tube attraction technology",
      "Glue board and zapper types",
      "Wall-mount options",
      "FSSAI compliant models",
      "Ideal for food preparation areas",
    ],
  },
  {
    id: "display-board",
    name: "Display Board",
    icon: "📋",
    description:
      "Stainless steel and aluminum display boards for notices, menus, and directories in offices, hotels, and public spaces.",
    models: ["1.5'×2'", "2'×3'"],
    features: [
      "Multiple size options",
      "Wall-mount and floor-standing",
      "Lockable options",
      "Premium finish",
    ],
  },
  {
    id: "newspaper-stand",
    name: "News Paper Stand",
    icon: "📰",
    description:
      "Stainless steel newspaper and magazine stands for hotel lobbies, offices, and waiting areas.",
    models: ["27\"×42\""],
    features: [
      "SS construction",
      "Floor-standing design",
      "Multiple slot options",
      "Elegant finish for lobbies",
    ],
  },
  {
    id: "trolleys",
    name: "Housekeeping Trolley & SS Trolleys",
    icon: "🛒",
    description:
      "Shopping trolleys, platform trolleys, and housekeeping trolleys for hotels, hospitals, warehouses, and large facilities.",
    models: ["Shopping Trolley", "Platform Trolley", "Platform Trolley with Grill"],
    features: [
      "Capacities: 60 ltr, 80 ltr, 110 ltr",
      "Platform sizes: 2'×3'",
      "SS and powder-coated frames",
      "Smooth-rolling casters",
      "Grill option for secure transport",
    ],
  },
  {
    id: "air-curtains",
    name: "Air Curtains",
    icon: "🌀",
    description:
      "Industrial and commercial air curtains for entrances. Keeps dust, insects, and pollutants out while maintaining indoor temperature.",
    models: ["Size 2'×3'"],
    features: [
      "Multiple sizes (2' to 6')",
      "High velocity air flow",
      "Low noise operation",
      "Easy installation",
      "Suitable for all entrance types",
    ],
  },
  {
    id: "colour-coded-bins",
    name: "SS Colour Coded & FRP Bins",
    icon: "🎨",
    description:
      "Colour coded stainless steel and FRP (Fibre Reinforced Plastic) bins for waste segregation in offices, hospitals, and public areas.",
    models: ["SS Colour Coded Bin 022", "FRP Duo Bin 023", "FRP Trio Bin 024", "SS Trio Bin 025"],
    features: [
      "Colour coded for waste segregation",
      "Duo and trio configurations",
      "SS and FRP options",
      "Ideal for hospitals and offices",
      "Bio-medical waste compliant",
    ],
  },
  {
    id: "barricades",
    name: "Stainless Steel Q-Up Stand / Barricades",
    icon: "🚧",
    description:
      "Stainless steel queue management stands (Q-Up stands) and barricades for banks, airports, hotels, and events.",
    models: [],
    features: [
      "Retractable belt mechanism",
      "Heavy SS base for stability",
      "Multiple belt colours",
      "Rope and belt variants",
      "\"No Entry\" and \"No Smoking\" sign options",
    ],
  },
  {
    id: "shoecover-dispenser",
    name: "Shoecover Dispenser",
    icon: "🥿",
    description:
      "Automatic shoecover dispensers for hospitals, labs, cleanrooms, and hygiene-sensitive areas. Hands-free operation for quick shoe covering.",
    models: [],
    features: [
      "Automatic hands-free dispensing",
      "Suitable for hospitals & labs",
      "Cleanroom compatible",
      "High capacity refill rolls",
      "Floor-standing design",
    ],
  },
  {
    id: "consumables",
    name: "Consumables",
    icon: "📦",
    description:
      "Regular consumables and refills for all hygiene products. Bulk supply available for commercial establishments.",
    models: [],
    features: [
      "Liquid Soap",
      "Toilet Tissue Rolls",
      "Jumbo Tissue Rolls",
      "C-Fold Tissue Towels",
      "M-Fold Tissue Towels",
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

      {/* Quick Nav */}
      <section className="border-b sticky top-[61px] bg-white z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <p className="text-xs text-gray-400 uppercase tracking-wider mb-2 font-semibold">Jump to category ↓</p>
          <div className="overflow-x-auto">
            <div className="flex gap-2 min-w-max pb-1">
              {catalogue.map((product) => (
                <a
                  key={product.id}
                  href={`#${product.id}`}
                  className="text-sm font-medium px-4 py-2 rounded-full bg-[#1a5c3a]/10 text-[#1a5c3a] hover:bg-[#1a5c3a] hover:text-white transition whitespace-nowrap"
                >
                  {product.name}
                </a>
              ))}
            </div>
          </div>
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
                className="scroll-mt-32 border border-gray-200 rounded-2xl p-8 hover:shadow-md transition"
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

                    {product.models.length > 0 && (
                      <div className="mt-4">
                        <h4 className="text-sm font-semibold text-slate-700 mb-2">Models Available:</h4>
                        <div className="flex flex-wrap gap-2">
                          {product.models.map((model) => (
                            <span
                              key={model}
                              className="text-xs bg-[#1a5c3a]/10 text-[#1a5c3a] px-2.5 py-1 rounded-md font-medium"
                            >
                              {model}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <ul className="mt-4 grid sm:grid-cols-2 gap-2">
                      {product.features.map((f) => (
                        <li
                          key={f}
                          className="flex items-start gap-2 text-sm text-gray-600"
                        >
                          <span className="text-[#1a5c3a] font-bold mt-0.5">✓</span>
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
