import React from 'react'
import { Dumbbell } from "lucide-react";

const Logo = () => {
  return (
    <div className="justify-between mx-auto lg:w-full md:items-center md:flex">
      {/* Navbar logo & toggle button section */}
      <div className="flex items-center justify-between py-1 md:py-1 md:block">
        {/* Logo section */}
        <div className="text-2xl text-indigo-600 font-semibold tracking-[0.1rem] flex items-end gap-x-1 relative">
          G<span className="text-xl font-bold text-gray-300">Y</span>M
          <Dumbbell className="w-5 h-4 text-indigo-600 -rotate-45 absolute top-0 left-[46%] translate-x-[-50%]" />
        </div>
      </div>
    </div>
  )
}

export default Logo
