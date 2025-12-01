import { Heart } from "lucide-react";

const Navbar = () => {
  const logoWithText = "/Images/Landing%20Page/CoA%20Logo%20with%20text.png";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 via-black/40 to-transparent text-white">
      {/* Detached logo so resizing won't shift navbar layout */}
      <a
        href="/#who-are-we"
        className="pointer-events-auto absolute left-2 top-1/2 -translate-y-1/2 md:left-8"
        aria-label="Children of Adam home"
      >
        <img
          src={logoWithText}
          alt="Children of Adam"
          className="h-28 w-auto origin-center object-contain drop-shadow md:h-32"
        />
      </a>

      <div className="mx-auto flex max-w-6xl items-center gap-6 px-6 py-6 pl-32 md:pl-60">
        {/* Navigation Links */}
        <div className="hidden flex-1 items-center justify-center gap-10 text-lg font-light tracking-wide md:flex">
          <a href="/#who-are-we" className="transition-colors hover:text-sky-200">
            Who Are We
          </a>
          <a href="/our-work" className="transition-colors hover:text-sky-200">
            Our Work
          </a>
          <a href="/our-team" className="transition-colors hover:text-sky-200">
            Our Team
          </a>
          <a href="/impact" className="transition-colors hover:text-sky-200">
            Impact
          </a>
        </div>

        {/* Donate */}
        <a
          href="/donate"
          className="hidden items-center gap-2 text-lg font-medium uppercase tracking-wide text-[#ed1c24] md:inline-flex"
        >
          Donate
          <Heart className="h-4 w-4 fill-current" />
        </a>

        {/* Mobile Menu Button */}
        <button className="ml-auto rounded-full border border-white/40 p-2 text-white md:hidden">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
