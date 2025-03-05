import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";

import { AiFillStar } from "react-icons/ai";

const Testimonials = () => {
  const [swiper, setSwiper] = useState(null);
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);

  const products = [
    {
      id: 1,
      name: "Nicholas O",
      description:
        "Recovery Delivered is great! I cannot believe how fast and easy the process is. The staff and providers are very quick to respond to your messages. I made my appointment same day and had everything I needed.  I was so surprised. Thank you Recovery Delivered!",
      image: "/assets/images/t1.png",
    },
    {
      id: 2,
      name: "Christine M.",
      description:
        "My daughter started her online opioid treatment program not too long ago and the process was so fast and simple.Very ffordable as well. We are in Florida and were able to do everything online. Thank you so much for everything Recovery Delivered!",
      image: "/assets/images/t2.png",
    },
    {
      id: 3,
      name: "Heather B.",
      description:
        "If you need help. Go here. Get online. Sign up. Pay the fees and never look back.I went to an actual Suboxone doctor in my area for three years and it took so much time, he caused me so much anxiety and made my entire treatment hard.",
      image: "/assets/images/t3.png",
    },
    {
      id: 4,
      name: "Nicholas O",
      description:
        "Recovery Delivered is great! I cannot believe how fast and easy the process is. The staff and providers are very quick to respond to your messages. I made my appointment same day and had everything I needed.  I was so surprised. Thank you Recovery Delivered!",
      image: "/assets/images/t2.png",
    },
    {
      id: 5,
      name: "Christine M.",
      description:
        "My daughter started her online opioid treatment program not too long ago and the process was so fast and simple.Very ffordable as well. We are in Florida and were able to do everything online. Thank you so much for everything Recovery Delivered!",
      image: "/assets/images/t1.png",
    },
    {
      id: 5,
      name: "Heather B.",
      description:
        "If you need help. Go here. Get online. Sign up. Pay the fees and never look back.I went to an actual Suboxone doctor in my area for three years and it took so much time, he caused me so much anxiety and made my entire treatment hard.",
      image: "/assets/images/t3.png",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const swiperRefs = useRef([]);

  swiperRefs.current = products.map(
    (_, i) => swiperRefs.current[i] || React.createRef()
  );
  const handleMouseEnter = (index) => {
    console.log("Mouse Enter:", index);
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    console.log("Mouse Leave");
    setHoveredIndex(null);
  };
  return (
    <div className="relative max-w-screen-3xl mx-auto w-full px-6 lg:px-0  py-12 md:py-12 text-black mb-20">
      {/* Header with title and navigation buttons */}
      <div className="flex justify-between items-center mb-5">
        <div className="">
          <h1 className="text-base md:text-2xl font-medium text-primary leading-6 mb-2 uppercase">
            Our Client’s
          </h1>
          <h2 className="text-2xl md:text-[52px] font-medium text-customBlack leading-normal md:leading-[62px] mb-4">
            Testimonials
          </h2>
        </div>
        <div className="flex gap-5">
          <button
            className={`flex items-center justify-center w-10 h-10 border border-customGray rounded-full transition 
      ${
        isPrevDisabled
          ? "text-gray-400 cursor-not-allowed"
          : "text-customBlack hover:bg-primary hover:border-transparent hover:text-white"
      }`}
            onClick={() => swiper?.slidePrev()}
            disabled={isPrevDisabled}
          >
            <RiArrowLeftLine className="text-lg" />
          </button>

          <button
            className={`flex items-center justify-center w-10 h-10 border border-customGray rounded-full transition 
      ${
        isNextDisabled
          ? "text-gray-400 cursor-not-allowed"
          : "text-customBlack hover:bg-primary hover:border-transparent hover:text-white"
      }`}
            onClick={() => swiper?.slideNext()}
            disabled={isNextDisabled}
          >
            <RiArrowRightLine className="text-lg" />
          </button>
        </div>
      </div>

      <Swiper
        className="shadow-custom-shadow"
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        navigation={false}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
        }}
        onSwiper={setSwiper}
        onSlideChange={(swiper) => {
          setIsPrevDisabled(swiper.isBeginning);
          setIsNextDisabled(swiper.isEnd);
        }}
      >
        {products.map((product, index) => (
          <SwiperSlide
            key={product.id}
            ref={swiperRefs.current[index]}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            className={`shadow-custom-shadow p-8 border border-[#E2E8F0] rounded-xl overflow-hidden transition-transform duration-500 ease-in-out ${
              hoveredIndex === index ? "scale-105 -rotate-3" : "scale-100"
            }`}
            style={{
              opacity:
                hoveredIndex === null || hoveredIndex === index ? 1 : 0.4,
            }}
          >
            <div>
              {/* Rating */}
              <div className="flex items-center gap-1 text-[#EECE43]">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <AiFillStar key={i} className="text-lg" />
                  ))}
              </div>

              {/* Description */}
              <p className="text-lg leading-7 text-customGray my-6 h-auto lg:h-[175px]">
                {product.description}
              </p>

              {/* Image & Name */}
              <div className="flex items-center gap-3">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-[60px] h-[60px] rounded"
                />
                <h3 className="text-xl font-medium leading-5 text-customBlack">
                  {product.name}
                </h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
