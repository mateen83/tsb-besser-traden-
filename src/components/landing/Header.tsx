import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Star } from "lucide-react";

const navLinks = [
  { label: "Why Trade With Us", href: "#why-trade" },
  { label: "Reviews", href: "#reviews" },
  { label: "Results", href: "#results" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 bg-[#030524] border-b border-navy-light">

        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex items-center gap-2">
             
              <span className="text-white font-bold text-xl hidden sm:block">The Signals Bank</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-white/80 hover:text-white transition-colors text-sm font-medium"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* CTA Buttons */}
     <div className="hidden lg:flex items-center gap-3">
  {/* Join Now */}
  <Button
    variant="outline"
    className="border-white/20 text-gray-700 hover:bg-white/10"
  >
    Join Now
  </Button>

  {/* Join FREE Group */}
  <Button className="text-white hover:opacity-90 bg-[linear-gradient(241deg,_#7A3DE3_50%,_#0DE3D6_100%)]">
    Join FREE Group
  </Button>
</div>



            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-navy-dark border-t border-navy-light">
            <div className="container mx-auto px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="block w-full text-left text-white/80 hover:text-white py-2"
                >
                  {link.label}
                </button>
              ))}
              <div className="flex flex-col gap-3 pt-4">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 w-full">
                  Join Now
                </Button>
                <Button className="bg-primary hover:bg-green-light text-primary-foreground w-full">
                  Join FREE Group
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Trustpilot Bar */}
      <div className="bg-navy py-3 border-b border-navy-light">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-2 text-white">
            <span className="text-sm">Excellent</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-5 h-5 bg-trustpilot flex items-center justify-center">
                  <Star size={12} fill="white" className="text-white" />
                </div>
              ))}
            </div>
            <span className="text-sm">4.6/5 based on <strong>2,315</strong> reviews</span>
            <span className="text-sm font-semibold text-trustpilot ml-1">★ Trustpilot</span>
          </div>
        </div>
      </div>
    </>
  );
};
