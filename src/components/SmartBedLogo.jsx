import React from "react";

const SmartBedLogo = ({ width = 180, height = 60, className = "" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 180 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`cursor-pointer ${className}`}
    >
      {/* Hospital Bed Shape */}
      <rect x="25" y="35" width="20" height="5" fill="#083A6F" />
      <rect x="50" y="30" width="80" height="15" fill="#083A6F" />
      <rect x="135" y="35" width="20" height="5" fill="#083A6F" />

      {/* Pillow */}
      <path
        d="M60 32H85V36C85 38.209 83.209 40 81 40H64C61.791 40 60 38.209 60 36V32Z"
        fill="#4F85C3"
      />

      {/* Smart Technology Icon */}
      <circle cx="110" cy="38" r="8" fill="white" stroke="#083A6F" strokeWidth="2" />
      <path
        d="M106 38L108 36L110 38L112 36L114 38"
        stroke="#083A6F"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Text Logo */}
      <text
        x="0"
        y="55"
        fontFamily="Arial, sans-serif"
        fontWeight="bold"
        fontSize="18"
      >
        <tspan fill="#083A6F">SMART</tspan>
        <tspan fill="#6B7280" dx="10">HOSPITAL BED</tspan>
      </text>
    </svg>
  );
};

export default SmartBedLogo;
