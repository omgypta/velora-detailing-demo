import React, { useState, useEffect } from 'react';
import {
  X, Check, ArrowRight, ArrowLeft, Calendar as CalendarIcon,
  Clock, MapPin, Car, Shield, Sparkles, CheckCircle2, Phone, Mail, User, ChevronRight
} from 'lucide-react';
import { VEHICLE_OPTIONS, SERVICE_PACKAGES, SERVICE_ADD_ONS } from '../data/detailingData';
import { VehicleCategory, BookingFormData } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
  initialVehicleCategory?: VehicleCategory;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialServiceId = 'full-detail',
  initialVehicleCategory = 'sedan'
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [bookingRef, setBookingRef] = useState<string>('');

  const [formData, setFormData] = useState<BookingFormData>({
    vehicleCategory: initialVehicleCategory,
    vehicleDetails: {
      year: '2024',
      make: 'Porsche',
      model: '911 Carrera',
      color: 'Agate Grey'
    },
    serviceId: initialServiceId,
    selectedAddOns: [],
    locationType: 'home',
    address: '8400 E Crescent Rim Dr',
    city: 'Scottsdale',
    state: 'AZ',
    zip: '85255',
    gateCode: '4921',
    parkingNotes: 'Park in circular driveway front of garage.',
    date: '2026-09-08',
    timeSlot: '09:00 AM (Morning Slot)',
    contact: {
      firstName: 'Jonathan',
      lastName: 'Miller',
      phone: '(480) 555-0192',
      email: 'j.miller@velora-client.com',
      notes: 'Please pay extra attention to wheel barrels and seat seams.'
    }
  });

  // Sync props if modal re-opens with new parameters
  useEffect(() => {
    if (initialServiceId) {
      setFormData(prev => ({ ...prev, serviceId: initialServiceId }));
    }
    if (initialVehicleCategory) {
      setFormData(prev => ({ ...prev, vehicleCategory: initialVehicleCategory }));
    }
  }, [initialServiceId, initialVehicleCategory, isOpen]);

  if (!isOpen) return null;

  const currentVehicle = VEHICLE_OPTIONS.find(v => v.id === formData.vehicleCategory) || VEHICLE_OPTIONS[0];
  const currentService = SERVICE_PACKAGES.find(s => s.id === formData.serviceId) || SERVICE_PACKAGES[1];

  // Pricing calculation
  const baseServicePrice = Math.round(currentService.basePrice * currentVehicle.multiplier);
  const addOnsTotal = formData.selectedAddOns.reduce((acc, addOnId) => {
    const item = SERVICE_ADD_ONS.find(a => a.id === addOnId);
    return acc + (item ? item.price : 0);
  }, 0);
  const totalEstimatedPrice = baseServicePrice + addOnsTotal;

  const handleAddOnToggle = (id: string) => {
    setFormData(prev => {
      const exists = prev.selectedAddOns.includes(id);
      return {
        ...prev,
        selectedAddOns: exists
          ? prev.selectedAddOns.filter(item => item !== id)
          : [...prev.selectedAddOns, id]
      };
    });
  };

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(prev => prev + 1);
    } else {
      const randomRef = 'VEL-' + Math.floor(100000 + Math.random() * 900000);
      setBookingRef(randomRef);
      setIsSubmitted(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const resetAndClose = () => {
    setIsSubmitted(false);
    setCurrentStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div
        className="bg-white text-[#1D1D1F] w-full max-w-5xl rounded-3xl shadow-2xl border border-black/[0.08] overflow-hidden my-auto max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Navigation */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-black/[0.06] bg-white sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-sm text-[#1D1D1F] tracking-tight">
              VELORA
            </span>
            <span className="text-black/20">·</span>
            <span className="text-xs text-[#86868B] font-medium">
              {isSubmitted ? 'Confirmation' : `Step ${currentStep} of 5`}
            </span>
          </div>

          <button
            type="button"
            onClick={resetAndClose}
            className="p-2 rounded-full text-[#86868B] hover:text-[#1D1D1F] hover:bg-black/5 transition-colors cursor-pointer"
            aria-label="Close booking modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        {!isSubmitted ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 flex-1 overflow-y-auto">
            
            {/* Left Main Form Steps (8 Cols) */}
            <div className="lg:col-span-8 p-6 sm:p-8 lg:p-10 border-b lg:border-b-0 lg:border-r border-black/[0.06] flex flex-col justify-between">
              <div>
                {/* Step Progress Indicators */}
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-black/[0.06]">
                  {['Vehicle', 'Service', 'Location', 'Schedule', 'Contact'].map((label, idx) => {
                    const stepNum = idx + 1;
                    const isDone = currentStep > stepNum;
                    const isCurrent = currentStep === stepNum;

                    return (
                      <div
                        key={label}
                        onClick={() => stepNum < currentStep && setCurrentStep(stepNum)}
                        className={`flex items-center gap-2 cursor-pointer ${
                          stepNum > currentStep ? 'opacity-40 cursor-not-allowed' : ''
                        }`}
                      >
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-semibold transition-all ${
                            isDone
                              ? 'bg-[#0071E3] text-white'
                              : isCurrent
                              ? 'bg-[#0071E3] text-white ring-4 ring-[#0071E3]/20'
                              : 'bg-[#F5F5F7] text-[#86868B]'
                          }`}
                        >
                          {isDone ? <Check className="w-3.5 h-3.5" /> : stepNum}
                        </div>
                        <span className="hidden sm:inline text-xs font-medium text-[#1D1D1F]">
                          {label}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* STEP 1: VEHICLE */}
                {currentStep === 1 && (
                  <div className="space-y-6 animate-fadeIn">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-semibold text-[#1D1D1F] mb-1 tracking-tight">
                        Select Vehicle Classification
                      </h3>
                      <p className="text-xs text-[#86868B] font-normal">
                        Pricing adapts based on vehicle surface area and complexity.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {VEHICLE_OPTIONS.map((opt) => (
                        <div
                          key={opt.id}
                          id={`book-veh-opt-${opt.id}`}
                          onClick={() => setFormData({ ...formData, vehicleCategory: opt.id })}
                          className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                            formData.vehicleCategory === opt.id
                              ? 'bg-[#F5F5F7] border-[#0071E3] shadow-sm ring-1 ring-[#0071E3]'
                              : 'bg-white border-black/[0.08] hover:border-black/[0.15]'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm font-semibold text-[#1D1D1F]">
                              {opt.name}
                            </span>
                            <span className="text-[11px] font-medium text-[#0071E3]">
                              {opt.multiplier > 1.0 ? `+${Math.round((opt.multiplier - 1) * 100)}%` : 'Base'}
                            </span>
                          </div>
                          <p className="text-xs text-[#86868B] font-normal">
                            {opt.example}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-black/[0.06]">
                      <div className="text-xs font-semibold text-[#1D1D1F] mb-3">
                        Vehicle Details (Optional)
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        <div>
                          <label className="block text-[11px] font-medium text-[#86868B] mb-1">Year</label>
                          <input
                            type="text"
                            value={formData.vehicleDetails.year}
                            onChange={(e) => setFormData({
                              ...formData,
                              vehicleDetails: { ...formData.vehicleDetails, year: e.target.value }
                            })}
                            className="w-full px-3 py-2 text-xs bg-[#F5F5F7] border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0071E3]"
                            placeholder="2024"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-medium text-[#86868B] mb-1">Make</label>
                          <input
                            type="text"
                            value={formData.vehicleDetails.make}
                            onChange={(e) => setFormData({
                              ...formData,
                              vehicleDetails: { ...formData.vehicleDetails, make: e.target.value }
                            })}
                            className="w-full px-3 py-2 text-xs bg-[#F5F5F7] border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0071E3]"
                            placeholder="Porsche"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-medium text-[#86868B] mb-1">Model</label>
                          <input
                            type="text"
                            value={formData.vehicleDetails.model}
                            onChange={(e) => setFormData({
                              ...formData,
                              vehicleDetails: { ...formData.vehicleDetails, model: e.target.value }
                            })}
                            className="w-full px-3 py-2 text-xs bg-[#F5F5F7] border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0071E3]"
                            placeholder="911 Carrera"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-medium text-[#86868B] mb-1">Paint Color</label>
                          <input
                            type="text"
                            value={formData.vehicleDetails.color}
                            onChange={(e) => setFormData({
                              ...formData,
                              vehicleDetails: { ...formData.vehicleDetails, color: e.target.value }
                            })}
                            className="w-full px-3 py-2 text-xs bg-[#F5F5F7] border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0071E3]"
                            placeholder="Agate Grey"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 2: SERVICE & ADD-ONS */}
                {currentStep === 2 && (
                  <div className="space-y-6 animate-fadeIn">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-semibold text-[#1D1D1F] mb-1 tracking-tight">
                        Select Detailing Protocol
                      </h3>
                      <p className="text-xs text-[#86868B] font-normal">
                        Every package is executed with 100% filtered pure water and professional equipment.
                      </p>
                    </div>

                    <div className="space-y-3">
                      {SERVICE_PACKAGES.map((svc) => {
                        const price = Math.round(svc.basePrice * currentVehicle.multiplier);
                        const isSelected = formData.serviceId === svc.id;

                        return (
                          <div
                            key={svc.id}
                            id={`book-svc-pkg-${svc.id}`}
                            onClick={() => setFormData({ ...formData, serviceId: svc.id })}
                            className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-[#F5F5F7] border-[#0071E3] shadow-sm ring-1 ring-[#0071E3]'
                                : 'bg-white border-black/[0.08] hover:border-black/[0.15]'
                            }`}
                          >
                            <div className="flex items-start justify-between">
                              <div className="flex items-center gap-3">
                                <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                                  isSelected ? 'border-[#0071E3] bg-[#0071E3]' : 'border-black/20'
                                }`}>
                                  {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                                </div>
                                <div>
                                  <div className="flex items-center gap-2">
                                    <h4 className="text-sm font-semibold text-[#1D1D1F]">{svc.name}</h4>
                                    {svc.featured && (
                                      <span className="text-[10px] font-semibold bg-[#0071E3] text-white px-2 py-0.5 rounded-full">
                                        Popular
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-xs text-[#86868B] font-normal">{svc.tagline}</p>
                                </div>
                              </div>

                              <div className="text-right">
                                <span className="text-base font-semibold text-[#1D1D1F]">${price}</span>
                                <div className="text-xs text-[#86868B]">{svc.duration}</div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Add-Ons */}
                    <div className="pt-4 border-t border-black/[0.06]">
                      <div className="text-xs font-semibold text-[#1D1D1F] mb-3">
                        Recommended Enhancements (Optional)
                      </div>
                      <div className="space-y-2.5">
                        {SERVICE_ADD_ONS.slice(0, 3).map((addon) => {
                          const isChecked = formData.selectedAddOns.includes(addon.id);

                          return (
                            <div
                              key={addon.id}
                              onClick={() => handleAddOnToggle(addon.id)}
                              className={`p-3.5 rounded-xl border flex items-center justify-between cursor-pointer text-xs transition-colors ${
                                isChecked ? 'bg-[#0071E3]/5 border-[#0071E3]' : 'bg-[#F5F5F7] border-black/[0.04]'
                              }`}
                            >
                              <div className="flex items-center gap-2.5">
                                <input
                                  type="checkbox"
                                  checked={isChecked}
                                  onChange={() => {}}
                                  className="rounded border-black/20 text-[#0071E3] focus:ring-0"
                                />
                                <div>
                                  <div className="font-semibold text-[#1D1D1F]">{addon.name}</div>
                                  <div className="text-[11px] text-[#86868B] font-normal">{addon.description}</div>
                                </div>
                              </div>
                              <span className="font-semibold text-[#0071E3] ml-2 shrink-0">+${addon.price}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 3: LOCATION */}
                {currentStep === 3 && (
                  <div className="space-y-6 animate-fadeIn">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-semibold text-[#1D1D1F] mb-1 tracking-tight">
                        Where should our mobile lab arrive?
                      </h3>
                      <p className="text-xs text-[#86868B] font-normal">
                        Our rig is fully self-contained. No water spigots or electric outlets required.
                      </p>
                    </div>

                    {/* Location Type */}
                    <div className="grid grid-cols-3 gap-3">
                      {[
                        { id: 'home', label: 'Home Driveway' },
                        { id: 'office', label: 'Office Park' },
                        { id: 'garage', label: 'Private Garage' }
                      ].map((t) => (
                        <button
                          key={t.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, locationType: t.id as any })}
                          className={`py-3 px-2 rounded-2xl border text-xs font-semibold transition-all cursor-pointer ${
                            formData.locationType === t.id
                              ? 'bg-[#F5F5F7] border-[#0071E3] text-[#0071E3] shadow-sm ring-1 ring-[#0071E3]'
                              : 'bg-white border-black/[0.08] text-[#86868B] hover:border-black/[0.15]'
                          }`}
                        >
                          {t.label}
                        </button>
                      ))}
                    </div>

                    {/* Address Fields */}
                    <div className="space-y-3 pt-2">
                      <div>
                        <label className="block text-[11px] font-medium text-[#86868B] mb-1">Street Address</label>
                        <input
                          type="text"
                          value={formData.address}
                          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-xs bg-[#F5F5F7] border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0071E3]"
                          placeholder="e.g. 8400 E Crescent Rim Dr"
                        />
                      </div>

                      <div className="grid grid-cols-3 gap-3">
                        <div>
                          <label className="block text-[11px] font-medium text-[#86868B] mb-1">City</label>
                          <input
                            type="text"
                            value={formData.city}
                            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                            className="w-full px-3.5 py-2.5 text-xs bg-[#F5F5F7] border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0071E3]"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-medium text-[#86868B] mb-1">State</label>
                          <input
                            type="text"
                            value={formData.state}
                            onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                            className="w-full px-3.5 py-2.5 text-xs bg-[#F5F5F7] border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0071E3]"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-medium text-[#86868B] mb-1">ZIP Code</label>
                          <input
                            type="text"
                            value={formData.zip}
                            onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                            className="w-full px-3.5 py-2.5 text-xs bg-[#F5F5F7] border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0071E3]"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[11px] font-medium text-[#86868B] mb-1">Gate / Access Code (If Any)</label>
                          <input
                            type="text"
                            value={formData.gateCode}
                            onChange={(e) => setFormData({ ...formData, gateCode: e.target.value })}
                            className="w-full px-3.5 py-2.5 text-xs bg-[#F5F5F7] border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0071E3]"
                            placeholder="#4921"
                          />
                        </div>
                        <div>
                          <label className="block text-[11px] font-medium text-[#86868B] mb-1">Parking Instructions</label>
                          <input
                            type="text"
                            value={formData.parkingNotes}
                            onChange={(e) => setFormData({ ...formData, parkingNotes: e.target.value })}
                            className="w-full px-3.5 py-2.5 text-xs bg-[#F5F5F7] border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0071E3]"
                            placeholder="Park in front of main garage"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 4: SCHEDULE */}
                {currentStep === 4 && (
                  <div className="space-y-6 animate-fadeIn">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-semibold text-[#1D1D1F] mb-1 tracking-tight">
                        Select Preferred Date & Arrival Window
                      </h3>
                      <p className="text-xs text-[#86868B] font-normal">
                        Our master technician reserves your time window exclusively.
                      </p>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#1D1D1F] mb-2">Select Date</label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                        {[
                          { date: '2026-09-08', day: 'Tue', num: 'Sep 8' },
                          { date: '2026-09-09', day: 'Wed', num: 'Sep 9' },
                          { date: '2026-09-10', day: 'Thu', num: 'Sep 10' },
                          { date: '2026-09-11', day: 'Fri', num: 'Sep 11' },
                        ].map((d) => (
                          <div
                            key={d.date}
                            onClick={() => setFormData({ ...formData, date: d.date })}
                            className={`p-3.5 rounded-2xl border text-center cursor-pointer transition-all ${
                              formData.date === d.date
                                ? 'bg-[#0071E3] text-white border-[#0071E3] shadow-sm'
                                : 'bg-[#F5F5F7] border-black/[0.06] text-[#1D1D1F] hover:border-black/[0.15]'
                            }`}
                          >
                            <div className="text-[10px] uppercase font-semibold opacity-80">{d.day}</div>
                            <div className="text-sm font-semibold mt-0.5">{d.num}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2">
                      <label className="block text-xs font-semibold text-[#1D1D1F] mb-2">Arrival Time Slot</label>
                      <div className="space-y-2">
                        {[
                          { slot: '08:30 AM – 09:30 AM (Morning Slot)', note: 'Recommended for daylight clarity' },
                          { slot: '12:30 PM – 01:30 PM (Midday Slot)', note: 'Perfect during office hours' },
                          { slot: '03:30 PM – 04:30 PM (Late Afternoon)', note: 'Convenient before evening drives' },
                        ].map((t) => (
                          <div
                            key={t.slot}
                            onClick={() => setFormData({ ...formData, timeSlot: t.slot })}
                            className={`p-3.5 rounded-2xl border flex items-center justify-between cursor-pointer transition-all ${
                              formData.timeSlot === t.slot
                                ? 'bg-[#F5F5F7] border-[#0071E3] shadow-sm ring-1 ring-[#0071E3]'
                                : 'bg-white border-black/[0.08] hover:border-black/[0.15]'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <Clock className="w-4 h-4 text-[#0071E3]" />
                              <div>
                                <div className="text-xs font-semibold text-[#1D1D1F]">{t.slot}</div>
                                <div className="text-[11px] text-[#86868B] font-normal">{t.note}</div>
                              </div>
                            </div>
                            <div className="text-[10px] text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full font-semibold">
                              Available
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 5: CONTACT */}
                {currentStep === 5 && (
                  <div className="space-y-6 animate-fadeIn">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-semibold text-[#1D1D1F] mb-1 tracking-tight">
                        Client Contact Information
                      </h3>
                      <p className="text-xs text-[#86868B] font-normal">
                        We send an SMS 30 minutes prior to our technician's arrival.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-medium text-[#86868B] mb-1">First Name</label>
                        <input
                          type="text"
                          value={formData.contact.firstName}
                          onChange={(e) => setFormData({
                            ...formData,
                            contact: { ...formData.contact, firstName: e.target.value }
                          })}
                          className="w-full px-3.5 py-2.5 text-xs bg-[#F5F5F7] border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0071E3]"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-medium text-[#86868B] mb-1">Last Name</label>
                        <input
                          type="text"
                          value={formData.contact.lastName}
                          onChange={(e) => setFormData({
                            ...formData,
                            contact: { ...formData.contact, lastName: e.target.value }
                          })}
                          className="w-full px-3.5 py-2.5 text-xs bg-[#F5F5F7] border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0071E3]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-medium text-[#86868B] mb-1">Mobile Phone (For Arrival SMS)</label>
                        <input
                          type="tel"
                          value={formData.contact.phone}
                          onChange={(e) => setFormData({
                            ...formData,
                            contact: { ...formData.contact, phone: e.target.value }
                          })}
                          className="w-full px-3.5 py-2.5 text-xs bg-[#F5F5F7] border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0071E3]"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-medium text-[#86868B] mb-1">Email Address</label>
                        <input
                          type="email"
                          value={formData.contact.email}
                          onChange={(e) => setFormData({
                            ...formData,
                            contact: { ...formData.contact, email: e.target.value }
                          })}
                          className="w-full px-3.5 py-2.5 text-xs bg-[#F5F5F7] border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0071E3]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-medium text-[#86868B] mb-1">Special Instructions / Specific Focus</label>
                      <textarea
                        rows={3}
                        value={formData.contact.notes}
                        onChange={(e) => setFormData({
                          ...formData,
                          contact: { ...formData.contact, notes: e.target.value }
                        })}
                        className="w-full px-3.5 py-2.5 text-xs bg-[#F5F5F7] border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0071E3]"
                        placeholder="e.g. Leather stains on driver seat, light swirl marks on hood..."
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Step Navigation Buttons */}
              <div className="pt-8 mt-6 border-t border-black/[0.06] flex items-center justify-between">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#86868B] hover:text-[#1D1D1F] cursor-pointer"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                    <span>Back</span>
                  </button>
                ) : <div />}

                <button
                  id="booking-next-btn"
                  type="button"
                  onClick={handleNext}
                  className="px-7 py-3 bg-[#0071E3] hover:bg-[#0077ED] text-white text-xs font-semibold rounded-full transition-all flex items-center gap-2 cursor-pointer shadow-sm"
                >
                  <span>{currentStep === 5 ? 'Request Appointment' : 'Continue'}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Persistent Summary (4 Cols) */}
            <div className="lg:col-span-4 p-6 sm:p-8 bg-[#F5F5F7] flex flex-col justify-between">
              <div>
                <div className="text-xs uppercase tracking-wider font-semibold text-[#0071E3] mb-4">
                  Summary
                </div>

                <div className="space-y-4">
                  {/* Vehicle */}
                  <div className="pb-3 border-b border-black/[0.06]">
                    <div className="text-[11px] font-medium text-[#86868B]">Vehicle</div>
                    <div className="text-sm font-semibold text-[#1D1D1F]">
                      {formData.vehicleDetails.year} {formData.vehicleDetails.make} {formData.vehicleDetails.model}
                    </div>
                    <div className="text-xs text-[#86868B] font-normal">
                      {currentVehicle.name} ({formData.vehicleDetails.color})
                    </div>
                  </div>

                  {/* Service */}
                  <div className="pb-3 border-b border-black/[0.06]">
                    <div className="text-[11px] font-medium text-[#86868B]">Service Protocol</div>
                    <div className="text-sm font-semibold text-[#1D1D1F] flex items-center justify-between">
                      <span>{currentService.name}</span>
                      <span>${baseServicePrice}</span>
                    </div>
                    <div className="text-xs text-[#86868B] font-normal">{currentService.duration}</div>
                  </div>

                  {/* Add-ons */}
                  {formData.selectedAddOns.length > 0 && (
                    <div className="pb-3 border-b border-black/[0.06]">
                      <div className="text-[11px] font-medium text-[#86868B] mb-1">Add-ons</div>
                      {formData.selectedAddOns.map(addOnId => {
                        const item = SERVICE_ADD_ONS.find(a => a.id === addOnId);
                        if (!item) return null;
                        return (
                          <div key={item.id} className="flex items-center justify-between text-xs text-[#1D1D1F] py-0.5">
                            <span className="line-clamp-1">{item.name}</span>
                            <span className="font-semibold text-[#0071E3]">+${item.price}</span>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Location & Time */}
                  <div className="pb-3 border-b border-black/[0.06]">
                    <div className="text-[11px] font-medium text-[#86868B]">Location & Time</div>
                    <div className="text-xs text-[#1D1D1F] font-semibold mt-0.5">
                      {formData.address || 'Address pending'}, {formData.city}
                    </div>
                    <div className="text-xs text-[#86868B] font-normal mt-0.5 flex items-center gap-1">
                      <CalendarIcon className="w-3.5 h-3.5 text-[#0071E3]" />
                      <span>{formData.date} · {formData.timeSlot.split('(')[0].trim()}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Total Estimated Price */}
              <div className="pt-6 mt-6 border-t border-black/[0.08]">
                <div className="flex items-baseline justify-between mb-1">
                  <span className="text-xs font-semibold text-[#86868B]">Estimated Total</span>
                  <span className="text-2xl font-semibold text-[#1D1D1F] tracking-tight">
                    ${totalEstimatedPrice}
                  </span>
                </div>
                <p className="text-[11px] text-[#86868B] font-normal leading-relaxed">
                  No upfront payment required. Pay upon completion after final inspection.
                </p>
              </div>
            </div>

          </div>
        ) : (
          /* Confirmation Screen */
          <div className="p-8 sm:p-14 text-center max-w-2xl mx-auto space-y-6 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-[#0071E3] text-white flex items-center justify-center mx-auto shadow-md">
              <Check className="w-8 h-8" />
            </div>

            <div>
              <div className="text-xs uppercase tracking-wider font-semibold text-[#0071E3] mb-1">
                Appointment Reserved · #{bookingRef}
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#1D1D1F] tracking-tight">
                We look forward to detailing your vehicle.
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-[#86868B] font-normal leading-relaxed">
              We've dispatched your appointment details to <strong className="text-[#1D1D1F]">{formData.contact.email}</strong>. Our certified master technician will arrive at <strong className="text-[#1D1D1F]">{formData.address}, {formData.city}</strong> on <strong className="text-[#1D1D1F]">{formData.date}</strong> at <strong className="text-[#1D1D1F]">{formData.timeSlot}</strong>.
            </p>

            {/* Quick Details Box */}
            <div className="bg-[#F5F5F7] p-5 rounded-2xl border border-black/[0.06] text-left text-xs space-y-2">
              <div className="flex justify-between pb-1.5 border-b border-black/[0.06]">
                <span className="text-[#86868B]">Vehicle:</span>
                <span className="font-semibold text-[#1D1D1F]">{formData.vehicleDetails.year} {formData.vehicleDetails.make} {formData.vehicleDetails.model}</span>
              </div>
              <div className="flex justify-between pb-1.5 border-b border-black/[0.06]">
                <span className="text-[#86868B]">Service:</span>
                <span className="font-semibold text-[#1D1D1F]">{currentService.name}</span>
              </div>
              <div className="flex justify-between pb-1.5 border-b border-black/[0.06]">
                <span className="text-[#86868B]">Water & Power:</span>
                <span className="text-emerald-600 font-semibold">100% Self-Contained Rig</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#86868B]">Total upon completion:</span>
                <span className="font-semibold text-[#1D1D1F] text-sm">${totalEstimatedPrice}</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={resetAndClose}
                className="w-full sm:w-auto px-8 py-3 bg-[#0071E3] hover:bg-[#0077ED] text-white text-xs font-semibold rounded-full transition-colors cursor-pointer shadow-sm"
              >
                Return to Velora Studio
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
