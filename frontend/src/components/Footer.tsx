import { Link } from '@tanstack/react-router';
import { MapPin, Phone, Instagram, Heart } from 'lucide-react';
import { SiWhatsapp, SiInstagram } from 'react-icons/si';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Menu', to: '/menu' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const appId = typeof window !== 'undefined' ? encodeURIComponent(window.location.hostname) : 'thefamilytable';

  return (
    <footer className="bg-brown text-cream/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl font-semibold text-cream mb-2">
              The Family Table
            </h3>
            <p className="font-heading text-lg italic text-terracotta mb-4">By Josephs</p>
            <p className="font-body text-sm text-cream/70 leading-relaxed mb-5">
              Creating Memories With Your Family
            </p>
            <div className="flex gap-3">
              <a
                href="https://wa.me/919167340197"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-olive flex items-center justify-center hover:bg-olive/80 transition-colors"
                aria-label="WhatsApp"
              >
                <SiWhatsapp className="w-5 h-5 text-cream" />
              </a>
              <a
                href="https://www.instagram.com/thefamilytablebandra"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-terracotta flex items-center justify-center hover:bg-terracotta/80 transition-colors"
                aria-label="Instagram"
              >
                <SiInstagram className="w-5 h-5 text-cream" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-cream mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="font-body text-sm text-cream/70 hover:text-olive-light transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-cream mb-4">Find Us</h4>
            <div className="space-y-3">
              <div className="flex gap-3">
                <MapPin className="w-4 h-4 text-terracotta mt-0.5 flex-shrink-0" />
                <p className="font-body text-sm text-cream/70 leading-relaxed">
                  3R6J+J44 Epitome, 29th Rd,<br />
                  Bandra West, Mumbai,<br />
                  Maharashtra 400050
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <Phone className="w-4 h-4 text-terracotta flex-shrink-0" />
                <a
                  href="tel:+919167340197"
                  className="font-body text-sm text-cream/70 hover:text-olive-light transition-colors"
                >
                  +91 91673 40197
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <Instagram className="w-4 h-4 text-terracotta flex-shrink-0" />
                <a
                  href="https://www.instagram.com/thefamilytablebandra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm text-cream/70 hover:text-olive-light transition-colors"
                >
                  @thefamilytablebandra
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-cream/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-cream/50">
            © {year} The Family Table By Josephs. All rights reserved.
          </p>
          <p className="font-body text-xs text-cream/50 flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-terracotta fill-terracotta" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-olive-light hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
