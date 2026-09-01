import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, ArrowRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (serviceId?: string) => void;
  onOpenQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Our Work', href: '#the-work' },
    { name: 'Mobile Studio', href: '#studio-mobile' },
    { name: 'Process', href: '#process' },
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Reviews', href: '#reviews' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const topOffset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/85 backdrop-blur-xl border-b border-black/[0.08] py-3 shadow-[0_4px_20px_rgba(0,0,0,0.03)]'
          : 'bg-white/95 md:bg-white/80 backdrop-blur-md border-b border-black/[0.04] py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          id="nav-logo"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group flex items-center gap-2.5 focus:outline-none"
        >
          <span className="font-semibold text-lg sm:text-xl tracking-tight text-[#1D1D1F] group-hover:text-black transition-colors">
            VELORA
          </span>
          <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-medium tracking-wide uppercase text-[#86868B] bg-[#F5F5F7] rounded-full border border-black/[0.04]">
            Mobile Studio
          </span>
        </a>

        {/* Center Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-[13px] font-normal text-[#1D1D1F]/80 hover:text-[#0071E3] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Desktop CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <button
            id="nav-btn-quote"
            type="button"
            onClick={onOpenQuote}
            className="text-[13px] font-medium text-[#1D1D1F] hover:text-[#0071E3] px-3.5 py-1.5 rounded-full transition-colors cursor-pointer"
          >
            Estimate Price
          </button>
          
          <button
            id="nav-btn-book"
            type="button"
            onClick={() => onOpenBooking()}
            className="group relative inline-flex items-center justify-center px-4 py-1.5 text-[13px] font-medium text-white bg-[#0071E3] hover:bg-[#0077ED] active:scale-[0.98] rounded-full transition-all duration-200 shadow-sm cursor-pointer"
          >
            <span>Book Now</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            id="nav-mobile-quick-book"
            type="button"
            onClick={() => onOpenBooking()}
            className="px-3.5 py-1.5 text-xs font-medium bg-[#0071E3] text-white rounded-full shadow-sm"
          >
            Book
          </button>
          <button
            id="nav-mobile-toggle"
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-[#1D1D1F] hover:text-black focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer / Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[57px] bg-white border-b border-black/[0.08] shadow-2xl px-6 py-6 transition-all">
          <div className="flex flex-col gap-4">
            <div className="text-[11px] tracking-wider uppercase font-semibold text-[#86868B]">
              Navigation
            </div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-base font-medium text-[#1D1D1F] hover:text-[#0071E3] transition-colors py-1 flex items-center justify-between border-b border-black/[0.04]"
              >
                <span>{link.name}</span>
                <ArrowRight className="w-4 h-4 text-[#86868B]" />
              </a>
            ))}

            <div className="pt-2 flex flex-col gap-2.5">
              <button
                id="mobile-menu-book-btn"
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 bg-[#0071E3] text-white text-xs font-medium tracking-wide rounded-full flex items-center justify-center gap-2 shadow-sm"
              >
                <Calendar className="w-4 h-4" />
                <span>Book an Appointment</span>
              </button>

              <button
                id="mobile-menu-quote-btn"
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full py-3 bg-[#F5F5F7] text-[#1D1D1F] text-xs font-medium rounded-full hover:bg-[#E8E8ED] transition-colors"
              >
                Calculate Instant Estimate
              </button>

              <div className="mt-2 pt-3 border-t border-black/[0.06] flex items-center justify-between text-xs text-[#86868B]">
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#0071E3]" />
                  (800) 845-8120
                </span>
                <span>Mon – Sat, 7AM – 7PM</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
