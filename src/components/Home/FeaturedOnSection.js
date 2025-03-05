import React from "react";

const images = [
  "/assets/images/feature1.png",
  "/assets/images/feature2.png",
  "/assets/images/feature3.png",
  "/assets/images/feature4.png",
];

const FeaturedOnSection = () => {
  return (
    <div className="relative max-w-screen-3xl mx-auto w-full px-6 lg:px-0 py-[93px] text-black">
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
        {/* Left Content */}
        <div className="text-left">
          <h1 className="text-base md:text-2xl font-medium text-primary leading-tight uppercase">
            As Seen
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-[52px] font-medium text-customBlack leading-snug md:leading-[62px]">
            Featured On
          </h2>
        </div>

        {/* Scrolling Logos */}
        <div className="overflow-hidden w-full md:w-[646px] relative mt-6 md:mt-0">
          <div className="flex gap-16 animate-scroll">
            {[...images, ...images].map((src, index) => (
              <img key={index} src={src} className="object-contain" alt="Featured Logo" />
            ))}
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }

          .animate-scroll {
            display: flex;
            white-space: nowrap;
            animation: scroll 12s linear infinite;
            width: max-content;
          }
        `}
      </style>
    </div>
  );
};

export default FeaturedOnSection;
