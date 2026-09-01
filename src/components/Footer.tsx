import React from 'react';
import { ArrowRight, Phone, Mail, MapPin, ShieldCheck, ChevronRight } from 'lucide-react';
import { SERVICE_CITIES } from '../data/detailingData';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onOpenQuote }) => {
  return (
    <footer className="bg-[#F5F5F7] text-[#1D1D1F] pt-20 pb-12 border-t border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Top Call to Action Banner */}
        <div className="pb-16 mb-16 border-b border-black/[0.06] flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <div className="text-xs uppercase tracking-wider font-semibold text-[#0071E3] mb-3">
              Reserve Your Slot
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1D1D1F] max-w-xl leading-tight tracking-tight">
              Exceptional finish.<br />
              <span className="text-[#86868B]">Wherever you are.</span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onOpenQuote}
              className="px-6 py-3 text-xs font-medium text-[#1D1D1F] bg-white hover:bg-black/5 border border-black/[0.08] rounded-full transition-all text-center cursor-pointer shadow-sm"
            >
              Calculate Instant Quote
            </button>
            <button
              type="button"
              onClick={onOpenBooking}
              className="px-8 py-3 text-xs font-medium text-white bg-[#0071E3] hover:bg-[#0077ED] rounded-full transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <span>Book Appointment</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Main Footer Links & Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-black/[0.06]">
          
          {/* Col 1: Brand & Bio (4 Cols) */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-semibold tracking-tight text-[#1D1D1F]">
                VELORA
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#0071E3]" />
            </div>

            <p className="text-xs text-[#86868B] font-normal leading-relaxed mb-6 max-w-sm">
              The premier mobile auto detailing studio in the United States. Providing fully self-contained, spot-free deionized paint enhancement and ceramic protection directly to your home or office.
            </p>

            <div className="flex items-center gap-3 text-xs text-[#86868B]">
              <span className="flex items-center gap-1.5 font-medium text-[#1D1D1F]">
                <ShieldCheck className="w-4 h-4 text-[#0071E3]" />
                $2M Garagekeepers Policy
              </span>
              <span>·</span>
              <span>IDA Certified #49102</span>
            </div>
          </div>

          {/* Col 2: Operating Regions (3 Cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-[#1D1D1F] mb-4">
              Service Locations
            </h4>
            <ul className="grid grid-cols-2 gap-y-2 gap-x-3 text-xs text-[#86868B]">
              {SERVICE_CITIES.map((city) => (
                <li key={city} className="flex items-center gap-1.5 hover:text-[#1D1D1F] transition-colors">
                  <span className="w-1 h-1 rounded-full bg-[#0071E3]" />
                  <span>{city}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Concierge Contact (3 Cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-[#1D1D1F] mb-4">
              Private Concierge
            </h4>
            <div className="space-y-2.5 text-xs text-[#86868B]">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#0071E3]" />
                <span className="text-[#1D1D1F] font-semibold">(800) 845-8120</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#0071E3]" />
                <span className="text-[#1D1D1F]">concierge@veloradetail.com</span>
              </div>
              <div className="pt-2 text-[11px] text-[#86868B] leading-relaxed">
                Monday – Saturday: 7:00 AM – 7:00 PM<br />
                Sunday: Track & Private Estate Support
              </div>
            </div>
          </div>

          {/* Col 4: Quick Navigation (2 Cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-[#1D1D1F] mb-4">
              Explore
            </h4>
            <ul className="space-y-2 text-xs text-[#86868B]">
              <li><a href="#services" className="hover:text-[#1D1D1F] transition-colors">Services</a></li>
              <li><a href="#the-work" className="hover:text-[#1D1D1F] transition-colors">Portfolio</a></li>
              <li><a href="#studio-mobile" className="hover:text-[#1D1D1F] transition-colors">Mobile Rig</a></li>
              <li><a href="#process" className="hover:text-[#1D1D1F] transition-colors">Process</a></li>
              <li><a href="#philosophy" className="hover:text-[#1D1D1F] transition-colors">Philosophy</a></li>
              <li><a href="#reviews" className="hover:text-[#1D1D1F] transition-colors">Client Reviews</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#86868B]">
          <div>
            © {new Date().getFullYear()} VELORA Studio, Inc. All rights reserved. Premium Mobile Detailing.
          </div>
          <div className="flex items-center gap-6 text-xs">
            <a href="#" className="hover:text-[#1D1D1F] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#1D1D1F] transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-[#1D1D1F] transition-colors">Safety Standards</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
