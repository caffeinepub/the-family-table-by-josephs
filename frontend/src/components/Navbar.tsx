import { useState, useEffect } from 'react';
import { Link, useRouter } from '@tanstack/react-router';
import { Menu, X, UtensilsCrossed } from 'lucide-react';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Menu', to: '/menu' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const currentPath = router.state.location.pathname;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [currentPath]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream/95 backdrop-blur-md shadow-warm border-b border-border'
          : 'bg-cream/90 backdrop-blur-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-full bg-terracotta flex items-center justify-center shadow-warm">
              <UtensilsCrossed className="w-5 h-5 text-cream" />
            </div>
            <div className="hidden sm:block">
              <p className="font-heading text-lg font-semibold text-brown leading-tight">
                The Family Table
              </p>
              <p className="font-body text-xs text-brown-light tracking-widest uppercase">
                By Josephs
              </p>
            </div>
            <div className="sm:hidden">
              <p className="font-heading text-base font-semibold text-brown leading-tight">
                TFT By Josephs
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-full font-body text-sm font-medium transition-all duration-200 ${
                  currentPath === link.to
                    ? 'bg-terracotta text-cream shadow-warm'
                    : 'text-brown hover:bg-cream-dark hover:text-terracotta'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/919167340197"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 px-5 py-2 bg-olive text-cream rounded-full font-body text-sm font-medium hover:bg-olive/90 transition-all duration-200 shadow-warm"
            >
              Book a Table
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl text-brown hover:bg-cream-dark transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border mt-1">
            <div className="flex flex-col gap-1 pt-3">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-4 py-3 rounded-xl font-body text-sm font-medium transition-all duration-200 ${
                    currentPath === link.to
                      ? 'bg-terracotta text-cream'
                      : 'text-brown hover:bg-cream-dark'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://wa.me/919167340197"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 px-4 py-3 bg-olive text-cream rounded-xl font-body text-sm font-medium text-center"
              >
                Book a Table via WhatsApp
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
