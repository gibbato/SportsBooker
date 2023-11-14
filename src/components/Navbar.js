import React from 'react';
import Logo from './Logo';



const Navbar = () => {
  return (
    <nav className="bg-neutral-950 p-8 relative z-10 shadow-md">      {/* switch relative to fixed w-full top-0 for sticky navbar */}
    <div className="container mx-0 flex items-center justify-between">
    <div >
       <img
        className="h-20 w-auto "
        src="../../sportsbooker.png"
        alt="sportsbooker logo"
        />
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