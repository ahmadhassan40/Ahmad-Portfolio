import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`site-nav ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">
        <button type="button" className="brand" onClick={() => scrollToSection("#home")}>
          <span className="brand-mark">AH</span>
          <span className="font-semibold text-lg tracking-tight">Ahmad Hassan</span>
        </button>

        <div className="nav-links hidden md:flex">
          {navItems.map((item) => (
            <button
              type="button"
              key={item.label}
              className="nav-link"
              onClick={() => scrollToSection(item.href)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="nav-actions hidden md:flex">
          <button type="button" className="btn-primary" onClick={() => scrollToSection("#contact")}>
            Contact
          </button>
        </div>

        <button
          type="button"
          className="nav-toggle md:hidden"
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div className={`mobile-drawer ${isMobileMenuOpen ? "open" : ""}`}>
        <div className="mobile-drawer-inner">
          <div className="mobile-links">
            {[...navItems, { label: "Contact", href: "#contact" }].map((item) => (
              <button
                type="button"
                key={item.label}
                className="mobile-link"
                onClick={() => scrollToSection(item.href)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
