import React, { useState } from "react";

const Bulb = () => {
  const [isBulbOn, setIsBulbOn] = useState(false);
  return (
    <div className="absolute">
      <svg
        width="409"
        height="635"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >

        <g className="z-20 relative">
          <circle
            cx="204.5"
            cy="330.5"
            r="204.5"
            fill="url(#paint0_radial_621_1578)"
          />
          {isBulbOn ? (
            <g>
              <g
                className="hover:cursor-pointer"
                onClick={() => {
                  console.log("dark mode -> light mode");
                  setIsBulbOn(false);
                }}
              >
                <circle cx="205" cy="331" r="26" fill="#FFDA16" />
                <path
                  d="M205.5 312L217.967 318.713C218.137 318.804 218.092 319.059 217.901 319.087L191.883 322.872C191.672 322.902 191.649 323.198 191.853 323.261L208.504 328.349C208.679 328.402 208.696 328.643 208.531 328.721L200.873 332.324C200.722 332.396 200.719 332.61 200.869 332.684L207.5 336"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </g>
              <defs>
                <radialGradient
                  id="paint0_radial_621_1578"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(204.5 330.5) rotate(90) scale(204.5)"
                >
                  <stop stopColor="#FFDC81" />
                  <stop offset="1" stopColor="#C4C4C4" stopOpacity="0" />
                </radialGradient>
              </defs>
            </g>
          ) : (
            <g
              className="hover:cursor-pointer"
              onClick={() => {
                console.log("light mode -> dark mode");
                setIsBulbOn(true);
              }}
            >
              <circle cx="205" cy="331" r="26" fill="#DBDBDA" fillOpacity="0.7" />
              <path
                d="M205.5 312L217.967 318.713C218.137 318.804 218.092 319.059 217.901 319.087L191.883 322.872C191.672 322.902 191.649 323.198 191.853 323.261L208.504 328.349C208.679 328.402 208.696 328.643 208.531 328.721L200.873 332.324C200.722 332.396 200.719 332.61 200.869 332.684L207.5 336"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </g>
          )}
          <rect x="189" y="301" width="32" height="13" rx="6.5" fill="#B9B7B7" />
          <rect x="196" y="296" width="18" height="6" rx="3" fill="#717171" />
        </g>
      </svg>
    </div>
  );
};

export default Bulb;
