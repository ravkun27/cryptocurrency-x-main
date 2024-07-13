import React, { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const handleToggle = () => {
    setToggle(!toggle)
  }
  return (
    <>
    <nav className="max-w-screen py-8 md:h-[118px]">
      <div className="w-full flex gap-5 justify-center items-center px-6">
        <div className="flex items-center">
          <img
            src="https://assets-global.website-files.com/62ea94aa50fb59ad3ea476f0/62ead07c4e3c0613c01dd91c_logo-cryptocurrency-template.svg"
            className="w-[70%] md:w-full hover:opacity-70 cursor-pointer"
            alt=""
          />
        </div>
        <ul className="hidden md:flex justify-center items-center flex-grow gap-10 text-xl">
          <li className="hover:opacity-70 cursor-pointer">Home</li>
          <li className="hover:opacity-70 cursor-pointer">Live Prices</li>
          <li className="hover:opacity-70 cursor-pointer">About Us</li>
        </ul>
        <div className="w-[40%] md:hidden flex justify-between items-center relative cursor-pointer">
          <div className="text-sm whitespace-nowrap">Live Prices</div>
          <div className="space-y-4 relative w-full px-4" onClick={handleToggle}>
            <div className={` ${toggle ? "hamburger-icon-top" : ""} h-[3px] w-[32px] rounded bg-neutral-50`}></div>
            <div className={` ${toggle ? "hamburger-icon-bottom" : ""} h-[3px] w-[32px] rounded bg-neutral-50`}></div>
          </div>
        </div>
        <div className="hidden md:flex justify-center items-center px-6">
          <button className="h-[2rem] w-24 md:h-[3.5rem] md:w-36 bg-gradient-to-tr rounded-lg outline-none hover:shadow-[1px_1px_15px_1px_#6248ff] hover:-translate-y-1 from-secondary1 via-secondary2 to-secondary3 duration-300 cursor-pointer">
            Subscribe
          </button>
        </div>
      </div>
    </nav>
    <div className={`absolute w-full md:hidden bg-transparent backdrop-blur-xl bg-opacity-10 rounded-lg z-50 transition-all duration-1000 ease-in-out ${toggle ? 'opacity-100' : 'opacity-0'}`}>
  <ul className="space-y-5 text-center text-4xl p-5 transition-all duration-1000 ease-in-out">
    <li className="p-5 bg-transparent transition-all duration-500 ease-in-out">Home</li>
    <li className="p-5 bg-transparent transition-all duration-500 ease-in-out">About</li>
    <li className="p-5 bg-transparent transition-all duration-500 ease-in-out">Services</li>
    <li className="p-5 bg-transparent transition-all duration-500 ease-in-out">Contact</li>
    <button className="h-[65px] w-full bg-gradient-to-tr rounded-lg outline-none hover:shadow-[1px_1px_15px_1px_#6248ff] hover:-translate-y-1 from-secondary1 via-secondary2 to-secondary3 duration-300 text-xl transition-all ease-in-out">
      Get Started
    </button>
  </ul>
</div>

    </>
  );
};

export default Navbar;
