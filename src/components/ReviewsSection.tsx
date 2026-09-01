import React from 'react';
import { Star, ShieldCheck } from 'lucide-react';
import { REVIEWS } from '../data/detailingData';

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-24 sm:py-32 bg-white border-t border-black/[0.06]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3.5">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#0071E3]">
              Client Experiences
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1D1D1F] tracking-tight">
            The standard our clients count on.
          </h2>
        </div>

        {/* 3 Apple-style Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#F5F5F7] border border-black/[0.06] rounded-3xl p-7 sm:p-8 flex flex-col justify-between hover:shadow-md transition-all"
            >
              <div>
                {/* Minimal Star Rating */}
                <div className="flex items-center gap-1 mb-4 text-amber-500">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Concise Review Text */}
                <p className="text-sm sm:text-base text-[#1D1D1F] font-normal leading-relaxed mb-6">
                  “{rev.quote}”
                </p>
              </div>

              {/* Author Attribution */}
              <div className="pt-4 border-t border-black/[0.06]">
                <div className="text-sm font-semibold text-[#1D1D1F]">
                  {rev.author}
                </div>
                <div className="text-xs text-[#86868B] mt-0.5 font-normal">
                  {rev.vehicle} · <span className="text-[#1D1D1F]">{rev.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Aggregate Verification Trust Banner */}
        <div className="mt-12 p-6 bg-[#F5F5F7] border border-black/[0.06] rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#86868B]">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 text-[#0071E3]" />
            <span className="font-medium text-[#1D1D1F]">Verified Client Reviews</span>
            <span className="text-black/20">·</span>
            <span>Google 5.0 Star & PCA Member Reviews</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#1D1D1F] font-semibold">100% Satisfaction Guarantee</span>
            <span>· If anything is missed, we return immediately.</span>
          </div>
        </div>

      </div>
    </section>
  );
};
