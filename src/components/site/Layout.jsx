import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import MobileActionBar from "./MobileActionBar";
import FloatingStack from "./FloatingStack";
import JsonLd from "./JsonLd";
import { localBusinessSchema } from "@/data/schema";

export default function Layout() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-white">
      <JsonLd data={localBusinessSchema()} />
      <Header />
      <main className="flex-1 pb-24 lg:pb-0">
        <Outlet />
      </main>
      <Footer />
      <MobileActionBar />
      <FloatingStack />
    </div>
  );
}