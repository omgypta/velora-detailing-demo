import React from 'react';
import { ArrowRight, Clock, ShieldCheck, Activity, Gauge, ChevronRight } from 'lucide-react';
import { FEATURED_CASE_STUDY } from '../data/detailingData';

interface FeaturedCaseStudyProps {
  onOpenCaseStudy: () => void;
  onOpenBooking: () => void;
}

export const FeaturedCaseStudy: React.FC<FeaturedCaseStudyProps> = ({
  onOpenCaseStudy,
  onOpenBooking
}) => {
  const caseStudy = FEATURED_CASE_STUDY;

  return (
    <section className="py-24 sm:py-32 bg-white border-y border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Label */}
        <div className="mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 mb-3.5">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#0071E3]">
              Featured Transformation
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1D1D1F] tracking-tight">
            From neglected to exceptional.
          </h2>
        </div>

        {/* Cinematic Apple Pro Box */}
        <div className="relative rounded-3xl overflow-hidden bg-[#1D1D1F] text-white shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
          {/* Main Large Cinematic Image */}
          <div className="relative aspect-[21/9] min-h-[360px] sm:min-h-[460px] overflow-hidden">
            <img
              src={caseStudy.heroImage}
              alt={caseStudy.vehicle}
              className="w-full h-full object-cover object-center opacity-85 hover:scale-102 transition-transform duration-1000 ease-out"
            />
            {/* Soft gradient overlay for text legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1D1D1F] via-[#1D1D1F]/50 to-transparent" />
          </div>

          {/* Editorial Content Overlay */}
          <div className="relative p-6 sm:p-10 lg:p-12 -mt-24 sm:-mt-32 z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
              
              <div className="lg:col-span-8">
                <div className="flex flex-wrap items-center gap-3 text-xs tracking-wide text-[#0071E3] font-semibold mb-3">
                  <span>{caseStudy.yearMakeModel}</span>
                  <span className="text-white/30">·</span>
                  <span className="text-white/70">{caseStudy.location}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white mb-4 leading-tight tracking-tight">
                  Restoring Agate Grey metallic clarity under precision LED inspection.
                </h3>

                <p className="text-sm text-white/80 font-normal max-w-2xl leading-relaxed mb-6">
                  {caseStudy.challenge}
                </p>

                {/* 4 Metric Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-5 border-t border-white/10">
                  <div>
                    <div className="text-xs text-white/50 font-medium">Vehicle</div>
                    <div className="text-sm font-semibold text-white mt-0.5">Porsche 911 (992)</div>
                  </div>

                  <div>
                    <div className="text-xs text-white/50 font-medium">Service</div>
                    <div className="text-sm font-semibold text-white mt-0.5">Paint & Ceramic</div>
                  </div>

                  <div>
                    <div className="text-xs text-white/50 font-medium">Duration</div>
                    <div className="text-sm font-semibold text-white mt-0.5">{caseStudy.duration}</div>
                  </div>

                  <div>
                    <div className="text-xs text-white/50 font-medium">Defect Eradication</div>
                    <div className="text-sm font-semibold text-[#0071E3] mt-0.5">96.8% Verified</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
                <button
                  id="case-study-view-btn"
                  type="button"
                  onClick={onOpenCaseStudy}
                  className="w-full py-3.5 px-6 bg-white text-[#1D1D1F] text-xs font-semibold rounded-full hover:bg-[#F5F5F7] transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                >
                  <span>Explore Case Study</span>
                  <ChevronRight className="w-4 h-4" />
                </button>

                <button
                  id="case-study-book-btn"
                  type="button"
                  onClick={onOpenBooking}
                  className="w-full py-3.5 px-6 bg-white/10 hover:bg-white/15 border border-white/20 text-white text-xs font-medium rounded-full transition-colors text-center cursor-pointer backdrop-blur-sm"
                >
                  Book This Treatment
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
