import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > prevScrollPos) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div
      className={`bg-transparent backdrop-blur-xl text-black fixed top-0 left-0 right-0 z-[100] ${
        isHidden ? 'transform -translate-y-16' : ''
      }`}
    >
      <div className="container lg:mx-auto flex items-center justify-between lg:p-4 max-sm:px-2 lg:px-4">
        <div
          className="flex justify-center items-center text-center"
          onClick={() => {
            window.location.href = '/';
          }}
        >
          <img src="logo.png" alt="logo" className="h-8 w-8 mb-1" />
          <span className="text-2xl font-semibold m-1 mb-2 text-center justify-center items-center flex">
            MatrixCrafters
          </span>
        </div>
        <div className="flex items-center space-x-4 max-sm:space-x-2 max-lg:hidden">
          <div className="flex space-x-4 max-sm:space-x-2">
            <NavLink to="/" label="Home" closeMobileMenu={closeMobileMenu} />
            <Link
              to="/demo"
              className="text-white font-bold rounded bg-tertiary p-1 max-sm:p-1 lg:px-4 max-sm:px-2"
              onClick={closeMobileMenu}
            >
              Demo
            </Link>
            <NavLink
              to="/about"
              label="About"
              closeMobileMenu={closeMobileMenu}
            />
            <ScrollNavLink
              to="#footer"
              label="Contact"
              closeMobileMenu={closeMobileMenu}
            />
          </div>
        </div>
        <div className="flex justify-center items-center p-2 lg:hidden mt-1">
          <button type="button" title="menu" onClick={toggleMobileMenu}>
            <MenuIcon />
          </button>
          {isMobileMenuOpen && <MobileMenu closeMobileMenu={closeMobileMenu} />}
        </div>
      </div>
    </div>
  );
};
const ScrollNavLink = ({ to, label, closeMobileMenu }: any) => {
  const handleClick = () => {
    closeMobileMenu();
  };

  return (
    <a
      href={to}
      className="text-black hover:text-tertiary hover:font-bold p-1 font-semibold"
      onClick={handleClick}
    >
      {label}
    </a>
  );
};
const NavLink = ({ to, label, closeMobileMenu }: any) => {
  const location = useLocation();
  const isCurrent = location.pathname === to;

  const handleClick = () => {
    closeMobileMenu();
  };

  return (
    <Link
      to={to}
      className={`text-black ${
        isCurrent
          ? 'text-tertiary font-bold'
          : 'hover:text-tertiary hover:font-bold'
      } p-1 font-semibold `}
      onClick={handleClick}
    >
      {label}
    </Link>
  );
};

const MobileMenu = ({ closeMobileMenu }: any) => {
  return (
    <div className="absolute top-full right-8 bg-white border border-gray-300 mt-2 rounded-md shadow-lg h-min w-[150px] flex flex-col justify-center items-center py-4">
      <NavLink to="/" label="Home" closeMobileMenu={closeMobileMenu} />
      <Link
        to="/demo"
        className="text-white font-bold rounded bg-tertiary p-1 max-sm:p-1 lg:px-4 max-sm:px-2"
        onClick={closeMobileMenu}
      >
        Demo
      </Link>
      <NavLink to="/about" label="About" closeMobileMenu={closeMobileMenu} />
      <ScrollNavLink
        to="#footer"
        label="Contact"
        closeMobileMenu={closeMobileMenu}
      />
    </div>
  );
};

const MenuIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="-5 -7 24 24"
    >
      <path
        fill="currentColor"
        d="M1 0h5a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2m7 8h5a1 1 0 0 1 0 2H8a1 1 0 1 1 0-2M1 4h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2"
      />
    </svg>
  );
};

export default Navbar;
