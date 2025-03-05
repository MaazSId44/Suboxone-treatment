import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const StateSection = () => {
  return (
    <div className="relative max-w-screen-3xl mx-auto w-full px-6 lg:px-0 py-12 md:py-20 text-black">
      <div className="flex flex-col items-center text-center">
        <div className="max-w-full md:max-w-[991px]">
          <h1 className="text-base md:text-2xl font-medium text-primary leading-6 mb-2 uppercase">
            States WE
          </h1>
          <h2 className="text-2xl sm:text-3xl md:text-[52px] font-medium text-customBlack leading-normal md:leading-[62px] mb-4">
            Currently Serve
          </h2>
          <p className="text-base md:text-xl opacity-80 text-customGray leading-relaxed">
            We believe everyone should have access to treatment and care. That’s
            why we’re teaming up with providers all over the country. Click on a
            green state to see the insurance companies we currently accept and
            to learn more about online Suboxone doctors in your area.
          </p>
        </div>
      </div>

      {/* Grid for Image and Map */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 pt-16">
        {/* Left Section - Image & Text */}
        <div className="w-full">
          <img
            src="/assets/images/tronto.png"
            alt="Recovery Delivered"
            className="rounded-2xl shadow-md object-cover w-full"
          />
          <div className="mt-6">
            <h1 className="text-xl md:text-[31px] leading-8 text-black">
              Toronto
            </h1>
            <p className="text-lg leading-8 font-medium underline text-[#00927C]">
              Ottawa St. and Homer Waston Blvd.
            </p>
          </div>
        </div>

        {/* Right Section - Interactive US Map */}
        <div className="w-full">
          <ComposableMap projection="geoAlbersUsa" className="w-full h-auto">
            <Geographies geography={geoUrl}>
              {({ geographies }) =>
                geographies.map((geo) => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onClick={() => alert(`${geo.properties.name}`)}
                    className="cursor-pointer"
                    style={{
                      default: { fill: "#49C7AB", stroke: "#6B8B9E", outline: "none" },
                      hover: { fill: "#006B5C", outline: "none" },
                      pressed: { fill: "#004D40", outline: "none" },
                    }}
                  />
                ))
              }
            </Geographies>
          </ComposableMap>
        </div>
      </div>
    </div>
  );
};

export default StateSection;
