import React, { useState, useEffect } from 'react';

export interface NavbarProps extends React.HTMLAttributes<HTMLDivElement> {}

const NavbarBlock: React.FC<NavbarProps> = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`flex items-center justify-between flex-wrap py-4 md:px-12 bg-transparent ${
        isScrolled ? 'fixed top-0 w-full z-50 bg-opacity-90' : ''
      }`}
    >
      <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 lg:pb-0">
        <div className="block lg:hidden">
          <button
            id="nav"
            onClick={toggleNav}
            type="button"
            className="flex items-center px-3 py-2 border-2 rounded text-red-700 border-red-700 hover:text-red-700 hover:border-red-700"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`menu w-full lg:flex lg:items-center lg:w-auto lg:px-3 px-8 ${
          isNavOpen ? "block" : "hidden"
        }`}
      >
        <div className="text-md font-bold text-red-700 lg:flex-grow font-mono">
          <a
            href="/#"
            className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-1 rounded mr-2 border-red-500 transition-all duration-500"
          >
            Home
          </a>
          <a
            href="/#about"
            className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-1 rounded mr-2 border-red-500 transition-all duration-500"
          >
            About
          </a>
          <a
            href="/#contact"
            className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-1 rounded mr-2 border-red-500 transition-all duration-500"
          >
            Contact
          </a>
        </div>
        <div className="flex font-mono">
          <a
            href="/login"
            className="block px-4 py-1 rounded text-red-700 font-bold hover:text-white mt-4 lg:mt-0 border-red-500 transition-all duration-500"
          >
            Login
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavbarBlock;
