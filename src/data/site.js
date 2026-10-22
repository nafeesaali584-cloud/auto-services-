// DEMO CONFIGURATION
// You can set custom demo numbers via environment variables (VITE_DEMO_WA_NUMBER, VITE_DEMO_PHONE)
// or edit the defaults right here:
export const DEMO_WA_NUMBER = (typeof import.meta !== 'undefined' && import.meta.env?.VITE_DEMO_WA_NUMBER) || "971503245150";
export const DEMO_PHONE = (typeof import.meta !== 'undefined' && import.meta.env?.VITE_DEMO_PHONE) || "800458";

export const site = {
  name: "The Gearbox Auto Services L.L.C",
  shortName: "The Gearbox",
  legalName: "The Gearbox Auto Services L.L.C",
  tagline: "Dubai's Trusted Dealership Alternative for Luxury Car Repair & Restoration",
  street: "16 D Street, Al Quoz Industrial 4",
  city: "Dubai",
  country: "United Arab Emirates",
  countryCode: "AE",
  addressFull: "Al Quoz Industrial 4, 16 D Street, Dubai, United Arab Emirates",
  email: "service@thegearbox.ae",
  hours: "Monday – Sunday: 8:00 AM – 7:00 PM",
  hoursShort: "Mon–Sun 8AM–7PM",
  phone: DEMO_PHONE,
  telHref: `tel:${DEMO_PHONE.replace(/\s+/g, '')}`,
  waNumber: DEMO_WA_NUMBER.replace(/\D/g, ''),
  mapEmbed:
    "https://www.google.com/maps?q=Al%20Quoz%20Industrial%204%2C%2016%20D%20Street%2C%20Dubai&output=embed",
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=The+Gearbox+Auto+Services+Al+Quoz+Industrial+4+Dubai",
  reviewLink:
    "https://www.google.com/maps/search/?api=1&query=The+Gearbox+Auto+Services+Al+Quoz+Industrial+4+Dubai",
  geo: { lat: 25.129, lng: 55.226 },
  priceRange: "$$",
};

export const contacts = [
  { role: "Toll Free Booking Line", name: "Workshop Reception", display: DEMO_PHONE, tel: `tel:${DEMO_PHONE.replace(/\s+/g, '')}` },
  { role: "Service Advisor", name: "Tarek", display: "+971 50 324 5212", tel: "tel:0503245212" },
  { role: "Service Advisor", name: "Carrose", display: "+971 50 324 5526", tel: "tel:0503245526" },
  { role: "Arabic Support", name: "Arabic Support Desk", display: "+971 50 324 5601", tel: "tel:0503245601" },
  { role: "Service Advisor", name: "Habeeb", display: "+971 52 217 6891", tel: "tel:0522176891" },
];

export const areasServed = [
  "Al Quoz",
  "Business Bay",
  "Downtown Dubai",
  "Jumeirah",
  "Dubai Hills",
  "Dubai Marina",
  "Deira",
  "Al Nahda",
  "Mirdif",
  "Sheikh Zayed Road",
];

export const stats = [
  { value: "20+", label: "Years Combined Experience" },
  { value: "5,000+", label: "Luxury Cars Restored in 3 Years" },
  { value: "4.9★", label: "Verified Google Rating" },
  { value: "100%", label: "Warranty on All Parts" },
];

export const trustBadges = [
  "Genuine OEM Parts",
  "Dealer Diagnostic Software",
  "UAE Warranty Protected",
  "Factory-Trained Technicians",
];

export const disclaimers = {
  pickup: "Free pickup and delivery upon approved estimate.",
  inspection: "Free vehicle inspection upon approval of repair estimate.",
  diagnostic:
    "A minimum diagnostic / inspection fee of AED 300 applies and is disclosed before any work begins.",
  warrantyLaw:
    "Under UAE Federal Consumer Protection Law No. 15 of 2020, servicing your vehicle at an authorised independent workshop does not void your manufacturer warranty where OEM guidelines and certified parts are used.",
};

export const waLink = (message) =>
  `https://api.whatsapp.com/send?phone=${site.waNumber}` +
  (message ? `&text=${encodeURIComponent(message)}` : "");

export const waMessages = {
  general:
    "Hello The Gearbox Auto Services — I'd like a quote for my vehicle in Dubai. Please advise on price and earliest booking.",
  inspection:
    "Hello The Gearbox — I'd like to book a free vehicle inspection (free upon approval of repair estimate) at your Al Quoz workshop.",
  pickup:
    "Hello The Gearbox — I'd like to arrange free pickup and delivery upon approved estimate for my car in Dubai.",
  brand: (brand) =>
    `Hello The Gearbox — I need a specialist ${brand} diagnosis in Dubai. Can you advise on price, turnaround and pickup?`,
  service: (service) =>
    `Hello The Gearbox — I'd like a quote for ${service} on my car in Dubai. Please advise on price and booking.`,
  booking:
    "Hello The Gearbox — I'd like to book an appointment. Here are my vehicle details:",
};

export const social = [
  { label: "Instagram", href: "https://www.instagram.com/" },
  { label: "Facebook", href: "https://www.facebook.com/" },
  { label: "X", href: "https://x.com/" },
  { label: "Google Maps", href: site.mapLink },
];
