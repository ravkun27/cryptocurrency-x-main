// src/Loader.js
import React from 'react';

const Loader = () => {

  return (
  
      <div className="fixed inset-0 flex items-center justify-center bg-[#07091b] animate-fade-in">
        <div className="relative w-12 h-12 transform scale-[1.4] rounded-full">
          <div className=" filter contrast-200 rounded-full absolute transform animate-rotate-circle bg-gradient-to-br inset-1 from-secondary1 via-secondary2 to-secondary3 shadow-glow">
            <div className="bg-[#07091b] rounded-full absolute inset-2"></div>
          </div>
        </div>
      </div>
    
    )
};

export default Loader;
