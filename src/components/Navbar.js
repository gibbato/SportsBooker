import React from 'react';
import NavbarSportsIcon from './NavbarSportsIcon';
import Logo from './Logo';

const Navbar = ({ sports }) => {
  // Select the first 8 sports from the list
  const selectedSports = sports.slice(0, 8);

  return (
    <nav className="bg-neutral-950 p-8 relative z-10 shadow-md">
      <div className="container mx-0 flex items-center justify-between">
        <div>
          <img
            className="h-20 w-auto "
            src="../../sportsbooker.png"
            alt="sportsbooker logo"
          />
        </div>
        <div className='flex space-x-4 align-bottom'>
          {/* Render NavbarSportsIcon for each selected sport */}
          {selectedSports.map((sport, index) => (
            <NavbarSportsIcon key={index} sportName={sport} />
          ))}
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-white">Home</a>
          <a href="#" className="text-white">About</a>
          <a href="#" className="text-white">Services</a>
          <a href="#" className="text-white">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
