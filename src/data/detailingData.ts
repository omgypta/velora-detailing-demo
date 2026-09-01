import { VehicleOption, ServicePackage, ServiceAddOn, TransformationItem, CaseStudy, ReviewItem } from '../types';

export const VEHICLE_OPTIONS: VehicleOption[] = [
  {
    id: 'sedan',
    name: 'Sedan / Coupe',
    example: 'Porsche 911, BMW M3, Tesla Model 3',
    multiplier: 1.0,
    iconName: 'Car'
  },
  {
    id: 'suv',
    name: 'Mid-Size SUV / Wagon',
    example: 'Porsche Macan, BMW X5, Audi Q8',
    multiplier: 1.2,
    iconName: 'CarFront'
  },
  {
    id: 'truck',
    name: 'Full-Size SUV / Truck',
    example: 'Range Rover SV, Escalade, G-Wagon, F-150',
    multiplier: 1.4,
    iconName: 'Truck'
  },
  {
    id: 'exotic',
    name: 'Exotic & Supercars',
    example: 'Ferrari, Lamborghini, McLaren, GT3 RS',
    multiplier: 1.35,
    iconName: 'Gauge'
  }
];

export const SERVICE_PACKAGES: ServicePackage[] = [
  {
    id: 'maintenance',
    number: '01',
    name: 'Maintenance Detail',
    tier: 'Essential Care',
    tagline: 'For keeping your vehicle consistently immaculate.',
    shortDesc: 'A meticulous maintenance regimen for regularly cared-for vehicles needing an exceptional refresh.',
    fullDesc: 'Engineered for discerning owners seeking regular perfection. Includes a multi-stage pH-neutral snow foam bath, two-bucket grit guard contact wash, thorough wheel face and barrel decon, followed by a light interior purge and surface conditioning.',
    basePrice: 129,
    duration: '1.5 – 2.0 Hours',
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=85',
    protectionLevel: 'SiO2 Polymer Hydrophobic Seal (60 Days)',
    recommendedFrequency: 'Every 2 to 4 weeks',
    inclusions: [
      'Deionized 0-TDS Spot-Free Rinse',
      'Dual-Bucket Microfiber Contact Wash',
      'Non-Acid Wheel Face & Barrel Cleanse',
      'Tire Dressing in Satin Factory Finish',
      'Interior Vacuum & Crevice Dust Extraction',
      'Dashboard, Console & Door Wipe-Down',
      'Streak-Free Glass Clarification (Inside & Out)'
    ],
    exteriorSteps: [
      'Pre-soak with high-lubricity pH-neutral foam to encapsulate grit',
      'Delicate hand wash using plush 1200 GSM microfiber wash mitts',
      'Wheel barrels, lug nut recesses, and brake calipers detailed',
      'Warm filtered forced-air blow dry to eliminate trap water in emblems and mirrors',
      'Application of high-gloss SiO2 hydrophobic spray sealant'
    ],
    interiorSteps: [
      'High-velocity compressed air purge of vents, seams, and seat rails',
      'Precision vacuuming of carpets, floor mats, and seat crevices',
      'Matte OEM surface wipe-down of dash, infotainment, and center console',
      'Door jambs de-greased and hand-sealed',
      'Streak-free clarity polish on all interior glass and rearview mirrors'
    ]
  },
  {
    id: 'full-detail',
    number: '02',
    name: 'Full Detail',
    tier: 'Comprehensive Reset',
    tagline: 'A complete interior and exterior reset.',
    shortDesc: 'Complete revitalization restoring both cabin and exterior surfaces to pristine showroom standards.',
    fullDesc: 'Our most sought-after transformation. Every inch of your vehicle is systematically decontaminated, treated, and protected. We lift deep upholstery stains, condition fine leather, clay the paint, and seal all surfaces with high-grade synthetic polymers.',
    basePrice: 249,
    duration: '3.0 – 4.0 Hours',
    featured: true,
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=85',
    protectionLevel: 'Synthetic Polymer Barrier (6 Months)',
    recommendedFrequency: 'Every 3 to 6 months',
    inclusions: [
      'Everything in Maintenance Detail',
      'Mechanical Iron & Fallout Paint Decontamination',
      'Clay Bar Surface Smoothing Treatment',
      'Deep Leather Cleansing & pH-Balanced Conditioning',
      'Hot Water Carpet & Floor Mat Extraction',
      'Engine Bay Cleanse & Low-Sheen Dressing',
      '6-Month Ultra Hydrophobic Polymer Shield'
    ],
    exteriorSteps: [
      'Citrus pre-wash breakdown of traffic film and bug splatter',
      'Chemical iron fallout remover on paint and brake assemblies',
      'Fine-grade clay bar treatment to remove bonded industrial fallout',
      'Wheel arches degreased and dressed',
      'Exhaust tips polished and sealed',
      'Hand-applied synthetic polymer paint sealant for depth and gloss'
    ],
    interiorSteps: [
      'Full steam sanitization of HVAC vents, cup holders, and high-touch areas',
      'Deep conditioning of natural and aniline leather with UV blockers',
      'Shampoo and heated extraction for carpets and floor mats',
      'Headliner spot cleaning and pillar touch-up',
      'Trunk compartment detailed and spare wheel well vacuumed'
    ]
  },
  {
    id: 'paint-enhancement',
    number: '03',
    name: 'Paint Enhancement',
    tier: 'Correction & Clarity',
    tagline: 'Bring clarity and depth back to the finish.',
    shortDesc: 'Precision machine polishing that removes 70–85% of swirl marks, light scratches, and oxidation.',
    fullDesc: 'Paint finishes accumulate haze, micro-marring, and wash scratches over time that dull sunlight reflection. Utilizing Italian Rupes dual-action polishers with fine diminishing abrasives, we refine your clear coat to reveal astonishing depth and diamond-like reflection.',
    basePrice: 399,
    duration: '4.5 – 6.0 Hours',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=85',
    protectionLevel: '12-Month Ceramic Polymer Matrix Sealant',
    recommendedFrequency: 'Annually or before ceramic coating',
    inclusions: [
      'Comprehensive Full Detail Exterior Process',
      'Digital Paint Depth Gauge Thickness Mapping',
      'Multi-Stage Chemical & Physical Decontamination',
      'Single-Stage Dual-Action Machine Polish',
      'Removal of 70–85% Micro-Swirls & Wash Haze',
      'Panel Wipe Isopropyl Alcohol Preparation',
      '12-Month High-Solid Ceramic Polymer Infusion'
    ],
    exteriorSteps: [
      'Multi-angle LED inspection to document paint defects',
      'Digital ultrasonic paint depth readings across all metal/composite panels',
      'Delicate rubber, trim, and badge masking using low-tack tape',
      'Single-stage machine polish with Rupes yellow foam and ultra-fine compound',
      'IPA wipe-down to ensure true correction without filler oils',
      'Application of high-gloss ceramic primer and matrix sealant'
    ],
    interiorSteps: [
      'Essential interior vacuum and precision console dusting included',
      'Steering wheel and gear selector deep degrease to restore OEM matte finish',
      'Anti-static cockpit shield application'
    ]
  },
  {
    id: 'ceramic-protection',
    number: '04',
    name: 'Ceramic Protection',
    tier: 'Permanent Defense',
    tagline: 'Long-lasting protection for your vehicle.',
    shortDesc: 'Military-grade 9H+ SiC ceramic coating bonding molecularly to preserve flawless gloss for up to 5 years.',
    fullDesc: 'The pinnacle of automotive surface defense. After complete two-stage paint correction, we apply multi-layered professional ceramic coatings to painted panels, wheel faces, exterior glass, and brake calipers. Produces intense hydrophobic water beading, chemical resistance, and self-cleaning attributes.',
    basePrice: 799,
    duration: '6.0 – 8.0 Hours',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=85',
    protectionLevel: 'Professional 9H Ceramic Matrix (3–5 Year Warranty)',
    recommendedFrequency: 'Once every 3 to 5 years',
    inclusions: [
      'Multi-Stage Paint Correction (90%+ Defect Removal)',
      'Multi-Layer 9H Ceramic Coating on Clear Coat',
      'Wheel Face & Caliper High-Heat Ceramic Defense',
      'All Exterior Glass Hydrophobic Windshield Coating',
      'Exterior Plastics & Trim UV Restoration Ceramic',
      'IR Lamp Accelerated Curing Assistance',
      'Complimentary 30-Day Inspection & Wash Kit'
    ],
    exteriorSteps: [
      'Two-stage compounding and finishing polish for maximum gloss and mirror depth',
      'Double IPA and pre-coat solvent panel prep wipe',
      'Precision hand application of base 9H ceramic bond layer',
      'Top-coat hydrophobic gloss layer application',
      'Wheel faces, barrels, and calipers coated with 1200°F thermal ceramic',
      'Windshield and side windows coated with ultra-slick rain repellent'
    ],
    interiorSteps: [
      'Full interior deep cleanse and preparation',
      'Ceramic fabric barrier on mats and carpets to repel liquids',
      'Ceramic leather shield on seating surfaces to prevent dye transfer'
    ]
  }
];

