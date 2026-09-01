import React from 'react';
import { Star, Shield, Award, Droplets } from 'lucide-react';

export const TrustBar: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 border-y border-black/[0.06] bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Trust Statement */}
        <div className="text-center mb-12 sm:mb-14">
          <p className="text-xs uppercase tracking-wider font-semibold text-[#0071E3] mb-2">
            The Industry Benchmark
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#1D1D1F] tracking-tight">
            Engineered for drivers who notice the details.
          </h2>
        </div>

        {/* Minimal Restrained Trust Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 pt-2 max-w-5xl mx-auto">
          
          {/* Stat 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-1.5 mb-1 text-[#1D1D1F]">
              <span className="text-3xl sm:text-4xl font-semibold tracking-tight">4.9</span>
              <span className="text-sm font-normal text-[#86868B]">/ 5</span>
              <div className="flex text-amber-500 ml-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
            </div>
            <span className="text-xs font-semibold text-[#1D1D1F] mt-1">
              Average Client Rating
            </span>
            <span className="text-xs text-[#86868B] mt-0.5">
              650+ Verified Reviews
            </span>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#1D1D1F] mb-1">
              2,000+
            </div>
            <span className="text-xs font-semibold text-[#1D1D1F] mt-1">
              Vehicles Completed
            </span>
            <span className="text-xs text-[#86868B] mt-0.5">
              Exotics, Luxury & Daily Drivers
            </span>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#1D1D1F] mb-1">
              100%
            </div>
            <span className="text-xs font-semibold text-[#1D1D1F] mt-1">
              Mobile Van Fleet
            </span>
            <span className="text-xs text-[#86868B] mt-0.5">
              Self-Powered & Self-Contained
            </span>
          </div>

          {/* Stat 4 */}
          <div className="flex flex-col items-center text-center">
            <div className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#1D1D1F] mb-1 flex items-center justify-center gap-1.5">
              <Shield className="w-6 h-6 text-[#0071E3]" />
              <span>$2M</span>
            </div>
            <span className="text-xs font-semibold text-[#1D1D1F] mt-1">
              Garagekeepers Policy
            </span>
            <span className="text-xs text-[#86868B] mt-0.5">
              Fully Bonded & Insured
            </span>
          </div>

        </div>

        {/* Discrete Accreditation Footnote */}
        <div className="mt-14 pt-8 border-t border-black/[0.06] flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-[#86868B]">
          <span className="flex items-center gap-1.5 text-[#1D1D1F] font-medium">
            <Award className="w-4 h-4 text-[#0071E3]" />
            IDA Certified Detailers
          </span>
          <span className="text-black/20 hidden sm:inline">·</span>
          <span className="flex items-center gap-1.5">
            <Droplets className="w-4 h-4 text-[#0071E3]" />
            0-TDS Deionized Pure Water
          </span>
          <span className="text-black/20 hidden sm:inline">·</span>
          <span>RUPES Authorized Partner</span>
          <span className="text-black/20 hidden sm:inline">·</span>
          <span>Gtechniq Ceramic Accredited</span>
        </div>

      </div>
    </section>
  );
};
