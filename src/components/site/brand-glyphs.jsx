import React from "react";

// Authentic-geometry vector badges for the marques we service.
// Each glyph is drawn on a 40x40 grid with the brand's own palette.

const silver = "#cfd4da";
const silverSoft = "#e9ecef";
const gold = "#c8b06a";
const red = "#d7263d";

const frameText = (label, color, size) => (
  <>
    <rect x="4.5" y="11.5" width="31" height="17" rx="2" fill="none" stroke={color} strokeOpacity="0.5" strokeWidth="1" />
    <text
      x="20"
      y="23.2"
      textAnchor="middle"
      fontFamily="Rubik, sans-serif"
      fontWeight="800"
      fontSize={size}
      letterSpacing="0.35"
      fill={color}
    >
      {label}
    </text>
  </>
);

const glyphs = {
  bmw: () => (
    <>
      <circle cx="20" cy="20" r="17.5" fill="#0b0e11" stroke="#9aa2ab" strokeWidth="1.6" />
      <circle cx="20" cy="20" r="12.6" fill="#11161b" />
      <path d="M20 20V7.4A12.6 12.6 0 0 1 32.6 20H20z" fill="#ffffff" />
      <path d="M20 20H7.4A12.6 12.6 0 0 1 20 7.4V20z" fill="#3aa0e8" />
      <path d="M20 20h12.6A12.6 12.6 0 0 1 20 32.6V20z" fill="#3aa0e8" />
      <path d="M20 20v12.6A12.6 12.6 0 0 1 7.4 20H20z" fill="#ffffff" />
      <circle cx="20" cy="20" r="12.6" fill="none" stroke="#7f878f" strokeWidth="0.9" />
    </>
  ),
  mercedes: () => (
    <>
      <circle cx="20" cy="20" r="17.5" fill="#0b0e11" stroke="#b9c0c7" strokeWidth="1.5" />
      <circle cx="20" cy="20" r="14.6" fill="none" stroke="#c9ced4" strokeWidth="1.5" />
      <path
        d="M20 20V5.6M20 20 7.3 27.3M20 20l12.7 7.3"
        stroke={silverSoft}
        strokeWidth="2.3"
        strokeLinecap="round"
      />
      <circle cx="20" cy="20" r="2" fill={silverSoft} />
    </>
  ),
  audi: () => (
    <g fill="none" stroke={silver} strokeWidth="1.8">
      <circle cx="8.6" cy="20" r="6.4" />
      <circle cx="16.8" cy="20" r="6.4" />
      <circle cx="25" cy="20" r="6.4" />
      <circle cx="33.2" cy="20" r="6.4" />
    </g>
  ),
  porsche: () => (
    <>
      <path d="M12 5.5h16v13.2c0 8.2-5.1 13.4-8 15.3-2.9-1.9-8-7.1-8-15.3z" fill="#0b0e11" stroke={gold} strokeWidth="1.4" />
      <path d="M12 5.5h16v4.2H12z" fill="#c0392b" />
      <path d="M16.4 9.7h3.6v10.4h-3.6z" fill="#c0392b" opacity="0.85" />
      <path d="M20 9.7h3.6v10.4H20z" fill={gold} opacity="0.9" />
      <text x="20" y="30.4" textAnchor="middle" fontFamily="Rubik, sans-serif" fontWeight="800" fontSize="4.6" fill="#efe3c4">
        PORSCHE
      </text>
    </>
  ),
  landrover: () => (
    <>
      <ellipse cx="20" cy="20" rx="18" ry="11.4" fill="#0b3d2c" stroke={gold} strokeWidth="1.2" />
      <text
        x="20"
        y="22.6"
        textAnchor="middle"
        fontFamily="Rubik, sans-serif"
        fontWeight="800"
        fontSize="6.2"
        letterSpacing="0.2"
        fill="#e7dbc0"
      >
        LAND ROVER
      </text>
    </>
  ),
  jaguar: () => frameText("JAGUAR", silverSoft, 7.4),
  bentley: () => (
    <>
      <g fill="none" stroke={gold} strokeWidth="1.5" strokeLinecap="round">
        <path d="M18.6 21c-4.8.9-8.6.1-12.4-2.9 4.8-.7 8.6.5 11.5 2.2" />
        <path d="M21.4 21c4.8.9 8.6.1 12.4-2.9-4.8-.7-8.6.5-11.5 2.2" />
      </g>
      <text x="20" y="22.6" textAnchor="middle" fontFamily="Georgia, serif" fontWeight="700" fontSize="12" fill="#e7dbc0">
        B
      </text>
      <text x="20" y="33" textAnchor="middle" fontFamily="Rubik, sans-serif" fontWeight="700" fontSize="4.4" letterSpacing="0.6" fill="#cdbb8d">
        BENTLEY
      </text>
    </>
  ),
  rolls: () => (
    <>
      <rect x="5" y="11" width="30" height="18" rx="2" fill="none" stroke={gold} strokeWidth="1.1" />
      <text x="14.4" y="26.4" textAnchor="middle" fontFamily="Georgia, serif" fontWeight="700" fontSize="14" fill="#e7dbc0">
        R
      </text>
      <text x="25.6" y="26.4" textAnchor="middle" fontFamily="Georgia, serif" fontWeight="700" fontSize="14" fill="#e7dbc0">
        R
      </text>
    </>
  ),
  aston: () => (
    <>
      <rect x="3" y="13" width="34" height="14" rx="2" fill="#0b3d2c" stroke={gold} strokeWidth="1" />
      <text
        x="20"
        y="22.6"
        textAnchor="middle"
        fontFamily="Rubik, sans-serif"
        fontWeight="800"
        fontSize="5"
        letterSpacing="0.35"
        fill="#e7dbc0"
      >
        ASTON MARTIN
      </text>
    </>
  ),
  maserati: () => (
    <>
      <path d="M20 6.5l5 3.5-5 3.5-5-3.5z" fill="#0b1f3a" stroke={silver} strokeWidth="1.1" />
      <g fill="none" stroke={silverSoft} strokeWidth="1.6" strokeLinecap="round">
        <path d="M20 14v20" />
        <path d="M20 15c-5.2.4-8.4 3.2-9.4 7.4" />
        <path d="M20 15c5.2.4 8.4 3.2 9.4 7.4" />
        <path d="M13.6 34h12.8" />
      </g>
    </>
  ),
  ferrari: () => (
    <>
      <path d="M12 5.5h16v13.2c0 8.2-5.1 13.4-8 15.3-2.9-1.9-8-7.1-8-15.3z" fill="#f4d21f" stroke="#11161b" strokeWidth="1.3" />
      <path d="M12 5.5h16v3.6H12z" fill="#0b0e11" />
      <text
        x="20"
        y="24.6"
        textAnchor="middle"
        fontFamily="Rubik, sans-serif"
        fontWeight="900"
        fontSize="5.4"
        letterSpacing="0.2"
        fill="#0b0e11"
      >
        FERRARI
      </text>
      <path d="M15 28h10" stroke="#0b0e11" strokeWidth="1.2" />
    </>
  ),
  lamborghini: () => (
    <>
      <path d="M12 5.5h16v13.2c0 8.2-5.1 13.4-8 15.3-2.9-1.9-8-7.1-8-15.3z" fill="#0b0e11" stroke={gold} strokeWidth="1.4" />
      <text
        x="20"
        y="21"
        textAnchor="middle"
        fontFamily="Rubik, sans-serif"
        fontWeight="900"
        fontSize="7"
        fill="#efe3c4"
      >
        L
      </text>
      <text x="20" y="30" textAnchor="middle" fontFamily="Rubik, sans-serif" fontWeight="700" fontSize="4.2" fill="#cdbb8d">
        LAMBORGHINI
      </text>
    </>
  ),
  mclaren: () => (
    <>
      <path d="M20 6l6.6 11.4L20 28.8l-6.6-11.4z" fill="none" stroke="#0b0e11" strokeWidth="2.2" />
      <text x="20" y="35.6" textAnchor="middle" fontFamily="Rubik, sans-serif" fontWeight="800" fontSize="5.6" letterSpacing="0.3" fill="#0b0e11">
        McLAREN
      </text>
    </>
  ),
  lotus: () => (
    <>
      <circle cx="20" cy="18" r="11.5" fill="none" stroke="#f4d21f" strokeWidth="2" />
      <text x="20" y="21.4" textAnchor="middle" fontFamily="Rubik, sans-serif" fontWeight="900" fontSize="6.6" fill="#f4d21f">
        LOTUS
      </text>
      <text x="20" y="34.6" textAnchor="middle" fontFamily="Rubik, sans-serif" fontWeight="700" fontSize="4.6" letterSpacing="0.4" fill="#e7dbc0">
        UNITED KINGDOM
      </text>
    </>
  ),
  mini: () => (
    <>
      <path d="M6 17.5c4.6 2.6 9.2 3.8 14 3.8s9.4-1.2 14-3.8" fill="none" stroke={silver} strokeWidth="1.4" />
      <text x="20" y="18.6" textAnchor="middle" fontFamily="Rubik, sans-serif" fontWeight="900" fontSize="8.4" letterSpacing="0.6" fill={silverSoft}>
        MINI
      </text>
      <text x="20" y="30" textAnchor="middle" fontFamily="Rubik, sans-serif" fontWeight="700" fontSize="4.4" letterSpacing="0.3" fill="#b9c0c7">
        COOPER
      </text>
    </>
  ),
  toyota: () => (
    <g fill="none" stroke={red} strokeWidth="2.1">
      <ellipse cx="20" cy="20" rx="17.4" ry="12.2" />
      <ellipse cx="20" cy="20" rx="6.6" ry="12.2" />
      <ellipse cx="20" cy="16.4" rx="11.6" ry="4.5" />
    </g>
  ),
  lexus: () => (
    <>
      <ellipse cx="20" cy="20" rx="16.6" ry="13" fill="none" stroke={silver} strokeWidth="1.5" />
      <path d="M17.4 10.6v17.6h9.4" fill="none" stroke={silverSoft} strokeWidth="2.6" strokeLinejoin="miter" />
    </>
  ),
  nissan: () => (
    <>
      <circle cx="20" cy="20" r="15" fill="none" stroke={silver} strokeWidth="1.8" />
      <rect x="4.6" y="17.3" width="30.8" height="5.4" rx="2.7" fill={silver} />
    </>
  ),
  infiniti: () => (
    <>
      <ellipse cx="20" cy="20" rx="17.4" ry="12.2" fill="none" stroke={silver} strokeWidth="1.7" />
      <path d="M6.2 24.6 20 14.4l13.8 10.2" fill="none" stroke={silverSoft} strokeWidth="2" />
      <path d="M20 14.4v9" stroke={silverSoft} strokeWidth="2" />
    </>
  ),
  mitsubishi: () => (
    <g fill={red}>
      <path d="M20 4.6 26 10.6 20 16.6 14 10.6z" />
      <path d="M13 16.8 19 22.8 13 28.8 7 22.8z" />
      <path d="M27 16.8 33 22.8 27 28.8 21 22.8z" />
      <path d="M20 22.6 24.4 27l-4.4 4.4L15.6 27z" fill={red} />
    </g>
  ),
  renault: () => (
    <>
      <path d="M20 5 29.4 21 20 35 10.6 21z" fill="none" stroke="#f4d21f" strokeWidth="2.6" strokeLinejoin="round" />
      <path d="M20 12.4 24.6 21 20 29.6 15.4 21z" fill="none" stroke="#f4d21f" strokeWidth="2.6" strokeLinejoin="round" />
    </>
  ),
  volvo: () => (
    <>
      <circle cx="18.6" cy="19.4" r="12.8" fill="none" stroke={silver} strokeWidth="2.5" />
      <path
        d="M27.6 10.4 35 3M35 3h-6.4M35 3v6.4"
        fill="none"
        stroke={silver}
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <text x="18.6" y="22.4" textAnchor="middle" fontFamily="Rubik, sans-serif" fontWeight="900" fontSize="6.4" letterSpacing="0.6" fill={silverSoft}>
        VOLVO
      </text>
    </>
  ),
  vw: () => (
    <>
      <circle cx="20" cy="20" r="16" fill="none" stroke={silver} strokeWidth="1.8" />
      <path d="M9.4 10.6 16.2 25.4 20 16.4l3.8 9L30.6 10.6" fill="none" stroke={silverSoft} strokeWidth="2.1" strokeLinejoin="round" />
    </>
  ),
  peugeot: () => (
    <>
      <path d="M11 8h18v14c0 7.6-5.6 12.2-9 13.6-3.4-1.4-9-6-9-13.6z" fill="#0b3aa0" stroke={silver} strokeWidth="1.3" />
      <path d="M15.6 26.4c-1.4-3.4-.4-6.6 1.8-8.4 1.4-1.2 3.4-1.6 5-1l1.4-2.6 1.6 3c1.6.4 2.8 1.6 3.2 3.2.6 2.4-.6 4.6-2.8 5.6" fill="none" stroke={silverSoft} strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="19.4" cy="24.6" r="1.5" fill={silverSoft} />
      <text x="20" y="35" textAnchor="middle" fontFamily="Rubik, sans-serif" fontWeight="800" fontSize="4.4" letterSpacing="0.3" fill={silverSoft}>
        PEUGEOT
      </text>
    </>
  ),
  ford: () => (
    <>
      <ellipse cx="20" cy="20" rx="18" ry="10.6" fill="#0b3d91" stroke={silver} strokeWidth="1" />
      <text x="20" y="24.4" textAnchor="middle" fontFamily="Georgia, serif" fontStyle="italic" fontWeight="700" fontSize="11" fill="#ffffff">
        Ford
      </text>
    </>
  ),
  chevrolet: () => (
    <>
      <path d="M4 16.4h12.4l3.6-5.2 3.6 5.2H36v7.2H23.6l-3.6 5.2-3.6-5.2H4z" fill="#d9a12a" />
      <path d="M4 16.4h12.4l3.6-5.2 3.6 5.2H36" fill="none" stroke="#f0cc74" strokeWidth="0.8" />
    </>
  ),
  cadillac: () => (
    <>
      <path d="M20 4.6l11.4 3.2v12.6c0 7.6-5.2 12.8-11.4 15-6.2-2.2-11.4-7.4-11.4-15V7.8z" fill="#12325e" stroke="#d9a12a" strokeWidth="1.3" />
      <path d="M12.4 12.4h7.8v7.4h-7.8z" fill="#d9a12a" opacity="0.92" />
      <path d="M19.8 19.8h7.8v7.4h-7.8z" fill="#c0392b" opacity="0.92" />
      <path d="M12.6 27.2h14.8" stroke="#d9a12a" strokeWidth="1.2" />
    </>
  ),
  gmc: () => (
    <g fontFamily="Rubik, sans-serif" fontWeight="900" fontSize="13" textAnchor="middle" fill="#ffffff">
      <rect x="3.4" y="12" width="10.4" height="16" fill="#c0392b" />
      <text x="8.6" y="24.2">
        G
      </text>
      <rect x="14.8" y="12" width="10.4" height="16" fill="#c0392b" />
      <text x="20" y="24.2">
        M
      </text>
      <rect x="26.2" y="12" width="10.4" height="16" fill="#c0392b" />
      <text x="31.4" y="24.2">
        C
      </text>
    </g>
  ),
  jeep: () => (
    <>
      <rect x="3.6" y="12.6" width="32.8" height="14.8" rx="2.6" fill="none" stroke="#8ca06a" strokeWidth="2" />
      <text x="20" y="24.2" textAnchor="middle" fontFamily="Rubik, sans-serif" fontWeight="900" fontSize="9" letterSpacing="0.6" fill="#cfe0b0">
        JEEP
      </text>
    </>
  ),
  dodge: () => (
    <>
      <path d="M5.6 30.4 20.4 8.6h7.2L12.8 30.4z" fill="#c0392b" />
      <path d="M19.4 30.4 34.2 8.6h5.4L24.6 30.4z" fill="#c0392b" />
      <path d="M5.6 33.4h28.8" stroke="#8b8f95" strokeWidth="0.9" />
    </>
  ),
  hummer: () => (
    <>
      <text x="20" y="21.6" textAnchor="middle" fontFamily="Rubik, sans-serif" fontWeight="900" fontSize="8.2" letterSpacing="0.3" fill="#dbe0e5">
        HUMMER
      </text>
      <path d="M6 26.6h28" stroke="#8b8f95" strokeWidth="1.6" />
      <path d="M6 31.4h28" stroke="#8b8f95" strokeWidth="1.6" />
    </>
  ),
  tesla: () => (
    <>
      <path
        d="M20 11.4c4.4 0 8.6.7 12 2l-1.8 4.6c-2.8-1-6.4-1.6-10.2-1.6s-7.4.6-10.2 1.6L8 13.4c3.4-1.3 7.6-2 12-2z"
        fill="#e02b20"
      />
      <path d="M20 18.6v16.2" stroke="#e02b20" strokeWidth="2.8" strokeLinecap="round" />
    </>
  ),
};

export default function BrandGlyph({ glyph, name }) {
  const draw = glyphs[glyph];
  return (
    <svg viewBox="0 0 40 40" role="img" aria-label={`${name} badge`} className="h-full w-full">
      {draw ? draw() : frameText(name.toUpperCase().slice(0, 12), silverSoft, name.length > 8 ? 6 : 8)}
    </svg>
  );
}