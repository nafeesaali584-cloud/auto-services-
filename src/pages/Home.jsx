import React from "react";
import { localBusinessSchema } from "@/data/schema";
import { faqSchema } from "@/data/schema";
import { homeFaqs } from "@/data/faqs";
import JsonLd from "@/components/site/JsonLd";
import { usePageMeta } from "@/components/site/Reveal";

import HeroCarousel from "@/components/home/HeroCarousel";
import LawAuthority from "@/components/home/LawAuthority";
import MarqueeTicker from "@/components/home/MarqueeTicker";
import ServiceMatrix from "@/components/home/ServiceMatrix";
import ClimateAdvisory from "@/components/home/ClimateAdvisory";
import ComparisonMatrix from "@/components/home/ComparisonMatrix";
import BrandShowcase from "@/components/home/BrandShowcase";
import JourneySteps from "@/components/home/JourneySteps";
import PricingPackages from "@/components/home/PricingPackages";
import CounterStrip from "@/components/home/CounterStrip";
import EquipmentShowcase from "@/components/home/EquipmentShowcase";
import ReviewsCarousel from "@/components/home/ReviewsCarousel";
import GalleryStrip from "@/components/home/GalleryStrip";
import FaqSection from "@/components/home/FaqSection";
import WorkshopFeed from "@/components/home/WorkshopFeed";
import RecoveryStrip from "@/components/home/RecoveryStrip";
import FinalConversion from "@/components/home/FinalConversion";

export default function Home() {
  usePageMeta(
    "The Gearbox Auto Services | Luxury Car Repair & Service in Al Quoz, Dubai",
    "Dubai's dealership alternative for luxury car repair, transmission rebuilds, engine overhaul and AC service in Al Quoz Industrial 4. 40% less than dealership prices, free pickup and delivery upon approved estimate. Call 800458."
  );

  return (
    <>
      <JsonLd data={[localBusinessSchema(), faqSchema(homeFaqs)]} />
      <HeroCarousel />
      <LawAuthority />
      <MarqueeTicker />
      <ServiceMatrix />
      <ClimateAdvisory />
      <ComparisonMatrix />
      <BrandShowcase />
      <JourneySteps />
      <PricingPackages />
      <CounterStrip />
      <EquipmentShowcase />
      <ReviewsCarousel />
      <GalleryStrip />
      <FaqSection />
      <WorkshopFeed />
      <RecoveryStrip />
      <FinalConversion />
    </>
  );
}