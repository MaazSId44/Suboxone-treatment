import React from "react";
import Navbar from "../Nav";
import Button from "../ui/Button";
const HeroSection = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/assets/images/bg-img.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* Content Section */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full text-white text-left px-6 md:px-20">
        <div className="max-w-screen-3xl mx-auto w-full">
          <h2 className="text-base sm:text-lg md:text-2xl font-light leading-9 text-customWhite mb-2">
            No lines. Less hassle. Lower costs.
          </h2>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-medium leading-tight md:leading-[86.4px] max-w-3xl">
            Easy Online Suboxone Treatment for Opioid Addiction
          </h1>

          {/* CTA Button */}
          <div className=" mt-6">
            <Button title="Download The App Today" showSvg />
          </div>
        </div>
      </div>

      {/* Navbar */}
      <Navbar />
    </div>
  );
};

export default HeroSection;
