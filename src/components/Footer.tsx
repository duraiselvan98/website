import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Youtube, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-navy-800 via-primary to-navy-900 text-primary-foreground">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src={logo} alt="AIIBSCSTEWA" className="h-24 lg:h-28 w-auto bg-white rounded-full p-2 shadow-lg" />
            </Link>
            <h3 className="font-heading font-bold text-2xl lg:text-3xl mb-3">AIIBSCSTEWA</h3>
            <p className="text-base lg:text-lg text-primary-foreground/90 leading-relaxed">
              All India Insurance Bank SC/ST Employees Welfare Association - Dedicated to the welfare and rights of employees.
            </p>
            {/* Social Links */}
            <div className="flex gap-3 mt-4">
              {[Facebook, Twitter, Youtube, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4 text-accent">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Committee", path: "/committee" },
                { name: "Gallery", path: "/gallery" },
                { name: "Events", path: "/events" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4 text-accent">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-primary-foreground/80">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-accent" />
                <span> No. 15, Vengu Street, Egmore, Chennai - 600034</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/80">
                <Phone className="w-5 h-5 flex-shrink-0 text-accent" />
                <span>044 - 2819 1232</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-primary-foreground/80">
                <Mail className="w-5 h-5 flex-shrink-0 text-accent" />
                <a href="mailto:aiibscstewa@gmail.com" className="hover:text-accent transition-colors">
                  aiibscstewa@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4 text-accent">Services</h4>
            <ul className="space-y-2">
              {[
                { name: "Grievance", path: "/grievance" },
                { name: "Transfer", path: "/transfer" },
                { name: "Magazines", path: "/circular" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm text-primary-foreground/80 hover:text-accent transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-white/10 bg-navy-950">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-sm text-primary-foreground/70">
            © 2026 AIIBSCSTEWA. All Rights Reserved | Designed with ❤️ for our community
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
