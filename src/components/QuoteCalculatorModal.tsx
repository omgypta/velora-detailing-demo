import React, { useState } from 'react';
import { X, ChevronRight, Calculator, Check } from 'lucide-react';
import { VEHICLE_OPTIONS, SERVICE_PACKAGES, SERVICE_ADD_ONS } from '../data/detailingData';
import { VehicleCategory } from '../types';

interface QuoteCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onProceedToBooking: (serviceId: string, vehicleCategory: VehicleCategory) => void;
}

export const QuoteCalculatorModal: React.FC<QuoteCalculatorModalProps> = ({
  isOpen,
  onClose,
  onProceedToBooking
}) => {
  const [vehicle, setVehicle] = useState<VehicleCategory>('sedan');
  const [serviceId, setServiceId] = useState<string>('full-detail');
  const [paintCondition, setPaintCondition] = useState<'well-maintained' | 'moderate-swirls' | 'heavy-oxidation'>('moderate-swirls');
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>(['engine-bay']);

  if (!isOpen) return null;

  const currentVehicle = VEHICLE_OPTIONS.find(v => v.id === vehicle) || VEHICLE_OPTIONS[0];
  const currentService = SERVICE_PACKAGES.find(s => s.id === serviceId) || SERVICE_PACKAGES[1];

  let conditionFactor = 1.0;
  if (paintCondition === 'moderate-swirls') conditionFactor = 1.0;
  if (paintCondition === 'heavy-oxidation') conditionFactor = 1.15;

  const basePrice = Math.round(currentService.basePrice * currentVehicle.multiplier * conditionFactor);
  const addOnsTotal = selectedAddOns.reduce((acc, id) => {
    const item = SERVICE_ADD_ONS.find(a => a.id === id);
    return acc + (item ? item.price : 0);
  }, 0);

  const finalQuote = basePrice + addOnsTotal;

  const toggleAddOn = (id: string) => {
    setSelectedAddOns(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div
        className="bg-white text-[#1D1D1F] w-full max-w-3xl rounded-3xl shadow-2xl border border-black/[0.08] overflow-hidden my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-black/[0.06] bg-white sticky top-0 z-10">
          <div className="flex items-center gap-2">
            <Calculator className="w-4 h-4 text-[#0071E3]" />
            <h3 className="text-sm font-semibold text-[#1D1D1F] tracking-tight">
              Instant Quote Estimator
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full text-[#86868B] hover:text-[#1D1D1F] hover:bg-black/5 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto">
          
          {/* Step 1: Vehicle */}
          <div>
            <label className="block text-xs font-semibold text-[#1D1D1F] mb-2">
              1. Select Vehicle Size
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {VEHICLE_OPTIONS.map((v) => (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => setVehicle(v.id)}
                  className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                    vehicle === v.id
                      ? 'bg-[#F5F5F7] border-[#0071E3] ring-1 ring-[#0071E3] shadow-sm'
                      : 'bg-white border-black/[0.08] hover:border-black/[0.15]'
                  }`}
                >
                  <div className="text-xs font-semibold text-[#1D1D1F]">{v.name}</div>
                  <div className="text-[11px] text-[#86868B] line-clamp-1 mt-0.5">{v.example.split(',')[0]}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Service Tier */}
          <div>
            <label className="block text-xs font-semibold text-[#1D1D1F] mb-2">
              2. Select Service Tier
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SERVICE_PACKAGES.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setServiceId(s.id)}
                  className={`p-4 rounded-2xl border text-left transition-all flex items-start justify-between cursor-pointer ${
                    serviceId === s.id
                      ? 'bg-[#F5F5F7] border-[#0071E3] ring-1 ring-[#0071E3] shadow-sm'
                      : 'bg-white border-black/[0.08] hover:border-black/[0.15]'
                  }`}
                >
                  <div>
                    <div className="text-xs font-semibold text-[#1D1D1F]">{s.name}</div>
                    <div className="text-[11px] text-[#86868B] mt-0.5">{s.tier}</div>
                  </div>
                  <span className="text-sm font-semibold text-[#1D1D1F]">
                    ${Math.round(s.basePrice * currentVehicle.multiplier)}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Current Paint Condition */}
          <div>
            <label className="block text-xs font-semibold text-[#1D1D1F] mb-2">
              3. Current Vehicle Condition
            </label>
            <div className="grid grid-cols-3 gap-2.5">
              {[
                { id: 'well-maintained', label: 'Well Maintained', desc: 'Light dust & fingerprints' },
                { id: 'moderate-swirls', label: 'Standard Daily', desc: 'Wash swirls & light haze' },
                { id: 'heavy-oxidation', label: 'Heavy Defect', desc: 'Deep marring / oxidation' },
              ].map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setPaintCondition(c.id as any)}
                  className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                    paintCondition === c.id
                      ? 'bg-[#F5F5F7] border-[#0071E3] ring-1 ring-[#0071E3] shadow-sm'
                      : 'bg-white border-black/[0.08] text-[#86868B] hover:border-black/[0.15]'
                  }`}
                >
                  <div className="text-xs font-semibold text-[#1D1D1F]">{c.label}</div>
                  <div className="text-[10px] text-[#86868B] mt-0.5">{c.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 4: Optional Upgrades */}
          <div>
            <label className="block text-xs font-semibold text-[#1D1D1F] mb-2">
              4. Tailored Upgrades
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {SERVICE_ADD_ONS.slice(0, 4).map((addon) => (
                <div
                  key={addon.id}
                  onClick={() => toggleAddOn(addon.id)}
                  className={`p-3.5 rounded-2xl border text-xs flex items-center justify-between cursor-pointer transition-colors ${
                    selectedAddOns.includes(addon.id)
                      ? 'bg-[#0071E3]/5 border-[#0071E3]'
                      : 'bg-[#F5F5F7] border-black/[0.04]'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={selectedAddOns.includes(addon.id)}
                      onChange={() => {}}
                      className="rounded border-black/20 text-[#0071E3] focus:ring-0"
                    />
                    <span className="text-[#1D1D1F] font-medium">{addon.name}</span>
                  </div>
                  <span className="font-semibold text-[#0071E3]">+${addon.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Estimate Display Box */}
          <div className="p-6 bg-[#F5F5F7] border border-black/[0.06] rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-xs uppercase tracking-wider font-semibold text-[#0071E3]">Estimated Investment</div>
              <div className="text-3xl font-semibold text-[#1D1D1F] mt-0.5 tracking-tight">
                ${finalQuote}
              </div>
              <p className="text-xs text-[#86868B] font-normal mt-1">
                Includes all travel fees, 0-TDS purified water, and $2M insurance.
              </p>
            </div>

            <button
              type="button"
              onClick={() => {
                onClose();
                onProceedToBooking(serviceId, vehicle);
              }}
              className="w-full sm:w-auto px-8 py-3 bg-[#0071E3] hover:bg-[#0077ED] text-white text-xs font-semibold rounded-full transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
            >
              <span>Book This Estimate</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
