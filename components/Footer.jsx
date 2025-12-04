export default function Footer() {
  return (
    <footer className="w-full bg-foreground text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center font-bold text-sm animate-bounce-in">
                ✓
              </div>
              <span
                className="text-xl font-bold"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                SmartBooks
              </span>
            </div>
            <p className="text-white/60 text-sm">
              Professional digital bookkeeping services for small businesses
              across Pakistan.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <a href="#" className="hover:text-white transition">
                  Invoicing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Payroll
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Tax Filing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Consultation
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-white/60">
              <li>
                <a href="#" className="hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-white/60 flex items-start flex-col">
              <a href="tel:03353036639" className="">
                📞 03353036639
              </a>
              <a href="mailto:webwizdurrani@gmail.com" className="">
                ✉️ webwizdurrani@gmail.com
              </a>
              <li>⏰ 24/7 Support Available</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/60">
            <p>&copy; 2025 SmartBooks. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0 flex-col md:flex-row items-center">
              <div>
                <p className="text-white/50">
                  Powered by{" "}
                  <a
                    href="https://www.webwizdurrani.com/"
                    className="text-primary font-semibold"
                  >
                    webwizdurrani.com
                  </a>
                </p>
              </div>
              <a href="#" className="hover:text-white transition">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition">
                Security
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
