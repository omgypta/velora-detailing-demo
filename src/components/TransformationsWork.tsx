import React, { useState } from 'react';
import { BeforeAfterSlider } from './BeforeAfterSlider';
import { TRANSFORMATION_ITEMS } from '../data/detailingData';
import { TransformationItem } from '../types';
import { ArrowRight, MapPin, Sparkles, ChevronRight } from 'lucide-react';

interface TransformationsWorkProps {
  onOpenCaseStudy: () => void;
  onOpenBooking: () => void;
}

export const TransformationsWork: React.FC<TransformationsWorkProps> = ({
  onOpenCaseStudy,
  onOpenBooking
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const filteredItems = activeCategory === 'all'
    ? TRANSFORMATION_ITEMS
    : TRANSFORMATION_ITEMS.filter(item => item.category === activeCategory);

  const heroItem = filteredItems[0] || TRANSFORMATION_ITEMS[0];
  const secondaryItems = filteredItems.slice(1);

  return (
    <section id="the-work" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-20 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3.5">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#0071E3]">
                Portfolio
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1D1D1F] tracking-tight">
              Clean is only the beginning.
            </h2>
          </div>

          {/* Apple-style Category Filter Pills */}
          <div className="bg-[#F5F5F7] p-1 rounded-full inline-flex items-center gap-1 overflow-x-auto border border-black/[0.04] scrollbar-none">
            {[
              { id: 'all', label: 'All' },
              { id: 'paint', label: 'Paint Enhancement' },
              { id: 'ceramic', label: 'Ceramic Defense' },
              { id: 'full', label: 'Full Reset' },
              { id: 'interior', label: 'Leather' }
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                id={`filter-work-${cat.id}`}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all whitespace-nowrap cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-white text-[#1D1D1F] shadow-sm font-semibold'
                    : 'text-[#86868B] hover:text-[#1D1D1F]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Asymmetric Layout */}
        <div className="space-y-10">
          
          {/* 1. Large Featured Transformation */}
          <div className="bg-[#F5F5F7] border border-black/[0.06] rounded-3xl p-6 sm:p-8 lg:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.03)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Slider in large featured layout */}
              <div className="lg:col-span-8">
                <BeforeAfterSlider
                  beforeImage={heroItem.beforeImage}
                  afterImage={heroItem.afterImage}
                  beforeLabel="BEFORE"
                  afterLabel="AFTER"
                  aspectRatio="aspect-[16/10]"
                  initialPosition={45}
                  altText={heroItem.title}
                />
              </div>

              {/* Editorial details */}
              <div className="lg:col-span-4 flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center gap-2 text-xs text-[#86868B] font-medium mb-2">
                    <MapPin className="w-3.5 h-3.5 text-[#0071E3]" />
                    <span>{heroItem.location}</span>
                    <span>·</span>
                    <span>{heroItem.duration}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-semibold text-[#1D1D1F] mb-2 tracking-tight">
                    {heroItem.vehicle}
                  </h3>

                  <div className="inline-block px-3 py-1 bg-white text-[#1D1D1F] text-xs font-medium rounded-full mb-4 border border-black/[0.06] shadow-sm">
                    {heroItem.service}
                  </div>

                  <p className="text-xs sm:text-sm text-[#86868B] leading-relaxed font-normal mb-6">
                    {heroItem.summary}
                  </p>

                  <div className="p-3.5 bg-white border border-black/[0.06] rounded-2xl mb-6 shadow-sm">
                    <div className="text-[10px] uppercase tracking-wider text-[#86868B] mb-0.5 font-semibold">
                      Verified Result
                    </div>
                    <div className="text-xs font-semibold text-[#1D1D1F] flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#0071E3]" />
                      <span>{heroItem.defectRemoval}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-black/[0.06]">
                  <button
                    type="button"
                    onClick={onOpenCaseStudy}
                    className="text-xs font-medium text-[#0071E3] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>Full Case Study</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={onOpenBooking}
                    className="ml-auto px-4 py-2 bg-[#0071E3] text-white text-xs font-medium rounded-full hover:bg-[#0077ED] transition-colors cursor-pointer shadow-sm"
                  >
                    Book Similar
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* 2. Two Smaller Secondary Transformation Cards */}
          {secondaryItems.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {secondaryItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#F5F5F7] border border-black/[0.06] rounded-3xl p-6 flex flex-col justify-between shadow-[0_4px_20px_rgba(0,0,0,0.02)]"
                >
                  <div>
                    <div className="mb-4">
                      <BeforeAfterSlider
                        beforeImage={item.beforeImage}
                        afterImage={item.afterImage}
                        beforeLabel="BEFORE"
                        afterLabel="AFTER"
                        aspectRatio="aspect-[16/10]"
                        initialPosition={50}
                        altText={item.title}
                        showControls={false}
                      />
                    </div>

                    <div className="flex items-center justify-between text-xs text-[#86868B] mb-1.5 font-medium">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#0071E3]" />
                        {item.location}
                      </span>
                      <span>{item.duration}</span>
                    </div>

                    <h4 className="text-xl font-semibold text-[#1D1D1F] mb-1 tracking-tight">
                      {item.vehicle}
                    </h4>

                    <div className="text-xs font-medium text-[#86868B] mb-3">
                      {item.service}
                    </div>

                    <p className="text-xs text-[#86868B] font-normal leading-relaxed mb-4">
                      {item.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-black/[0.06] flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#1D1D1F]">
                      {item.defectRemoval}
                    </span>
                    <button
                      type="button"
                      onClick={onOpenBooking}
                      className="text-xs font-medium text-[#0071E3] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <span>Inquire</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
