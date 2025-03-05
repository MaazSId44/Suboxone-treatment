import React from "react";

const Button = ({ title, showSvg = false,className }) => {
  return (
    <button className={`flex items-center gap-2 bg-primary cursor-pointer text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-md transition hover:bg-opacity-90 ${className}`}>
      {title}
      {showSvg && (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.05026 14.9498L5.40382 14.5962M7.52514 12.4749L8.5858 11.4142M10.7071 9.29291L14.9498 5.05027"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.46448 5.05027H14.9498"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.9498 13.5355V5.05024"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  );
};

export default Button;
