import React from "react";
import PreNavbar from "../components/landingPage/PreNavbar";
import HeroSection from "../components/landingPage/HeroSection";
import Automation from "../components/landingPage/Automation";
import Footer from "../components/landingPage/Footer";

export default function LandingPage() {
  return (
    <section>
      <div className="max-w-[1600px]">
        <div className="w-full">
          <PreNavbar />
          <HeroSection />
          <Automation />
        </div>
        <div className="absolute w-full">
          <Footer />
        </div>
      </div>
    </section>
  );
}
