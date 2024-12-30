import React from 'react';
import { SiBloglovin } from 'react-icons/si';
import { AiOutlineSearch } from 'react-icons/ai';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
      <header className="text-gray-600 body-font bg-black/85">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 cursor-pointer">
            <SiBloglovin className="w-10 h-10 text-white p-2 bg-indigo-600 rounded-lg" />
            <span className="ml-8 text-2xl text-white">BlogNest</span>
          </a>

 
          <div className="relative w-full max-w-md mx-auto md:mx-4">
            <input
              type="text"
              placeholder="Search..."
              className="w-65 px-8 py-2 pl-10 text-gray-700 bg-gray-100 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white"
            />
            <AiOutlineSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>

          <nav className="ml-auto flex flex-wrap items-center text-base justify-center text-white cursor-pointer">
            <Link href="/" className="mr-5 text-xl hover:text-gray-400">Home</Link>
            <Link href="/about" className="mr-5 text-xl hover:text-gray-400">About</Link>
            {/* <Link href="/blog" className="mr-5 text-xl hover:text-gray-400">Blog</Link> */}
            <Link href="/contact" className="mr-5 text-xl hover:text-gray-400">Contact</Link>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
