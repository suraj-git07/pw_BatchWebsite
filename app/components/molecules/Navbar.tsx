import React from 'react';
import Image from 'next/image'; 
import { Poppins } from 'next/font/google';

const poppins = Poppins({ weight: ['100', '200', '300', '400', '500', '600', '700', '800'], subsets: ['latin'] });

const Navbar = () => {
  return (
    <nav className="bg-white p-4 flex flex-col sm:flex-row items-center justify-between text-black border-b border-gray-300">
      <div className="flex items-center sm:pl-28">
        <a href='https://www.pw.live/'>
          <Image
            src="./pw_icon.png"
            alt="Logo"
            className="w-14 h-14 mr-2"
          />
        </a>
        <div className="text-center sm:text-left">
          <h1 className={`text-xl font-semibold text-zinc-950 ${poppins.className}`}>Physics Wallah  /</h1>
          <p className={`text-base font-semibold text-indigo-500 underline ${poppins.className} ml-1`}>Ongoing Batches</p>
        </div>
        <Image
          src="./calendar.png"
          alt="calendar"
          className="w-9 h-9 ml-3 sm:ml-0"
        />
      </div>
    </nav>
  );
};

export default Navbar;