export const SERVICE_ADD_ONS: ServiceAddOn[] = [
  {
    id: 'engine-bay',
    name: 'Engine Bay Restoration & Dressing',
    price: 65,
    duration: '30 mins',
    description: 'Safe low-pressure steam cleanse, grease removal, and OEM satin matte dressing.'
  },
  {
    id: 'leather-ceramic',
    name: 'Interior Leather & Fabric Ceramic Shield',
    price: 140,
    duration: '45 mins',
    description: 'Repels denim dye transfer, UV damage, spilled coffee, and everyday friction wear.'
  },
  {
    id: 'glass-coating',
    name: 'Full Vehicle Glass Hydrophobic Coating',
    price: 85,
    duration: '30 mins',
    description: 'Dramatic wet-weather visibility improvement. Rain sheets off at 35+ mph.'
  },
  {
    id: 'wheel-caliper-ceramic',
    name: 'Wheel Barrels & Caliper Ceramic Coating',
    price: 120,
    duration: '45 mins',
    description: 'Prevents corrosive brake dust from pitting alloy finishes and simplifies washing.'
  },
  {
    id: 'headlight-restoration',
    name: 'Headlight Wet-Sand & UV Clear Re-seal',
    price: 95,
    duration: '40 mins',
    description: 'Removes yellowing, road rash pitting, and restores crystal clear nighttime projection.'
  }
];

