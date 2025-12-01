import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#763F95] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 md:py-16">
        {/* Logo Section - Separate Container */}
        <div className="mb-8 inline-block -ml-4 md:-ml-8 lg:-ml-12">
          <img
            src="/Images/Landing Page/CoA Logo with text.png"
            alt="Children of Adam"
            className="h-32 w-auto md:h-40 lg:h-48"
          />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12">
          {/* Left Section - Description */}
          <div className="space-y-4">
            <p className="text-sm text-white/90">Enlighten. Engage. Empower</p>
            <p className="max-w-sm text-sm leading-relaxed text-white/80">
              CoA Pakistan has been established with the complete assistance of Bani Adam/CoA USA,
              however, in future for executing above projects it will need support of other donors.
              All projects of CoA have active involvement of community.
            </p>
          </div>

          {/* Middle Section - Navigation Links */}
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-3">
              <a href="#" className="flex items-center gap-2 text-sm text-white/90 transition hover:text-orange-400">
                <span className="h-2 w-2 rounded-full bg-orange-400" />
                Home
              </a>
              <a href="#" className="flex items-center gap-2 text-sm text-white/90 transition hover:text-orange-400">
                <span className="h-2 w-2 rounded-full bg-orange-400" />
                About Us
              </a>
              <a href="#" className="flex items-center gap-2 text-sm text-white/90 transition hover:text-orange-400">
                <span className="h-2 w-2 rounded-full bg-orange-400" />
                Project
              </a>
              <a href="#" className="flex items-center gap-2 text-sm text-white/90 transition hover:text-orange-400">
                <span className="h-2 w-2 rounded-full bg-orange-400" />
                Contact Us
              </a>
            </div>
            <div className="space-y-3">
              <a href="#" className="flex items-center gap-2 text-sm text-white/90 transition hover:text-orange-400">
                <span className="h-2 w-2 rounded-full bg-orange-400" />
                Terms of Services
              </a>
              <a href="#" className="flex items-center gap-2 text-sm text-white/90 transition hover:text-orange-400">
                <span className="h-2 w-2 rounded-full bg-orange-400" />
                Privacy Policy
              </a>
            </div>
          </div>

          {/* Right Section - Contact Information */}
          <div className="space-y-4">
            <a
              href="mailto:info@childrenofadam.pk"
              className="flex items-start gap-3 text-sm text-white/90 transition hover:text-orange-400"
            >
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-orange-400" />
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-orange-400" />
                <span>info@childrenofadam.pk</span>
              </div>
            </a>
            <a
              href="tel:02133407488"
              className="flex items-start gap-3 text-sm text-white/90 transition hover:text-orange-400"
            >
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-orange-400" />
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-orange-400" />
                <span>02133407488</span>
              </div>
            </a>
            <div className="flex items-start gap-3 text-sm text-white/90">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-orange-400" />
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-orange-400" />
                <span>
                  2nd Floor, Khadda Market, 34-C, Shamsheer 14th St, DHA Phase 5 Defence Housing
                  Authority, Karachi
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-white/20">
        <div className="mx-auto max-w-7xl px-4 py-6 text-center text-sm text-white/60">
          © Children of Adam.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

