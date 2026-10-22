import { site, areasServed, disclaimers } from "./site";
import { services } from "./services";
import { brands } from "./brands";

export const localBusinessSchema = () => [
  {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "@id": `${site.website || "https://www.thegearbox.ae"}/#autorepair`,
    name: site.name,
    alternateName: site.shortName,
    description:
      "Dealership alternative for luxury car repair, transmission rebuilds, engine overhaul and air conditioning service in Al Quoz Industrial 4, Dubai. Advanced diagnostics, genuine OEM parts and free pickup and delivery upon approved estimate.",
    url: "https://www.thegearbox.ae/",
    telephone: site.phone,
    email: site.email,
    priceRange: site.priceRange,
    currenciesAccepted: "AED",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
    areaServed: areasServed.map((a) => ({ "@type": "City", name: `${a}, Dubai` })),
    address: {
      "@type": "PostalAddress",
      streetAddress: site.street,
      addressLocality: site.city,
      addressRegion: "Dubai",
      addressCountry: "AE",
    },
    geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "08:00",
        closes: "19:00",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "480",
      bestRating: "5",
    },
    slogan: site.tagline,
    knowsAbout: brands.map((b) => `${b.name} repair`),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Workshop Services in Dubai",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.name,
          description: s.short,
        },
      })),
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.thegearbox.ae/#localbusiness",
    name: site.name,
    image: "https://www.thegearbox.ae/images/hero.png",
    telephone: site.phone,
    priceRange: site.priceRange,
    currenciesAccepted: "AED",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.street,
      addressLocality: site.city,
      addressCountry: "AE",
    },
    geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
    openingHours: "Mo-Su 08:00-19:00",
    additionalProperty: [
      { "@type": "PropertyValue", name: "Free pickup and delivery", value: disclaimers.pickup },
      { "@type": "PropertyValue", name: "Free inspection", value: disclaimers.inspection },
      { "@type": "PropertyValue", name: "Diagnostic fee", value: disclaimers.diagnostic },
    ],
  },
];

export const breadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.label,
    item: `https://www.thegearbox.ae${item.to || ""}`,
  })),
});

export const serviceSchema = ({ name, description, slug, price }) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name,
  description,
  serviceType: name,
  url: `https://www.thegearbox.ae/services/${slug}`,
  provider: { "@type": "AutoRepair", name: site.name, telephone: site.phone },
  areaServed: { "@type": "City", name: "Dubai" },
  offers: {
    "@type": "Offer",
    priceCurrency: "AED",
    price: String(price),
    availability: "https://schema.org/InStock",
    url: `https://www.thegearbox.ae/services/${slug}`,
  },
});

export const brandSchema = ({ name, description, slug }) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: `${name} Repair & Service in Dubai`,
  description,
  serviceType: `${name} repair`,
  url: `https://www.thegearbox.ae/brands/${slug}`,
  provider: { "@type": "AutoRepair", name: site.name, telephone: site.phone },
  areaServed: { "@type": "City", name: "Dubai" },
});

export const faqSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
});