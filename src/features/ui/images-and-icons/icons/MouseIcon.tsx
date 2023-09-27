import React from 'react';

const MouseIcon = (props: React.HTMLAttributes<SVGElement>) => (
  <svg
    width="24"
    height="40"
    viewBox="0 0 24 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x="1"
      y="1"
      width="22"
      height="38"
      rx="4"
      stroke="currentColor"
      strokeWidth="2"
    />
    <rect x="10" y="10" width="4" height="6" fill="currentColor" />
  </svg>
);

export default MouseIcon;
