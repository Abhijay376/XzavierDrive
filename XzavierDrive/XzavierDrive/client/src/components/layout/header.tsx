import { useState } from "react";
import { Link, useLocation } from "wouter";
import { XDSLogo } from "@/assets/logo";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

export const Header = () => {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/suburbs", label: "Suburbs" },
    { href: "/drive-test-info", label: "Drive Test Info" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b-2 border-xds-orange">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-3">
            <XDSLogo />
            {!isMobile && (
              <div>
                <h2 className="text-xds-gray font-semibold text-sm">
                  Xzavier Driving School
                </h2>
              </div>
            )}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-xds-gray hover:text-xds-orange transition-colors ${
                  location === item.href ? "text-xds-orange font-medium" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Phone Number & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <a href="tel:0434538142">
              <Button className="bg-xds-green hover:bg-xds-green/90 text-white">
                <Phone className="w-4 h-4 mr-2" />
                {!isMobile && <span>0434 538 142</span>}
              </Button>
            </a>
            
            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-xds-gray"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-xds-gray hover:text-xds-orange transition-colors py-2 ${
                    location === item.href ? "text-xds-orange font-medium" : ""
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
