import React from "react";

const StepCard = ({ step, title, description, className }) => {
  return (
    <div className={`bg-white shadow-lg border border-primary rounded-2xl px-5 py-[30px] ${className}`}>
      <h3 className="text-lg font-semibold leading-5 text-customBlack mb-2">Step - {step} - {title}</h3>
      <p className="text-base text-customGray font-normal leading-6">{description}</p>
    </div>
  );
};

export default StepCard;
