import React from "react";

export default function HeartMapSVG() {
  return (
    <svg
      viewBox="0 0 200 200"
      width="200"
      height="200"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="HeartMapping logo — heart with map pin"
    >
      {/* Heart shape */}
      <path
        d="M100 160
           C60 130 20 110 20 75
           C20 50 40 35 60 35
           C75 35 88 44 100 56
           C112 44 125 35 140 35
           C160 35 180 50 180 75
           C180 110 140 130 100 160Z"
        fill="#C9A84C"
        opacity="0.15"
        stroke="#C9A84C"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />

      {/* Map pin body */}
      <circle cx="100" cy="85" r="18" fill="#1A2340" />

      {/* Map pin inner circle */}
      <circle cx="100" cy="85" r="9" fill="#C9A84C" />

      {/* Map pin tail */}
      <path
        d="M100 103 L100 125"
        stroke="#1A2340"
        strokeWidth="5"
        strokeLinecap="round"
      />

      {/* Decorative small dots around pin */}
      <circle cx="72" cy="68" r="3" fill="#C9A84C" opacity="0.5" />
      <circle cx="128" cy="68" r="3" fill="#C9A84C" opacity="0.5" />
      <circle cx="80" cy="110" r="2.5" fill="#1A2340" opacity="0.3" />
      <circle cx="120" cy="110" r="2.5" fill="#1A2340" opacity="0.3" />

      {/* Subtle grid lines inside heart (map texture) */}
      <line x1="60" y1="75" x2="140" y2="75" stroke="#1A2340" strokeWidth="0.8" opacity="0.12" />
      <line x1="55" y1="95" x2="145" y2="95" stroke="#1A2340" strokeWidth="0.8" opacity="0.12" />
      <line x1="90" y1="50" x2="90" y2="135" stroke="#1A2340" strokeWidth="0.8" opacity="0.12" />
      <line x1="110" y1="50" x2="110" y2="135" stroke="#1A2340" strokeWidth="0.8" opacity="0.12" />
    </svg>
  );
}