export const TRANSFORMATION_ITEMS: TransformationItem[] = [
  {
    id: 'porsche-911',
    title: 'Porsche 911 Carrera (992)',
    vehicle: '2024 Porsche 911 Carrera',
    service: 'Paint Enhancement & Ceramic Protection',
    location: 'Scottsdale, AZ',
    duration: '5.5 Hours',
    // Using matching high-contrast automotive photos for authentic comparison
    beforeImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80',
    afterImage: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1600&q=85',
    summary: 'Agate Grey Metallic revived from dealership micro-marring and hard water mineral deposits to liquid mirror gloss.',
    defectRemoval: '94% Swirl & Scratch Elimination',
    category: 'paint'
  },
  {
    id: 'range-rover-sv',
    title: 'Range Rover SV Long Wheelbase',
    vehicle: '2024 Range Rover SV',
    service: 'Full Interior & Exterior Detail',
    location: 'Paradise Valley, AZ',
    duration: '4.0 Hours',
    beforeImage: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=85',
    summary: 'Santorini Black multi-stage wash with full semi-aniline leather hydration and deep carpet extraction.',
    defectRemoval: '100% Contaminant Removal',
    category: 'full'
  },
  {
    id: 'bmw-m4-comp',
    title: 'BMW M4 Competition',
    vehicle: '2023 BMW M4 Competition (G82)',
    service: 'Two-Stage Paint Correction',
    location: 'Austin, TX',
    duration: '6.0 Hours',
    beforeImage: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=85',
    summary: 'Isle of Man Green restored to deep refractive clarity, followed by 5-Year Gtechniq Crystal Serum Ultra.',
    defectRemoval: '98% Defect Removal',
    category: 'ceramic'
  },
  {
    id: 'mercedes-amg-gt',
    title: 'Mercedes-AMG GT Coupe',
    vehicle: '2023 Mercedes-AMG GT',
    service: 'Interior Leather Reset & Ceramic',
    location: 'Newport Beach, CA',
    duration: '3.5 Hours',
    beforeImage: 'https://images.unsplash.com/photo-1563720223523-491ff04651de?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=85',
    summary: 'Nappa leather deeply cleansed of dye transfer, carbon fiber trim polished, and matte finish preserved.',
    defectRemoval: 'Pristine Matte OEM Leather Restored',
    category: 'interior'
  }
];

