import { premiumBrandsA } from "./premium-a";
import { premiumBrandsB } from "./premium-b";
import { mainstreamBrands } from "./mainstream";

export const brands = [...premiumBrandsA, ...premiumBrandsB, ...mainstreamBrands];

export const getBrand = (slug) => brands.find((b) => b.slug === slug);

export const brandOrigins = ["German", "British", "Italian", "American", "Japanese", "French", "Swedish"];

export const brandColumns = [
  brands.slice(0, 14).map((b) => ({ name: b.name, slug: b.slug })),
  brands.slice(14).map((b) => ({ name: b.name, slug: b.slug })),
];

export const brandServiceGrid = [
  {
    title: "Engine Diagnostics & Major Overhaul",
    slug: "engine-repair",
    text: "Manufacturer-level fault scanning, live data analysis and complete engine overhaul to factory specification.",
  },
  {
    title: "Transmission & Gearbox Repair, Rebuild & Replacement",
    slug: "transmission-gearbox",
    text: "DSG, DCT, CVT, ZF and automatic transmission diagnostics, targeted repair and full rebuild on our own bench.",
  },
  {
    title: "AC Climate System Repair (50°C UAE Heat Spec)",
    slug: "car-ac-services",
    text: "Leak testing, gas refill by weight, compressor and control valve repair built for Dubai summers.",
  },
  {
    title: "Oil Service & Genuine Filter Replacement",
    slug: "premium-oil-services",
    text: "Full-synthetic oil carrying the exact manufacturer approval for your engine, with genuine filters.",
  },
  {
    title: "Brake Discs, Pads & ABS Sensor Repair",
    slug: "brakes-ac-inspection",
    text: "Measured pad and disc data, fluid moisture testing and correct bedding-in for performance compounds.",
  },
  {
    title: "Suspension, Air Struts & Control Arm Bushings",
    slug: "suspension-services",
    text: "Conventional and air suspension repair with depressurisation, calibration and four-wheel alignment.",
  },
  {
    title: "Electrical Diagnostics & ECU Programming",
    slug: "scanning-diagnostics",
    text: "All-module fault tracing, voltage drop testing, module coding and adaptation across every system.",
  },
  {
    title: "Battery Replacement & ECU Registration / Coding",
    slug: "battery-services",
    text: "AGM and EFB supply, fitment and registration to the vehicle's energy management system.",
  },
  {
    title: "Cooling System, Water Pump & Thermostat Overhaul",
    slug: "80000-100000-service",
    text: "Pressure testing, component replacement and correct coolant bleeding for UAE ambient conditions.",
  },
  {
    title: "Body Repair, Dent Removal & Colour-Matched Painting",
    slug: "body-work",
    text: "Panel repair or replacement with computerised colour matching and dust-free booth refinishing.",
  },
  {
    title: "Pre-Purchase Comprehensive Used Inspection",
    slug: "pre-purchase-inspection",
    text: "150 checkpoints, photographic report and a written cost estimate before you commit to buying.",
  },
  {
    title: "Full Interior Restoration, Upholstery & Leather Care",
    slug: "upholstery-work",
    text: "Genuine leather and Alcantara retrims, headliner repair, dashboard restoration and leather conditioning.",
  },
];

export const brandWorkflow = [
  {
    step: "01",
    title: "Book, Call or Free Pickup",
    text: "Book online, call 800458 or send a WhatsApp. Free pickup and delivery upon approved estimate from anywhere in Dubai.",
  },
  {
    step: "02",
    title: "Diagnostic Scan",
    text: "Manufacturer-level scan across every module with live data capture, then a transparent video inspection sent to your WhatsApp.",
  },
  {
    step: "03",
    title: "Specialist Repair",
    text: "Your vehicle is repaired by the technician who specialises in that brand, using genuine or OEM-approved parts to factory torque specification.",
  },
  {
    step: "04",
    title: "Road Test & Delivery",
    text: "Quality-checked, road-tested and returned to your door with an itemised invoice and warranty on all parts fitted.",
  },
];