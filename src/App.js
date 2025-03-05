import React from "react";
import HeroSection from "./components/Home/HeroSection";
import RecoverySection from "./components/Home/RecoverySection";
import DeliverSection from "./components/Home/DeliverSection";
import Testimonials from "./components/Home/Testimonials";
import TreatmentSection from "./components/Home/TreatmentSection";
import FeaturedOnSection from "./components/Home/FeaturedOnSection";
import GetApp from "./components/Home/GetApp";
import Footer from "./components/Footer";
import StateSection from "./components/Home/StateSection";
const Hero = () => {
  return (
    <div>
      <HeroSection />
      <RecoverySection />
      <DeliverSection />
      <Testimonials />
      <TreatmentSection />
      <FeaturedOnSection />
      <StateSection />
      <GetApp />
      <Footer />
    </div>
  );
};

export default Hero;
