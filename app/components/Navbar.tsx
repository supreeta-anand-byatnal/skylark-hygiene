import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-[45px] h-[45px] flex-shrink-0 overflow-hidden flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="Skylark Hygiene"
              width={45}
              height={45}
              className="object-contain"
              unoptimized
            />
          </div>
          <span className="font-bold text-lg text-[#1a5c3a]">Skylark Hygiene</span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
          <Link href="/" className="hover:text-[#1a5c3a] transition">Home</Link>
          <Link href="/products" className="hover:text-[#1a5c3a] transition">Products</Link>
          <Link href="/about" className="hover:text-[#1a5c3a] transition">About</Link>
          <Link href="/contact" className="hover:text-[#1a5c3a] transition">Contact</Link>
        </div>

        <a
          href="https://wa.me/919663807006"
          className="hidden md:inline-block bg-[#1a5c3a] text-white text-sm px-4 py-2 rounded-lg font-medium hover:bg-[#154f32] transition"
        >
          Get Quote
        </a>
      </div>
    </nav>
  );
}