export const FEATURED_CASE_STUDY: CaseStudy = {
  id: 'case-porsche-911-carrera',
  vehicle: '2024 Porsche 911 Carrera',
  yearMakeModel: '2024 Porsche 911 Carrera (992.1)',
  service: 'Paint Enhancement & 5-Year Ceramic Defense',
  location: 'Scottsdale, Arizona',
  duration: '3.5 Hours',
  resultSummary: 'Surface clarity fully restored with 96.8% micro-swirl eradication and depth measurement verification.',
  paintReadingBefore: '118–124 μm (Average)',
  paintReadingAfter: '115–121 μm (Minimal Clear Loss: <3 μm)',
  heroImage: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1800&q=90',
  beforeImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
  afterImage: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1200&q=85',
  challenge: 'The vehicle had accumulated fine swirl webs and mineral deposit halos from improper dealership tunnel washes. The Agate Grey metallic flake was obscured under a dull haze layer, lacking the crisp mirror reflection expected of a 911.',
  processNarrative: 'Our mobile studio arrived at the client residence with our self-contained deionized filtration rig. Following a rigorous 3-stage chemical and mechanical decontamination, we mapped paint thickness with ultrasonic gauges. We executed a single-stage rotary and dual-action micro-finishing pass with Rupes fine abrasive pads, followed by a double solvent panel wipe and dual-layer 9H ceramic application.',
  stepsCompleted: [
    '0-TDS Deionized snow foam bath & 2-bucket grit guard contact wash',
    'Chemical iron deposit extraction from clear coat & brake rotors',
    'Fine ultra-glide clay bar physical decontamination',
    'Ultrasonic digital paint depth mapping across all 18 body panels',
    'Precision machine correction utilizing Rupes Mark III orbital polishers',
    'Panel wipe solvent prep to remove all polishing oils',
    'Dual-layer 9H ceramic matrix application with IR thermal curing'
  ],
  macroImages: [
    {
      title: 'Paint Clarity & Metallic Flake',
      caption: 'Direct LED light source reveals crystal clear metallic flake depth without halos.',
      image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Monobloc Caliper & Wheel Barrel',
      caption: 'Brake calipers and satin wheels cleansed, degreased, and coated with thermal ceramic.',
      image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Hydrophobic Water Sheeting',
      caption: '110° contact angle water beading ensures road grime washes away effortlessly.',
      image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&w=800&q=80'
    }
  ]
};

export const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Michael R.',
    vehicle: '2024 Porsche 911 Turbo S',
    location: 'Austin, TX',
    rating: 5,
    quote: 'Best detailing experience I\'ve had. They came to my office, worked while I was inside, and the car looked incredible when I walked out. The attention to detail around the aero vents is unmatched.',
    serviceUsed: 'Paint Enhancement & Full Detail',
    date: 'August 2026'
  },
  {
    id: 'rev-2',
    author: 'Elena Vance',
    vehicle: '2023 Range Rover SV',
    location: 'Scottsdale, AZ',
    rating: 5,
    quote: 'Completely self-contained. No garden hoses across my driveway, no noisy gas generators. The van operates quietly, uses filtered water, and the semi-aniline leather feels brand new.',
    serviceUsed: 'Ceramic Protection & Interior Reset',
    date: 'July 2026'
  },
  {
    id: 'rev-3',
    author: 'David Chen',
    vehicle: '2024 BMW M4 Competition',
    location: 'Newport Beach, CA',
    rating: 5,
    quote: 'I am notoriously particular about who touches my paint. Velora is the only mobile service I trust. The depth of reflection and hydrophobic finish is better than delivery day.',
    serviceUsed: 'Two-Stage Paint Correction',
    date: 'June 2026'
  }
];

export const SERVICE_CITIES = [
  'Scottsdale, AZ',
  'Paradise Valley, AZ',
  'Austin, TX',
  'West Lake Hills, TX',
  'Newport Beach, CA',
  'Beverly Hills, CA',
  'Palm Beach, FL',
  'Miami, FL'
];
