export type VehicleCategory = 'sedan' | 'suv' | 'truck' | 'exotic';

export interface VehicleOption {
  id: VehicleCategory;
  name: string;
  example: string;
  multiplier: number;
  iconName: string;
}

export interface ServiceAddOn {
  id: string;
  name: string;
  price: number;
  duration: string;
  description: string;
}

export interface ServicePackage {
  id: string;
  number: string;
  name: string;
  tier: string;
  tagline: string;
  shortDesc: string;
  fullDesc: string;
  basePrice: number;
  duration: string;
  featured?: boolean;
  image: string;
  inclusions: string[];
  exteriorSteps: string[];
  interiorSteps: string[];
  protectionLevel: string;
  recommendedFrequency: string;
}

export interface TransformationItem {
  id: string;
  title: string;
  vehicle: string;
  service: string;
  location: string;
  duration: string;
  beforeImage: string;
  afterImage: string;
  summary: string;
  defectRemoval: string;
  category: 'paint' | 'ceramic' | 'interior' | 'full';
}

export interface CaseStudy {
  id: string;
  vehicle: string;
  yearMakeModel: string;
  service: string;
  location: string;
  duration: string;
  resultSummary: string;
  paintReadingBefore: string;
  paintReadingAfter: string;
  heroImage: string;
  beforeImage: string;
  afterImage: string;
  macroImages: {
    title: string;
    caption: string;
    image: string;
  }[];
  challenge: string;
  processNarrative: string;
  stepsCompleted: string[];
}

export interface ReviewItem {
  id: string;
  author: string;
  vehicle: string;
  location: string;
  rating: number;
  quote: string;
  serviceUsed: string;
  date: string;
}

export interface BookingFormData {
  vehicleCategory: VehicleCategory;
  vehicleDetails: {
    year: string;
    make: string;
    model: string;
    color: string;
  };
  serviceId: string;
  selectedAddOns: string[];
  locationType: 'home' | 'office' | 'garage';
  address: string;
  city: string;
  state: string;
  zip: string;
  gateCode: string;
  parkingNotes: string;
  date: string;
  timeSlot: string;
  contact: {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    notes: string;
  };
}
