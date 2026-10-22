import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClientInstance } from '@/lib/query-client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import ScrollToTop from './components/ScrollToTop';
import Layout from '@/components/site/Layout';
import Home from '@/pages/Home';
import Services from '@/pages/Services';
import ServiceDetail from '@/pages/ServiceDetail';
import Brands from '@/pages/Brands';
import BrandDetail from '@/pages/BrandDetail';
import Contact from '@/pages/Contact';
import Appointment from '@/pages/Appointment';
import About from '@/pages/About';
import Testimonials from '@/pages/Testimonials';
import Faq from '@/pages/Faq';
import Blog from '@/pages/Blog';
import BlogPost from '@/pages/BlogPost';
import ServiceContracts from '@/pages/ServiceContracts';
import ExclusiveOffers from '@/pages/ExclusiveOffers';
import Terms from '@/pages/Terms';

export default function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServiceDetail />} />
            <Route path="/brands" element={<Brands />} />
            <Route path="/brands/:slug" element={<BrandDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/about" element={<About />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/service-contracts" element={<ServiceContracts />} />
            <Route path="/exclusive-offers" element={<ExclusiveOffers />} />
            <Route path="/terms-conditions" element={<Terms />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Toaster />
      </Router>
    </QueryClientProvider>
  );
}
