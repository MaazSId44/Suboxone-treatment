import React from "react";

const DeliverSection = () => {
  return (
    <div className="relative max-w-screen-3xl mx-auto w-full px-6 lg:px-0  py-12 md:py-20 text-black">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-16">
        <div className="">
          <h1 className="text-base md:text-2xl font-medium text-primary leading-6 mb-2 uppercase">
            Welcome To Recovery Delivered
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-[52px]font-medium text-customBlack leading-normal md:leading-[62px] mb-4">
            Your Fully Online Suboxone Treatment Platform
          </h2>
          <p className="text-base md:text-xl opacity-80 text-customGray  leading-relaxed">
            100% online opioid treatment with licensed buprenorphine providers
            starts at just $99/month.
            <br />
            <br />
            With monthly and weekly meetings based on where you are in your
            recovery. Get a same-day appointment and prescription.
          </p>
        </div>

        <div className="relative flex justify-center">
          <img
            src="/assets/images/bg-img2.png"
            alt="Recovery Delivered"
            className=" rounded-2xl shadow-lg object-contain z-0"
          />
          <img
            src="/assets/svgs/play.svg"
            alt="Play Button"
            className="absolute w-36 h-28 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
          />
        </div>
      </div>
    </div>
  );
};

export default DeliverSection;
