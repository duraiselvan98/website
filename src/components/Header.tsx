import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Committee", path: "/committee" },
  { name: "Gallery", path: "/gallery" },
  { name: "Events", path: "/events" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 py-2 flex flex-col sm:flex-row items-center justify-end gap-2 sm:gap-6 text-sm">
          <a href="mailto:aiibscstewa@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors">
            <Mail className="w-4 h-4" />
            <span>aiibscstewa@gmail.com</span>
          </a>
          <a href="tel:044-28191232" className="flex items-center gap-2 hover:text-accent transition-colors">
            <Phone className="w-4 h-4" />
            <span>044 - 2819 1232</span>
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-background/95 backdrop-blur-md shadow-elegant border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="AIIBSCSTEWA" className="h-16 lg:h-20 w-auto object-contain" />
              <div className="hidden md:flex flex-col">
                <span className="font-heading font-bold text-lg lg:text-xl text-primary leading-tight">
                  AIIBSCSTEWA
                </span>
                <span className="text-xs lg:text-sm text-muted-foreground leading-tight">
                  All India Insurance Bank SC/ST Employees Welfare Association
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-md font-medium transition-all duration-200 ${
                    location.pathname === link.path
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-muted hover:text-primary"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-foreground hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-border bg-background"
            >
              <div className="container mx-auto px-4 py-4 space-y-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block px-4 py-3 rounded-md font-medium transition-all duration-200 ${
                        location.pathname === link.path
                          ? "bg-primary text-primary-foreground"
                          : "text-foreground hover:bg-muted hover:text-primary"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
