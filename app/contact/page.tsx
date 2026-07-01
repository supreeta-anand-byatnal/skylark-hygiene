import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Skylark Hygiene Solutions",
  description:
    "Get in touch with Skylark Hygiene Solutions for bulk orders, product enquiries, and commercial hygiene solutions in Bangalore.",
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-[#1a5c3a] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold">Contact Us</h1>
          <p className="mt-4 text-green-100 text-lg">
            Get in touch for product enquiries, bulk orders, and commercial solutions
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-slate-800 mb-6">
                Get In Touch
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1a5c3a]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📞</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">Phone</h3>
                    <a
                      href="tel:+919663807006"
                      className="text-[#1a5c3a] hover:underline font-medium"
                    >
                      +91 96638 07006
                    </a>
                    <p className="text-gray-500 text-sm mt-1">
                      Mon - Sat, 9:00 AM - 7:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1a5c3a]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">💬</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">WhatsApp</h3>
                    <a
                      href="https://wa.me/919663807006"
                      className="text-[#1a5c3a] hover:underline font-medium"
                    >
                      Message us on WhatsApp
                    </a>
                    <p className="text-gray-500 text-sm mt-1">
                      Quick responses for product enquiries
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1a5c3a]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">✉️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">Email</h3>
                    <a
                      href="mailto:sales@skylarkhygiene.com"
                      className="text-[#1a5c3a] hover:underline font-medium"
                    >
                      sales@skylarkhygiene.com
                    </a>
                    <p className="text-gray-500 text-sm mt-1">
                      For detailed enquiries and documentation
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#1a5c3a]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">Location</h3>
                    <p className="text-gray-600">No 24, Annapoorna, 2nd Main, 2nd Cross,<br/>Kathriguppe Main Rd, Banashankari 3rd Stage,<br/>Bengaluru, Karnataka 560085</p>
                    <p className="text-gray-500 text-sm mt-1">
                      Serving Pan India
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Enquiry Buttons */}
              <div className="mt-10">
                <h3 className="font-semibold text-slate-800 mb-4">
                  Quick Product Enquiry
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Soap Dispensers",
                    "Hand Dryers",
                    "Dustbins",
                    "Air Curtains",
                    "Trolleys",
                    "Other",
                  ].map((product) => (
                    <a
                      key={product}
                      href={`https://wa.me/919663807006?text=Hi, I'm interested in ${product}. Please share details and pricing.`}
                      className="border border-gray-300 text-gray-700 px-3 py-1.5 rounded-full text-sm hover:border-[#1a5c3a] hover:text-[#1a5c3a] active:border-[#1a5c3a] active:text-[#1a5c3a] active:bg-[#1a5c3a]/10 transition"
                    >
                      {product}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Enquiry Form */}
            <div className="bg-slate-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-6">
                Send an Enquiry
              </h2>

              <form action="https://api.web3forms.com/submit" method="POST" className="space-y-5">
                <input type="hidden" name="access_key" value="66480bb4-c52c-4ad1-b1ea-d817a70d94fa" />
                <input type="hidden" name="subject" value="New Enquiry from Skylark Hygiene Website" />
                <input type="hidden" name="from_name" value="Skylark Hygiene Website" />
                <input type="hidden" name="redirect" value="https://skylarkhygiene.com/contact?success=true" />
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a5c3a]/20 focus:border-[#1a5c3a] outline-none transition"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a5c3a]/20 focus:border-[#1a5c3a] outline-none transition"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div>
                  <label
                    htmlFor="product"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Product Interest
                  </label>
                  <select
                    id="product"
                    name="product"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a5c3a]/20 focus:border-[#1a5c3a] outline-none transition"
                  >
                    <option value="">Select a product category</option>
                    <option>Aerosol Dispensers</option>
                    <option>Soap Dispensers</option>
                    <option>Paper Towel Dispensers</option>
                    <option>Hand Dryers</option>
                    <option>Dustbins & Trash Bins</option>
                    <option>Housekeeping Trolleys</option>
                    <option>Air Curtains</option>
                    <option>Shoe Shine Machines</option>
                    <option>Fly Catchers</option>
                    <option>SS Stands & Barricades</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a5c3a]/20 focus:border-[#1a5c3a] outline-none transition resize-none"
                    placeholder="Tell us about your requirements (quantity, location, etc.)"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1a5c3a] text-white py-3 rounded-lg font-semibold hover:bg-[#154f32] transition"
                >
                  Send Enquiry
                </button>

                <p className="text-xs text-gray-400 text-center">
                  Or directly message us on{" "}
                  <a
                    href="https://wa.me/919663807006"
                    className="text-[#1a5c3a] underline"
                  >
                    WhatsApp
                  </a>{" "}
                  for faster response.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">Find Us</h2>
          <div className="rounded-2xl overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6192952349934!2d77.551971175974!3d12.932172787379562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2629c781e6fac9c7%3A0xfb33c739f3f58764!2sSkylark%20Hygiene%20Solutions!5e0!3m2!1sen!2sin!4v1782934002517!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Skylark Hygiene Solutions - Google Maps"
            />
          </div>
          <p className="text-center text-gray-500 text-sm mt-4">
            Skylark Hygiene Solutions, No 24, Annapoorna, 2nd main, 2nd cross, Kathriguppe Main Rd, Banashankari 3rd Stage, Bengaluru, Karnataka 560085
          </p>
        </div>
      </section>
    </div>
  );
}
