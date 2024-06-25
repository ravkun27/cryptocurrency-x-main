import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex'>
      <div className='container mx-auto flex justify-between items-center py-8'> 
      <div className='flex justify-start items-center px-3'><img src="https://assets-global.website-files.com/62ea94aa50fb59ad3ea476f0/62ead07c4e3c0613c01dd91c_logo-cryptocurrency-template.svg" className='w-[50%] md:w-[90%]' alt="" /></div>
      <ul className='hidden md:flex justify-center items-center flex-grow gap-10 text-xl'>
        <li className=''>Home</li>
        <li>Live Prices</li>
        <li>About Us</li>
      </ul>
      <div className='w-[40%] md:hidden flex justify-center items-center'>
        <div className='w-full'>Live Prices</div>
        <div className='space-y-4 px-3'>
          <div className='h-[3px] w-[32px] rounded bg-white text-white'></div>
          <div className='h-[3px] w-[32px] rounded bg-primary'></div>
        </div>
      </div>
      <div className='hidden md:flex justify-center items-center px-6'><button className='h-[2rem] w-24 md:h-[3.5rem] md:w-36 bg-gradient-to-tr rounded-lg outline-none hover:shadow-[1px_1px_15px_1px_#6248ff] hover:-translate-y-1 from-secondary1 via-secondary2 to-secondary3 duration-300'>Subscribe</button></div>
      </div>
    </nav>
  )
}

export default Navbar