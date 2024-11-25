import React from "react";

interface EllipseProps {
  className?: string; 
}

export const Ellipse: React.FC<EllipseProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width="286"
      height="268"
      viewBox="0 0 286 268"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse
        cx="143"
        cy="134"
        rx="143"
        ry="134"
        fill="url(#paint0_linear)"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="0"
          y1="-133.287"
          x2="232.576"
          y2="267.625"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFFCA6" />
          <stop offset="1" stopColor="#A43D4E" />
        </linearGradient>
      </defs>
    </svg>
  );
};
