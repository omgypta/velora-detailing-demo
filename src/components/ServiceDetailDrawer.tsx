import React from 'react';
import { X, CheckCircle2, Shield, Clock, Sparkles, ChevronRight, Droplets } from 'lucide-react';
import { ServicePackage } from '../types';

interface ServiceDetailDrawerProps {
  service: ServicePackage | null;
  onClose: () => void;
  onBook: (serviceId: string) => void;
}

export const ServiceDetailDrawer: React.FC<ServiceDetailDrawerProps> = ({
  service,
  onClose,
  onBook
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/40 backdrop-blur-md flex justify-end animate-fadeIn">
      <div
        className="bg-white text-[#1D1D1F] w-full max-w-2xl min-h-screen shadow-2xl border-l border-black/[0.08] flex flex-col justify-between p-6 sm:p-10 overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-black/[0.06] mb-8">
            <div>
              <span className="text-xs uppercase tracking-wider font-semibold text-[#0071E3]">
                {service.tier} · Tier {service.number}
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#1D1D1F] mt-1 tracking-tight">
                {service.name}
              </h2>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-full text-[#86868B] hover:text-[#1D1D1F] hover:bg-black/5 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Hero Banner */}
          <div className="relative aspect-[16/9] rounded-3xl overflow-hidden mb-8 bg-black/5">
            <img src={service.image} alt={service.name} className="w-full h-full object-cover" />
            <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-full text-white text-xs font-medium">
              From ${service.basePrice} · {service.duration}
            </div>
          </div>

          {/* Full Narrative */}
          <div className="mb-8">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#0071E3] mb-2">
              Overview & Objectives
            </h3>
            <p className="text-sm text-[#86868B] font-normal leading-relaxed">
              {service.fullDesc}
            </p>
          </div>

          {/* Exterior Process Breakdown */}
          <div className="mb-6 bg-[#F5F5F7] p-6 rounded-3xl border border-black/[0.06]">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#1D1D1F] mb-3">
              <Droplets className="w-4 h-4 text-[#0071E3]" />
              <span>Exterior Protocol ({service.exteriorSteps.length} Stages)</span>
            </div>
            <div className="space-y-2.5">
              {service.exteriorSteps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-[#1D1D1F]">
                  <span className="text-[10px] font-mono text-[#86868B] mt-0.5">{idx + 1}.</span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interior Process Breakdown */}
          <div className="mb-8 bg-[#F5F5F7] p-6 rounded-3xl border border-black/[0.06]">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#1D1D1F] mb-3">
              <Sparkles className="w-4 h-4 text-[#0071E3]" />
              <span>Cabin & Interior Treatment</span>
            </div>
            <div className="space-y-2.5">
              {service.interiorSteps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-[#1D1D1F]">
                  <span className="text-[10px] font-mono text-[#86868B] mt-0.5">{idx + 1}.</span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Protection & Longevity */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="p-5 bg-[#F5F5F7] border border-black/[0.06] rounded-3xl">
              <Shield className="w-4 h-4 text-[#0071E3] mb-1" />
              <div className="text-[10px] uppercase tracking-wider font-semibold text-[#86868B]">Protection Level</div>
              <div className="text-xs font-semibold text-[#1D1D1F] mt-0.5">{service.protectionLevel}</div>
            </div>

            <div className="p-5 bg-[#F5F5F7] border border-black/[0.06] rounded-3xl">
              <Clock className="w-4 h-4 text-[#0071E3] mb-1" />
              <div className="text-[10px] uppercase tracking-wider font-semibold text-[#86868B]">Recommended Cadence</div>
              <div className="text-xs font-semibold text-[#1D1D1F] mt-0.5">{service.recommendedFrequency}</div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-6 border-t border-black/[0.06] flex items-center justify-between gap-4">
          <div>
            <div className="text-[10px] uppercase tracking-wider text-[#86868B]">Starting Base</div>
            <div className="text-2xl font-semibold text-[#1D1D1F] tracking-tight">${service.basePrice}</div>
          </div>

          <button
            type="button"
            onClick={() => {
              onClose();
              onBook(service.id);
            }}
            className="px-8 py-3 bg-[#0071E3] hover:bg-[#0077ED] text-white text-xs font-semibold rounded-full flex items-center gap-2 cursor-pointer shadow-sm transition-all"
          >
            <span>Book This Service</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
