import React from 'react';
import { X, ChevronRight, CheckCircle2, Gauge, Clock, ShieldCheck, MapPin } from 'lucide-react';
import { FEATURED_CASE_STUDY } from '../data/detailingData';
import { BeforeAfterSlider } from './BeforeAfterSlider';

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  isOpen,
  onClose,
  onOpenBooking
}) => {
  if (!isOpen) return null;

  const caseStudy = FEATURED_CASE_STUDY;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 lg:p-8 animate-fadeIn">
      <div
        className="bg-white text-[#1D1D1F] w-full max-w-4xl rounded-3xl shadow-2xl border border-black/[0.08] overflow-hidden my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-black/[0.06] bg-white sticky top-0 z-20">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#0071E3]">
              Case Study
            </span>
            <span className="text-black/20">·</span>
            <span className="text-xs font-semibold text-[#1D1D1F]">
              {caseStudy.vehicle}
            </span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full text-[#86868B] hover:text-[#1D1D1F] hover:bg-black/5 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-10">
          
          {/* Header */}
          <div>
            <div className="flex items-center gap-2 text-xs text-[#86868B] mb-2">
              <MapPin className="w-3.5 h-3.5 text-[#0071E3]" />
              <span>{caseStudy.location}</span>
              <span>·</span>
              <span>Treatment Time: {caseStudy.duration}</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-semibold text-[#1D1D1F] leading-tight mb-4 tracking-tight">
              Restoring Agate Grey Metallic Depth & 5-Year Ceramic Protection
            </h2>

            <p className="text-sm text-[#86868B] font-normal leading-relaxed max-w-2xl">
              {caseStudy.challenge}
            </p>
          </div>

          {/* Interactive Before & After in Modal */}
          <div>
            <div className="text-xs font-semibold text-[#1D1D1F] mb-3">
              Interactive Surface Inspection
            </div>
            <BeforeAfterSlider
              beforeImage={caseStudy.beforeImage}
              afterImage={caseStudy.afterImage}
              beforeLabel="Pre-Detail Swirls"
              afterLabel="Corrected & Coated"
              aspectRatio="aspect-[16/10]"
              initialPosition={50}
              altText="Porsche 911 transformation"
            />
          </div>

          {/* Technical Diagnostics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-5 bg-[#F5F5F7] border border-black/[0.06] rounded-3xl">
              <div className="flex items-center gap-2 text-xs text-[#86868B] font-medium mb-1">
                <Gauge className="w-4 h-4 text-[#0071E3]" />
                <span>Initial Paint Depth</span>
              </div>
              <div className="text-xl font-semibold text-[#1D1D1F]">{caseStudy.paintReadingBefore}</div>
              <p className="text-[11px] text-[#86868B] mt-1">OEM clear coat depth measured with precision gauge.</p>
            </div>

            <div className="p-5 bg-[#F5F5F7] border border-black/[0.06] rounded-3xl">
              <div className="flex items-center gap-2 text-xs text-[#86868B] font-medium mb-1">
                <ShieldCheck className="w-4 h-4 text-[#0071E3]" />
                <span>Final Paint Depth</span>
              </div>
              <div className="text-xl font-semibold text-[#1D1D1F]">{caseStudy.paintReadingAfter}</div>
              <p className="text-[11px] text-[#86868B] mt-1">Precision micro-abrasive removed &lt;3 μm clear layer.</p>
            </div>

            <div className="p-5 bg-[#F5F5F7] border border-black/[0.06] rounded-3xl">
              <div className="flex items-center gap-2 text-xs text-[#86868B] font-medium mb-1">
                <Clock className="w-4 h-4 text-[#0071E3]" />
                <span>Protection Warranty</span>
              </div>
              <div className="text-xl font-semibold text-[#1D1D1F]">5 Years Active</div>
              <p className="text-[11px] text-[#86868B] mt-1">Documented Carfax warranty & annual maintenance.</p>
            </div>
          </div>

          {/* Narrative & Completed Protocol */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-[#1D1D1F] tracking-tight">The Methodology</h3>
            <p className="text-sm text-[#86868B] leading-relaxed font-normal">
              {caseStudy.processNarrative}
            </p>

            <div className="bg-[#F5F5F7] border border-black/[0.06] rounded-3xl p-6">
              <div className="text-xs font-semibold text-[#1D1D1F] mb-4">
                Completed Protocol Checklist
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {caseStudy.stepsCompleted.map((step, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#1D1D1F]">
                    <CheckCircle2 className="w-4 h-4 text-[#0071E3] shrink-0 mt-0.5" />
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Macro Inspection Gallery */}
          <div>
            <h3 className="text-2xl font-semibold text-[#1D1D1F] mb-4 tracking-tight">Macro Surface Documentation</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {caseStudy.macroImages.map((macro, idx) => (
                <div key={idx} className="bg-[#F5F5F7] border border-black/[0.06] rounded-3xl overflow-hidden">
                  <div className="aspect-[4/3] bg-black/5">
                    <img src={macro.image} alt={macro.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="p-4">
                    <h4 className="text-xs font-semibold text-[#1D1D1F] mb-1">{macro.title}</h4>
                    <p className="text-[11px] text-[#86868B] leading-snug">{macro.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Bottom CTA */}
        <div className="px-6 py-4 border-t border-black/[0.06] bg-white flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-[#86868B]">
            Ready to give your car this caliber of care?
          </span>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 text-xs font-medium text-[#86868B] hover:text-[#1D1D1F] cursor-pointer"
            >
              Close
            </button>
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="px-6 py-2.5 bg-[#0071E3] hover:bg-[#0077ED] text-white text-xs font-semibold rounded-full transition-colors flex items-center gap-2 cursor-pointer shadow-sm"
            >
              <span>Book Paint Enhancement</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
