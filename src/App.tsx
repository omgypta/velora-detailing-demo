import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { EditorialServices } from './components/EditorialServices';
import { StudioComesToYou } from './components/StudioComesToYou';
import { TransformationsWork } from './components/TransformationsWork';
import { FeaturedCaseStudy } from './components/FeaturedCaseStudy';
import { ProcessSection } from './components/ProcessSection';
import { WhyVelora } from './components/WhyVelora';
import { ReviewsSection } from './components/ReviewsSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { ServiceDetailDrawer } from './components/ServiceDetailDrawer';
import { CaseStudyModal } from './components/CaseStudyModal';
import { QuoteCalculatorModal } from './components/QuoteCalculatorModal';
import { ServicePackage, VehicleCategory } from './types';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [isCaseStudyOpen, setIsCaseStudyOpen] = useState(false);
  const [selectedServiceDrawer, setSelectedServiceDrawer] = useState<ServicePackage | null>(null);

  const [bookingPrefillService, setBookingPrefillService] = useState<string>('full-detail');
  const [bookingPrefillVehicle, setBookingPrefillVehicle] = useState<VehicleCategory>('sedan');

  const handleOpenBooking = (serviceId?: string, vehicleCategory?: VehicleCategory) => {
    if (serviceId) setBookingPrefillService(serviceId);
    if (vehicleCategory) setBookingPrefillVehicle(vehicleCategory);
    setIsBookingOpen(true);
  };

  const handleScrollToWork = () => {
    const el = document.getElementById('the-work');
    if (el) {
      const topOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#1D1D1F] flex flex-col selection:bg-[#0071E3]/15 selection:text-[#1D1D1F]">
      {/* 05 — Clean Sticky Navigation */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        onOpenQuote={() => setIsQuoteOpen(true)}
      />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 06, 07, 08, 09 — Immersive Editorial Hero with Interactive Before/After */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onScrollToWork={handleScrollToWork}
        />

        {/* 10 — Immediate Restrained Trust Bar */}
        <TrustBar />

        {/* 11 — Editorial Services Experience with vehicle selection & dynamic hover */}
        <EditorialServices
          onSelectService={(service) => setSelectedServiceDrawer(service)}
          onBookService={(serviceId, vehicleType) => handleOpenBooking(serviceId, vehicleType)}
        />

        {/* 12 — Major Visual Section: "The Detailing Studio Comes To You" */}
        <StudioComesToYou
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 13 — Full-Width Transformation Section with Asymmetric Layout & Sliders */}
        <TransformationsWork
          onOpenCaseStudy={() => setIsCaseStudyOpen(true)}
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 14 — Immersive Featured Transformation Case Study */}
        <FeaturedCaseStudy
          onOpenCaseStudy={() => setIsCaseStudyOpen(true)}
          onOpenBooking={() => handleOpenBooking('paint-enhancement')}
        />

        {/* 15 — Four Steps. Zero Hassle Process */}
        <ProcessSection
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 16 — Why Velora: 3 Principles with Macro Photography & Whitespace */}
        <WhyVelora />

        {/* 17 — Restrained Client Testimonials */}
        <ReviewsSection />
      </main>

      {/* Footer & Global Actions */}
      <Footer
        onOpenBooking={() => handleOpenBooking()}
        onOpenQuote={() => setIsQuoteOpen(true)}
      />

      {/* Interactive Modals and Drawers */}
      {/* 18 — 5-Step Progressive Disclosure Booking Experience */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialServiceId={bookingPrefillService}
        initialVehicleCategory={bookingPrefillVehicle}
      />

      {/* Service In-Depth Checklist Drawer */}
      <ServiceDetailDrawer
        service={selectedServiceDrawer}
        onClose={() => setSelectedServiceDrawer(null)}
        onBook={(serviceId) => {
          setSelectedServiceDrawer(null);
          handleOpenBooking(serviceId);
        }}
      />

      {/* In-Depth Automotive Case Study Modal */}
      <CaseStudyModal
        isOpen={isCaseStudyOpen}
        onClose={() => setIsCaseStudyOpen(false)}
        onOpenBooking={() => {
          setIsCaseStudyOpen(false);
          handleOpenBooking('paint-enhancement');
        }}
      />

      {/* Instant Interactive Quote Estimator Modal */}
      <QuoteCalculatorModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        onProceedToBooking={(serviceId, vehicleCategory) => {
          setIsQuoteOpen(false);
          handleOpenBooking(serviceId, vehicleCategory);
        }}
      />
    </div>
  );
}
