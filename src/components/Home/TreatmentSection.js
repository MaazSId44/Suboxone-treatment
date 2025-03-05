import React from "react";
import Button from "../ui/Button";
import StepCard from "../ui/StepCard";

const TreatmentSection = () => {
  return (
    <div
      className="relative  "
      style={{
        background: "linear-gradient(120deg, #FFFFFF 0, #49C7AB 150%)",
        // opacity: "0.",
      }}
    >
      {/* Centered GIF */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src="/assets/gifs/treatmentbg.gif"
          alt="Treatment Background"
          className="max-w-full h-auto"
        />
      </div>

      {/* Content */}
      <div className="relative max-w-screen-3xl mx-auto w-full px-6 lg:px-0 py-[90px] text-black">
        {/* <h1 className="text-3xl font-bold">Treatment Section</h1> */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-5">
          {/* Text Content */}
          <div className="text-center md:text-left">
            <h1 className="text-base md:text-2xl font-medium text-primary leading-tight uppercase">
              Get same-day online
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-[52px] font-medium text-customBlack leading-snug md:leading-[62px]">
              Suboxone Treatment In 10 Minutes
            </h2>
          </div>

          {/* Button */}
          <div className="mt-4 md:mt-0">
            <Button
              title="Download The App Today"
              showSvg
              className="px-6 py-3 md:px-8 md:py-3 text-sm md:text-base"
            />
          </div>
        </div>

        <div className="mt-10 md:mt-24">
          <div className="relative w-full flex md:flex-row flex-col items-center justify-between gap-10 lg:gap-0">
            {/* Top Row */}
            <StepCard
              step="1"
              title="Download The App"
              description="Click the link to download our app to get started."
              className={"w-full text-center md:w-[477px] md:text-start "}
            />
            <StepCard
              step="2"
              title="Complete Onboarding Process & Documents"
              description="Provide medical history and sign treatment forms."
              className={"w-full text-center md:w-[477px] md:text-start "}
            />
          </div>

          <div className="relative w-full flex md:flex-row flex-col items-center justify-between gap-10 lg:gap-0 mt-10  md:mt-[93px] ">
            {/* Middle Row */}
            <StepCard
              step="3"
              title="Schedule Your First Visit"
              description="Our onboarding team will send you a link to book your first meeting. Many times, this is the same day."
              className={"w-full text-center md:w-[477px] md:text-start "}
            />
            <StepCard
              step="4"
              title="Meet With Licensed Provider"
              description="At the time of your appointment, open the app to have your visit."
              className={"w-full text-center md:w-[477px] md:text-start "}
            />
          </div>

          <div className="relative w-full flex md:flex-row flex-col items-center justify-center mt-10  md:mt-16 ">
            {/* Bottom Row */}
            <StepCard
              step="5"
              title="Pick Up Medication"
              description="Your script will be sent to your pharmacy of choice for pick up the same day."
              className={"w-full md:w-[638px] text-center "}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreatmentSection;
