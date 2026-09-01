import React, { useState } from 'react';
import { Home, Building2, Warehouse, ArrowRight, Zap, Droplets, Shield, Sparkles } from 'lucide-react';

interface StudioComesToYouProps {
  onOpenBooking: () => void;
}

export const StudioComesToYou: React.FC<StudioComesToYouProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<'home' | 'office' | 'garage'>('home');

  const locationTypes = [
    {
      id: 'home' as const,
      icon: Home,
      title: 'Home Driveway',
      desc: 'Seamless weekend or morning detailing while you spend time with family. Zero hoses connected to your home spigots.',
      tag: 'Most Popular'
    },
    {
      id: 'office' as const,
      icon: Building2,
      title: 'Corporate Office',
      desc: 'Turn idle parking hours into showroom restoration. Arrive at work, attend meetings, and leave in a spotless car.',
      tag: 'Zero Downtime'
    },
    {
      id: 'garage' as const,
      icon: Warehouse,
      title: 'Private Garage & Collection',
      desc: 'Climate-controlled indoor detailing for high-security estates, underground parkades, and collector garages.',
      tag: 'Concierge Safe'
    }
  ];

  return (
    <section id="studio-mobile" className="py-24 sm:py-32 bg-white border-t border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Top Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3.5">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#0071E3]">
              Self-Contained Mobile Lab
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1D1D1F] tracking-tight mb-6 sm:mb-7">
            The detailing studio comes to you.
          </h2>

          <p className="text-base sm:text-lg text-[#86868B] font-normal leading-[1.625]">
            No drop-off. No waiting. No rearranging your day. We bring high-precision equipment and meticulous service wherever your car is parked.
          </p>
        </div>

        {/* Major Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Visual: High End Mobile Detailing in Action */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-[16/10] rounded-3xl overflow-hidden bg-black/5 border border-black/[0.06] shadow-[0_12px_40px_rgba(0,0,0,0.06)]">
              <img
                src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1400&q=85"
                alt="Professional auto detailer working on luxury vehicle in private driveway"
                className="w-full h-full object-cover"
              />
              
              {/* Overlay Spec Pill */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-black/80 backdrop-blur-xl px-4 py-3 rounded-2xl text-white border border-white/10 shadow-lg">
                <div className="flex items-center gap-3 text-xs">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-semibold">100% Self-Sufficient Rig</span>
                  <span className="text-white/40 hidden sm:inline">·</span>
                  <span className="text-white/80 hidden sm:inline font-normal">Zero Utility Hookups Needed</span>
                </div>
              </div>
            </div>

            {/* Spec Highlights Grid under image */}
            <div className="grid grid-cols-3 gap-3 mt-4 text-center">
              <div className="p-4 bg-[#F5F5F7] border border-black/[0.04] rounded-2xl">
                <Droplets className="w-5 h-5 text-[#0071E3] mx-auto mb-1.5" />
                <div className="text-xs font-semibold text-[#1D1D1F]">0-TDS Pure Water</div>
                <div className="text-[11px] text-[#86868B] mt-0.5">Deionized & Spot-Free</div>
              </div>

              <div className="p-4 bg-[#F5F5F7] border border-black/[0.04] rounded-2xl">
                <Zap className="w-5 h-5 text-[#0071E3] mx-auto mb-1.5" />
                <div className="text-xs font-semibold text-[#1D1D1F]">Silent Lithium Power</div>
                <div className="text-[11px] text-[#86868B] mt-0.5">Whisper-Quiet Work</div>
              </div>

              <div className="p-4 bg-[#F5F5F7] border border-black/[0.04] rounded-2xl">
                <Shield className="w-5 h-5 text-[#0071E3] mx-auto mb-1.5" />
                <div className="text-xs font-semibold text-[#1D1D1F]">$2M Coverage</div>
                <div className="text-[11px] text-[#86868B] mt-0.5">Certified Care</div>
              </div>
            </div>
          </div>

          {/* Right Column: 3 Locations & Benefits */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-3.5 mb-8">
              {locationTypes.map((loc) => {
                const IconComponent = loc.icon;
                const isSelected = activeTab === loc.id;

                return (
                  <div
                    key={loc.id}
                    id={`location-card-${loc.id}`}
                    onClick={() => setActiveTab(loc.id)}
                    className={`p-5 rounded-2xl transition-all cursor-pointer border ${
                      isSelected
                        ? 'bg-[#F5F5F7] border-[#0071E3] shadow-sm ring-1 ring-[#0071E3]'
                        : 'bg-white border-black/[0.08] hover:border-black/[0.15]'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-2.5 rounded-xl ${
                        isSelected ? 'bg-[#0071E3] text-white' : 'bg-[#F5F5F7] text-[#1D1D1F]'
                      }`}>
                        <IconComponent className="w-5 h-5" />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="text-base font-semibold text-[#1D1D1F]">
                            {loc.title}
                          </h3>
                          <span className="text-[10px] font-semibold text-[#86868B] px-2.5 py-0.5 bg-black/5 rounded-full">
                            {loc.tag}
                          </span>
                        </div>
                        <p className="text-xs text-[#86868B] leading-relaxed font-normal">
                          {loc.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Direct CTA */}
            <div className="pt-4 border-t border-black/[0.06]">
              <button
                id="studio-book-cta"
                type="button"
                onClick={onOpenBooking}
                className="group w-full py-3.5 bg-[#0071E3] hover:bg-[#0077ED] text-white text-sm font-medium rounded-full flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm"
              >
                <span>Book Mobile Service</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <p className="text-center text-xs text-[#86868B] mt-2.5">
                Serving Scottsdale, Austin, Newport Beach, Beverly Hills & Miami metropolitan areas.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
