"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <nav className="">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <Link href="/" className="flex">
            <img src="/images/rocket.png" width="50" height="70" alt="Logo"></img>
            <span className="self-center text-lg font-semibold whitespace-nowrap text-custom-green">Desarrollo Laboral</span>
          </Link>
          <button 
            onClick={toggleMobileMenu}
            type="button" 
            className="md:hidden ml-3 text-custom-white hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center" 
            aria-controls="mobile-menu"
            aria-expanded={isMobileMenuOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
            </svg>
          </button>
          <div className={`md:flex w-full md:w-auto ${isMobileMenuOpen ? "block" : "hidden"}`} id="mobile-menu">
            <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
              <Link href="/"> 
                <li>
                  <a href="#" className="bg-blue-700 md:bg-transparent text-white block pl-3 pr-4 py-2 md:p-0 rounded focus:outline-none" aria-current="page">Home</a>
                </li>
              </Link>
              <Link href="/cvtips">
                <li>
                  <a href="#" className="text-custom-white hover:bg-custom-green border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">Tips CV</a>
                </li>
              </Link>
              <Link href="/plantillas">
                <li>
                  <a href="#" className="text-custom-white hover:bg-custom-green border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">Plantillas CV</a>
                </li>
              </Link>
              <Link href="/entrevistas">
                <li>
                  <a href="#" className="text-custom-white hover:bg-custom-green border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">Entrevistas</a>
                </li>
              </Link>
              <Link href="/plataformas">
                <li>
                  <a href="#" className="text-custom-white hover:bg-custom-green border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">Plataformas</a>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;


