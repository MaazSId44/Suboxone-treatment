import React from "react";
import Button from "../ui/Button";

const GetApp = () => {
  return (
    <div className="relative w-full bg-black py-12 md:py-[90px] px-6 lg:px-0">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/images/getappbg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </div>

      {/* Content Wrapper (Centered) */}
      <div className="relative flex flex-col items-center text-center mx-auto space-y-7">
        <h1 className="text-base md:text-2xl font-medium text-black leading-tight uppercase">
          Secure Access to your medications
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-[52px] font-semibold text-customBlack leading-snug md:leading-[62px]">
          GetYour Meds Online Today
        </h2>
        <p className="text-lg md:text-xl font-normal leading-7 text-black max-w-full  md:max-w-[870px]">
          We have partnered with RX-Outreach to provide mail order medications
          at a fraction of the price you may find in your local pharmacy. Meet
          your chronic illness provider online today and get your medication
          delivered as quickly as 24 hours later.
        </p>
        <Button
          title="Get The App"
          showSvg
          className="px-6 py-3 md:px-8 md:py-3 text-sm md:text-base !bg-black text-white"
        />
      </div>
    </div>
  );
};

export default GetApp;
