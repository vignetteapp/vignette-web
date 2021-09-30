import React from 'react'

const BottomBar: React.FC = () => (
  <svg viewBox="0 0 1400 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d)">
      <rect width="1440" height="10" fill="url(#paint0_linear)" />
    </g>
    <defs>
      <filter
        id="filter0_d"
        x="-4"
        y="0"
        width="1448"
        height="21"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear"
        x1="-720"
        y1="6.5"
        x2="-719.765"
        y2="32.4979"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#BE58CB" />
        <stop offset="1" stopColor="#F10E5A" />
        <stop offset="1" stopColor="#F10E5A" />
      </linearGradient>
    </defs>
  </svg>
)

export default BottomBar
