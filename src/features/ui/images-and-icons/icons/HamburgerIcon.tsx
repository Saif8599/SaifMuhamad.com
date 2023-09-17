import React from 'react';

const HamburgerIcon = (props: React.SVGAttributes<SVGElement>) => (
  <svg
    width="20"
    height="14"
    viewBox="0 0 20 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20 1C20 1.552 19.552 2 19 2H1C0.448 2 0 1.552 0 1C0 0.448 0.448 0 1 0H19C19.552 0 20 0.448 20 1ZM14 6H1C0.448 6 0 6.448 0 7C0 7.552 0.448 8 1 8H14C14.552 8 15 7.552 15 7C15 6.448 14.552 6 14 6ZM10 12H1C0.448 12 0 12.448 0 13C0 13.552 0.448 14 1 14H10C10.552 14 11 13.552 11 13C11 12.448 10.552 12 10 12Z"
      fill="currentColor"
    />
  </svg>
);

export default HamburgerIcon;
