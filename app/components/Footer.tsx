import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-white font-bold text-lg mb-3">Skylark Hygiene Solutions</h3>
            <p className="text-sm leading-relaxed">
              A healthy working environment for everyone. Commercial hygiene &
              housekeeping products for offices, hospitals, apartments, hotels
              and industries.
            </p>
            <p className="text-sm mt-3 text-slate-400">Bangalore, India</p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold mb-3">Products</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/products#dispensers" className="hover:text-white transition">Soap & Paper Dispensers</Link></li>
              <li><Link href="/products#dryers" className="hover:text-white transition">Hand Dryers</Link></li>
              <li><Link href="/products#bins" className="hover:text-white transition">Dustbins & Trash Bins</Link></li>
              <li><Link href="/products#trolleys" className="hover:text-white transition">Housekeeping Trolleys</Link></li>
              <li><Link href="/products#aircurtains" className="hover:text-white transition">Air Curtains</Link></li>
              <li><Link href="/products#aerosol" className="hover:text-white transition">Aerosol Dispensers</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
              <li><Link href="/products" className="hover:text-white transition">Product Catalogue</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-3">Get In Touch</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="tel:+919663807006" className="hover:text-white transition">
                  📞 +91 96638 07080
                </a>
              </li>
              <li>
                <a href="https://wa.me/919663807006" className="hover:text-white transition">
                  💬 WhatsApp Us
                </a>
              </li>
              <li>📍 Bangalore, Karnataka, India</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-10 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Skylark Hygiene Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
