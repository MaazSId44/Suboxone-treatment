import React from "react";

const RecoverySection = () => {
  return (
    <div className="relative w-full bg-black">
      {" "}
      <div className="absolute inset-0 w-full h-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/gifs/sectiontwobg.gif')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        <div
          className="absolute inset-0 bg-white opacity-75"
          style={{
            mixBlendMode: "lighten",
          }}
        ></div>
      </div>
      {/* Content Wrapper */}
      <div className="relative max-w-screen-3xl mx-auto w-full py-12 md:py-[60px] px-6 lg:px-0 text-black">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-12">
          {/* Left Grid */}
          <div className="max-w-xl">
            <h2 className="text-2xl md:text-[46px] font-medium leading-normal md:leading-[55px] text-customBlack mb-2 md:mb-6">
              Breaking Barriers to Recovery
            </h2>
            <p className="text-base md:text-xl opacity-90 leading-[30px] text-customGray">
              Our mission is to make Medication Assisted Treatment accessible to
              people in both major cities and rural communities. We&pos;re
              deeply committed to removing obstacles to recovery, ensuring our
              clients get the support they need.
            </p>
          </div>

          {/* Right Grid */}
          <div className="flex flex-col justify-between">
            <p className="text-base md:text-xl opacity-90 leading-[30px] text-customGray">
              We’re not just offering a service; we’re creating a lifeline. Our
              platform is designed to eliminate the challenges that often stand
              in the way of recovery—whether it’s stigma, inconvenience, or lack
              of access to quality care.
            </p>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-6 mt-8 md:mt-12">
              <div>
                <h3 className="text-2xl md:text-4xl font-bold text-primary">
                  500+
                </h3>
                <p className="text-base md:text-xl opacity-80 font-medium leading-[28px] text-customBlack">Patients Treated</p>
              </div>
              <div>
                <h3 className="text-2xl md:text-4xl font-bold text-primary">
                  300+
                </h3>
                <p className="text-base md:text-xl opacity-80 font-medium leading-[28px] text-customBlack">Centers Nationwide</p>
              </div>
              <div>
                <h3 className="text-2xl md:text-4xl font-bold text-primary">
                  4.9/5
                </h3>
                <p className="text-base md:text-xl opacity-80 font-medium leading-[28px] text-customBlack">Patient Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecoverySection;
