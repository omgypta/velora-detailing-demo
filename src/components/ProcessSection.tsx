import React from 'react';
import { ArrowRight, Sparkles, MapPin, Calendar, CheckCircle, ChevronRight } from 'lucide-react';

interface ProcessSectionProps {
  onOpenBooking: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenBooking }) => {
  const steps = [
    {
      num: '01',
      title: 'Select your service',
      desc: 'Pick from maintenance washes, concourse resets, paint corrections, or ceramic coatings tailored to your vehicle.',
      icon: Sparkles
    },
    {
      num: '02',
      title: 'Pick your location',
      desc: 'Tell us where your car will be parked — home driveway, executive garage, or workplace lot.',
      icon: MapPin
    },
    {
      num: '03',
      title: 'We arrive fully equipped',
      desc: 'Our master detailer arrives with 100% deionized spot-free water, whisper-quiet lithium power, and precision gear.',
      icon: Calendar
    },
    {
      num: '04',
      title: 'Showroom delivery',
      desc: 'Inspect the vehicle side-by-side with your technician, check paint depth readings, and drive away in pure bliss.',
      icon: CheckCircle
    }
  ];

  return (
    <section id="process" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3.5">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#0071E3]">
              Simple Experience
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1D1D1F] tracking-tight">
            Four steps. Zero friction.
          </h2>
        </div>

        {/* 4 Steps Horizontal Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, idx) => {
            const IconComp = step.icon;

            return (
              <div
                key={step.num}
                className="relative bg-[#F5F5F7] border border-black/[0.06] rounded-3xl p-6 sm:p-7 flex flex-col justify-between hover:shadow-md transition-all"
              >
                <div>
                  {/* Step Number & Icon Circle */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-full bg-white border border-black/[0.06] flex items-center justify-center text-xs font-mono font-semibold text-[#1D1D1F] shadow-sm">
                      {step.num}
                    </div>

                    <div className="text-[11px] font-semibold text-[#0071E3]">
                      Step {idx + 1}
                    </div>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="text-lg font-semibold text-[#1D1D1F] mb-2 tracking-tight">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#86868B] font-normal leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-black/[0.06] flex items-center gap-2 text-xs text-[#86868B] font-medium">
                  <IconComp className="w-4 h-4 text-[#0071E3]" />
                  <span>Effortless Protocol</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick CTA under process */}
        <div className="mt-14 pt-8 border-t border-black/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-[#86868B] font-normal">
            Online booking takes under <strong className="font-semibold text-[#1D1D1F]">60 seconds</strong>.
          </div>
          <button
            type="button"
            onClick={onOpenBooking}
            className="inline-flex items-center gap-1 text-sm font-semibold text-[#0071E3] hover:underline cursor-pointer"
          >
            <span>Book Your Appointment</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
