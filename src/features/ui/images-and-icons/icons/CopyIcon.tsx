import React from 'react';

const CopyIcon = (props: React.SVGAttributes<SVGElement>) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_1324_3238)">
      <path
        d="M21.3337 1.33325H5.33366C3.86699 1.33325 2.66699 2.53325 2.66699 3.99992V22.6666H5.33366V3.99992H21.3337V1.33325ZM25.3337 6.66658H10.667C9.20033 6.66658 8.00033 7.86658 8.00033 9.33325V27.9999C8.00033 29.4666 9.20033 30.6666 10.667 30.6666H25.3337C26.8003 30.6666 28.0003 29.4666 28.0003 27.9999V9.33325C28.0003 7.86658 26.8003 6.66658 25.3337 6.66658ZM25.3337 27.9999H10.667V9.33325H25.3337V27.9999Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_1324_3238">
        <rect width="32" height="32" fill="currentColor" />
      </clipPath>
    </defs>
  </svg>
);

export default CopyIcon;
