import React from 'react';
import { ArrowRight, MapPin, Sparkles, ShieldCheck, ChevronRight } from 'lucide-react';
import { BeforeAfterSlider } from './BeforeAfterSlider';

interface HeroProps {
  onOpenBooking: () => void;
  onScrollToWork: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onScrollToWork }) => {
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-white">
      {/* Subtle Apple ambient background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0071E3]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Content Column */}
          <div className="lg:col-span-5 flex flex-col justify-center z-10">
            {/* Apple-style Pill Badge */}
            <div className="inline-flex items-center gap-2 mb-6 self-start px-3.5 py-1 rounded-full bg-[#F5F5F7] border border-black/[0.06]">
              <span className="w-2 h-2 rounded-full bg-[#0071E3] animate-pulse" />
              <span className="text-xs font-medium text-[#1D1D1F] tracking-tight">
                Mobile Auto Detailing. Perfected.
              </span>
            </div>

            {/* Apple-style Display Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-semibold leading-[1.08] tracking-tight text-[#1D1D1F] mb-6 sm:mb-7">
              Your car.<br />
              <span className="text-[#86868B]">Remarkably restored.</span>
            </h1>

            {/* Short Supporting Sentence */}
            <p className="text-base sm:text-lg text-[#86868B] font-normal leading-[1.625] max-w-lg mb-8 sm:mb-10">
              Concourse-grade mobile detailing engineered directly for your driveway, office, or private hangar. Zero spigots or power needed.
            </p>

            {/* Apple-style Primary and Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
              <button
                id="hero-primary-cta"
                type="button"
                onClick={onOpenBooking}
                className="group inline-flex items-center justify-center px-7 py-3.5 text-sm font-medium text-white bg-[#0071E3] hover:bg-[#0077ED] active:scale-[0.98] rounded-full transition-all duration-200 shadow-sm cursor-pointer"
              >
                <span>Book an Appointment</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              <button
                id="hero-secondary-cta"
                type="button"
                onClick={onScrollToWork}
                className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium text-[#0071E3] hover:text-[#0077ED] bg-[#F5F5F7] hover:bg-[#E8E8ED] rounded-full transition-all duration-200 cursor-pointer"
              >
                <span>See the Transformation</span>
                <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>

            {/* Apple Micro Proof Badges */}
            <div className="pt-6 border-t border-black/[0.08] flex items-center gap-6 text-xs text-[#86868B]">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#0071E3]" />
                <span className="text-[#1D1D1F] font-medium">We Come To You</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#0071E3]" />
                <span className="text-[#1D1D1F] font-medium">0-TDS Deionized Water</span>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#0071E3]" />
                <span className="text-[#1D1D1F] font-medium">$2M Insured</span>
              </div>
            </div>
          </div>

          {/* Visual Column — Real Interactive Before / After */}
          <div className="lg:col-span-7">
            <div className="relative">
              {/* Frame Header */}
              <div className="mb-3.5 flex items-center justify-between px-1 text-xs">
                <div className="flex items-center gap-2 text-[#86868B]">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="font-medium text-[#1D1D1F]">Interactive Inspection</span>
                  <span>·</span>
                  <span>2024 Porsche 911 Carrera</span>
                </div>
                <span className="hidden sm:inline-block text-xs text-[#86868B] font-medium">
                  Scottsdale, AZ
                </span>
              </div>

              {/* Before/After Slider Container */}
              <BeforeAfterSlider
                beforeImage="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=80"
                afterImage="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1400&q=85"
                beforeLabel="BEFORE"
                afterLabel="AFTER"
                aspectRatio="aspect-[16/10]"
                initialPosition={48}
                altText="Porsche 911 Carrera mobile detailing before and after"
              />

              {/* Caption Under Visual */}
              <div className="mt-3.5 flex items-center justify-between text-xs text-[#86868B]">
                <p className="font-normal">
                  Single-stage machine paint enhancement & 12-month ceramic polymer application on location.
                </p>
                <button
                  type="button"
                  onClick={onScrollToWork}
                  className="font-medium text-[#0071E3] hover:underline whitespace-nowrap ml-4 inline-flex items-center"
                >
                  <span>Explore Case Study</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
