import React from 'react';
import { Eye, Shield, Clock } from 'lucide-react';

export const WhyVelora: React.FC = () => {
  const principles = [
    {
      title: 'PRECISION',
      tagline: 'Deliberate micro-attention to every surface.',
      description: 'From delicate air-vent louvers and seat stitching to clear-coat thickness gauges and LED swirl analysis. We see what others overlook.',
      image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80',
      icon: Eye
    },
    {
      title: 'LAB-GRADE',
      tagline: 'Professional-grade formulas and tooling.',
      description: 'We never compromise with consumer-grade bottles. Our mobile rigs carry Rupes BigFoot polishers, Swissvax carnauba, Gtechniq ceramics, and 0-TDS water.',
      image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80',
      icon: Shield
    },
    {
      title: 'CONVENIENCE',
      tagline: 'Premium service built around your calendar.',
      description: 'Your time is your most valuable asset. No taking your car to a dirty garage, no waiting in a plastic lobby. We arrive at your exact cadence.',
      image: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=800&q=80',
      icon: Clock
    }
  ];

  return (
    <section id="philosophy" className="py-24 sm:py-32 bg-white border-t border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3.5">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#0071E3]">
              Our Philosophy
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1D1D1F] tracking-tight">
            We obsess over the details you notice later.
          </h2>
        </div>

        {/* 3 Principles with rich photography and clean spacing */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {principles.map((item) => {
            const IconComp = item.icon;

            return (
              <div
                key={item.title}
                className="bg-[#F5F5F7] border border-black/[0.06] rounded-3xl overflow-hidden shadow-[0_4px_25px_rgba(0,0,0,0.02)] flex flex-col justify-between hover:shadow-lg transition-all"
              >
                {/* Visual Header */}
                <div className="relative aspect-[16/10] overflow-hidden bg-black/5">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md p-2.5 rounded-2xl text-white">
                    <IconComp className="w-4 h-4 text-[#0071E3]" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xs uppercase tracking-wider font-semibold text-[#0071E3] mb-2">
                      {item.title}
                    </h3>
                    <div className="text-xl font-semibold text-[#1D1D1F] mb-3 tracking-tight">
                      {item.tagline}
                    </div>
                    <p className="text-xs sm:text-sm text-[#86868B] font-normal leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-black/[0.06] flex items-center justify-between text-xs text-[#86868B]">
                    <span>Standard on all packages</span>
                    <span className="text-[#0071E3] font-semibold">100% Guaranteed</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
