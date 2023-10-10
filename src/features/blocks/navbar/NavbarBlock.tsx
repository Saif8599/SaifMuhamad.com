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
        isScrolled ? 'fixed top-0 w-full z-50 backdrop-blur-lg bg-opacity-90' : ''
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
            href="#"
            className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-1 rounded mr-2 border-red-500 transition-all duration-500"
          >
            Home
          </a>
          <a
            href="#about"
            className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-1 rounded mr-2 border-red-500 transition-all duration-500"
          >
            About
          </a>
          <a
            href="#contact"
            className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-1 rounded mr-2 border-red-500 transition-all duration-500"
          >
            Contact
          </a>
        </div>
        <div className="relative mr-2 text-gray-600 lg:block hidden font-mono">
          <input
            className="border-2 border-gray-300 bg-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="Search"
          />
          <button type="submit" className="absolute right-0 top-0 mt-3 mr-2">
            <svg
              className="text-gray-600 h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 56.966 56.966"
              width="512px"
              height="512px"
            >
              <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
            </svg>
          </button>
        </div>
        <div className="flex font-mono">
          <a
            href="#"
            className="block text-md px-4 py-1 rounded text-red-700 font-bold hover:text-white mt-4 lg:mt-0 border-red-500 transition-all duration-500"
          >
            Login
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavbarBlock;
