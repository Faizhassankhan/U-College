import React, { useState, useEffect } from 'react';
import { navLinks } from '../constants/data';
import type { NavLink } from '../types';

const NavLinkItem: React.FC<{ link: NavLink; onLinkClick: () => void }> = ({ link, onLinkClick }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const hasSubLinks = link.subLinks && link.subLinks.length > 0;

  // Handles programmatic scrolling to the section.
  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault(); // Take control from the browser's default behavior.
    const targetId = href.substring(1); // Get the ID from href (e.g., '#about' -> 'about')
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      // Using 'start' to align the top of the element with the top of the viewport.
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    
    // Always close the main mobile menu after a navigation click.
    onLinkClick();
  };

  const handleMainLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const isMobile = window.innerWidth < 1024;
    
    // On mobile, if a link has sub-links, it should only toggle the dropdown.
    if (isMobile && hasSubLinks) {
      e.preventDefault(); // Prevent navigation, just toggle.
      setIsDropdownOpen(!isDropdownOpen);
    } else {
      // Otherwise (on desktop, or on mobile for a link without sub-links), navigate.
      handleNavigation(e, link.href);
    }
  };

  const handleSubLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // A sub-link click always navigates.
    setIsDropdownOpen(false); // Close the dropdown first.
    handleNavigation(e, href);
  };

  return (
    <div 
      className="relative group"
      // Desktop hover behavior
      onMouseEnter={() => window.innerWidth >= 1024 && hasSubLinks && setIsDropdownOpen(true)}
      onMouseLeave={() => window.innerWidth >= 1024 && hasSubLinks && setIsDropdownOpen(false)}
    >
      <a
        href={link.href}
        onClick={handleMainLinkClick}
        className="text-white py-2 px-3 block hover:bg-blue-700 rounded-md transition-colors duration-300"
        aria-haspopup={hasSubLinks}
        aria-expanded={isDropdownOpen}
      >
        {link.label}
        {hasSubLinks && <span className="ml-1 lg:inline-block hidden" aria-hidden="true">▼</span>}
        {hasSubLinks && <span className="ml-1 lg:hidden inline-block" aria-hidden="true">{isDropdownOpen ? '▲' : '▼'}</span>}
      </a>
      {hasSubLinks && isDropdownOpen && (
        <div className="lg:absolute lg:top-full lg:left-0 bg-blue-800 lg:shadow-lg rounded-md lg:mt-1 w-full lg:w-48 z-20">
          {link.subLinks?.map((subLink) => (
            <a
              key={subLink.label}
              href={subLink.href}
              onClick={(e) => handleSubLinkClick(e, subLink.href)}
              className="text-white text-sm py-2 px-4 block hover:bg-blue-700 transition-colors duration-300"
            >
              {subLink.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};


const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Add a function to handle the logo click to use the same programmatic scroll
  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const homeElement = document.getElementById('home');
    if (homeElement) {
        homeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    closeMenu();
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isOpen ? 'bg-blue-800 shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <a href="#home" onClick={handleLogoClick} className="text-white text-2xl font-bold tracking-wider">UNIVERA</a>
          
          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-2">
            {navLinks.map((link) => (
              <NavLinkItem key={link.label} link={link} onLinkClick={closeMenu} />
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none" aria-label="Open menu" aria-expanded={isOpen}>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Nav */}
      <div className={`lg:hidden transition-max-height duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <div className="px-2 pt-2 pb-3 sm:px-3 bg-blue-800">
            {navLinks.map((link) => (
              <NavLinkItem key={link.label} link={link} onLinkClick={closeMenu} />
            ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
