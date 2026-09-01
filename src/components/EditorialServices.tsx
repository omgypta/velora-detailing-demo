import React, { useState } from 'react';
import { ArrowRight, Clock, Shield, Check, ChevronRight } from 'lucide-react';
import { SERVICE_PACKAGES, VEHICLE_OPTIONS } from '../data/detailingData';
import { VehicleCategory, ServicePackage } from '../types';

interface EditorialServicesProps {
  onSelectService: (service: ServicePackage) => void;
  onBookService: (serviceId: string, vehicleType: VehicleCategory) => void;
}

export const EditorialServices: React.FC<EditorialServicesProps> = ({
  onSelectService,
  onBookService
}) => {
  const [activeServiceId, setActiveServiceId] = useState<string>('full-detail');
  const [selectedVehicle, setSelectedVehicle] = useState<VehicleCategory>('sedan');

  const currentVehicleOption = VEHICLE_OPTIONS.find(v => v.id === selectedVehicle) || VEHICLE_OPTIONS[0];
  const activeService = SERVICE_PACKAGES.find(s => s.id === activeServiceId) || SERVICE_PACKAGES[1];

  const calculatePrice = (base: number) => {
    return Math.round(base * currentVehicleOption.multiplier);
  };

  return (
    <section id="services" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-20 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#0071E3]">
                Care Packages
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1D1D1F] tracking-tight">
              Choose your level of care.
            </h2>
          </div>

          {/* Apple Segmented Control for Vehicle Category */}
          <div className="bg-[#F5F5F7] p-1 rounded-full inline-flex items-center flex-wrap gap-1 border border-black/[0.04]">
            {VEHICLE_OPTIONS.map((veh) => (
              <button
                key={veh.id}
                type="button"
                id={`service-veh-${veh.id}`}
                onClick={() => setSelectedVehicle(veh.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  selectedVehicle === veh.id
                    ? 'bg-white text-[#1D1D1F] shadow-sm font-semibold'
                    : 'text-[#86868B] hover:text-[#1D1D1F]'
                }`}
              >
                {veh.name.split('/')[0].trim()}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Layout: Left List + Right Visual Inspection Deck */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Menu Items */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-black/[0.06] border-y border-black/[0.06]">
            {SERVICE_PACKAGES.map((pkg) => {
              const isActive = activeServiceId === pkg.id;
              const price = calculatePrice(pkg.basePrice);

              return (
                <div
                  key={pkg.id}
                  id={`service-row-${pkg.id}`}
                  onMouseEnter={() => setActiveServiceId(pkg.id)}
                  onClick={() => setActiveServiceId(pkg.id)}
                  className={`group py-7 sm:py-8 transition-all cursor-pointer ${
                    isActive ? 'bg-[#F5F5F7]/60 px-4 rounded-2xl -mx-4' : 'hover:bg-[#F5F5F7]/30 px-4 -mx-4 rounded-2xl'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-baseline gap-4 sm:gap-6">
                      <span className="text-xs sm:text-sm font-mono text-[#86868B]">
                        {pkg.number}
                      </span>
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className={`text-xl sm:text-2xl font-semibold transition-colors ${
                            isActive ? 'text-[#1D1D1F]' : 'text-[#1D1D1F]/80 group-hover:text-[#1D1D1F]'
                          }`}>
                            {pkg.name}
                          </h3>
                          {pkg.featured && (
                            <span className="px-2.5 py-0.5 text-[10px] font-semibold bg-[#0071E3] text-white rounded-full">
                              Popular
                            </span>
                          )}
                        </div>

                        <p className="text-xs sm:text-sm text-[#86868B] font-normal max-w-md leading-relaxed">
                          {pkg.tagline}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col items-end text-right shrink-0">
                      <div className="text-lg sm:text-xl font-semibold text-[#1D1D1F]">
                        <span className="text-xs font-normal text-[#86868B] mr-1">From</span>
                        ${price}
                      </div>
                      <span className="text-xs text-[#86868B] font-normal mt-0.5">
                        {pkg.duration}
                      </span>
                    </div>
                  </div>

                  {/* Expanded mini-inclusions on Active / Mobile */}
                  {isActive && (
                    <div className="mt-5 pl-8 sm:pl-10 pt-4 border-t border-black/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#1D1D1F]/80">
                        {pkg.inclusions.slice(0, 4).map((inc, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#0071E3]" />
                            <span className="line-clamp-1">{inc}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex items-center gap-3 pt-2 sm:pt-0 shrink-0">
                        <button
                          type="button"
                          id={`service-explore-${pkg.id}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            onSelectService(pkg);
                          }}
                          className="text-xs font-medium text-[#0071E3] hover:underline flex items-center gap-1 cursor-pointer"
                        >
                          <span>Details</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </button>

                        <button
                          type="button"
                          id={`service-book-${pkg.id}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            onBookService(pkg.id, selectedVehicle);
                          }}
                          className="px-4 py-2 bg-[#0071E3] hover:bg-[#0077ED] text-white text-xs font-medium rounded-full transition-all cursor-pointer shadow-sm"
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Visual Stage (Switches dynamically on hover/active) */}
          <div className="lg:col-span-5 sticky top-24 hidden lg:block">
            <div className="bg-[#F5F5F7] border border-black/[0.06] rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
              {/* Image Box */}
              <div className="relative aspect-[4/3] overflow-hidden bg-black/5">
                <img
                  src={activeService.image}
                  alt={activeService.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] text-[#1D1D1F] font-semibold shadow-sm">
                  {activeService.tier}
                </div>
                <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-xs text-white">
                  Est. {activeService.duration}
                </div>
              </div>

              {/* Package Snapshot Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-lg font-semibold text-[#1D1D1F]">
                    {activeService.name}
                  </h4>
                  <span className="text-xl font-semibold text-[#1D1D1F]">
                    ${calculatePrice(activeService.basePrice)}
                  </span>
                </div>

                <p className="text-xs text-[#86868B] leading-relaxed mb-5 font-normal">
                  {activeService.shortDesc}
                </p>

                <div className="space-y-2.5 mb-6">
                  <div className="flex items-center gap-2 text-xs text-[#1D1D1F]">
                    <Shield className="w-4 h-4 text-[#0071E3] shrink-0" />
                    <span className="text-[#86868B]">Protection:</span>
                    <span className="font-medium">{activeService.protectionLevel}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#1D1D1F]">
                    <Clock className="w-4 h-4 text-[#0071E3] shrink-0" />
                    <span className="text-[#86868B]">Frequency:</span>
                    <span className="font-medium">{activeService.recommendedFrequency}</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-black/[0.06]">
                  <button
                    type="button"
                    onClick={() => onSelectService(activeService)}
                    className="w-full py-2.5 px-3 text-xs font-medium text-[#1D1D1F] bg-white hover:bg-[#E8E8ED] border border-black/[0.06] rounded-full transition-colors text-center cursor-pointer shadow-sm"
                  >
                    View Protocol
                  </button>

                  <button
                    type="button"
                    onClick={() => onBookService(activeService.id, selectedVehicle)}
                    className="w-full py-2.5 px-3 text-xs font-medium text-white bg-[#0071E3] hover:bg-[#0077ED] rounded-full transition-colors text-center cursor-pointer shadow-sm"
                  >
                    Reserve Slot
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
