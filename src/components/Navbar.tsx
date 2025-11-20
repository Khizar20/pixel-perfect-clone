import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoTree from "@/assets/logo-tree.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logoTree} alt="Children of Adam Logo" className="h-12 w-12" />
            <div className="flex flex-col">
              <h1 className="text-secondary font-bold text-xl leading-tight">Children of Adam</h1>
              <p className="text-xs text-muted-foreground">Enlighten . Engage . Empower</p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#who-are-we" className="text-foreground hover:text-primary transition-colors font-medium">
              Who Are We
            </a>
            <a href="#our-work" className="text-foreground hover:text-primary transition-colors font-medium">
              Our Work
            </a>
            <a href="#our-team" className="text-foreground hover:text-primary transition-colors font-medium">
              Our Team
            </a>
            <a href="#impact" className="text-foreground hover:text-primary transition-colors font-medium">
              Impact
            </a>
            <Button variant="default" className="bg-secondary hover:bg-secondary/90">
              Donate <Heart className="ml-2 h-4 w-4 fill-current" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" className="md:hidden">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
