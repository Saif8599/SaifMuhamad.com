import React from 'react';

const ArrowDownIcon = (props: React.SVGAttributes<SVGElement>) => (
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_1268_2961)">
      <path
        d="M20.5 12L19.09 10.59L13.5 16.17V4H11.5V16.17L5.92 10.58L4.5 12L12.5 20L20.5 12Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_1268_2961">
        <rect
          width="24"
          height="24"
          fill="currentColor"
          transform="translate(0.5)"
        />
      </clipPath>
    </defs>
  </svg>
);

export default ArrowDownIcon;
