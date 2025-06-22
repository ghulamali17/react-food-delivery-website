import React from "react";
import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";
function Navbar() {
  return (
    <div>
      <nav className="w-full h-[100px] flex justify-between items-center px-5 md:px-8">
        {/* Logo  */}
        <div className="logo w-[60px] h-[60px] shadow-xl rounded-md bg-white flex justify-center items-center">
          <MdFastfood className="w-[30px] h-[30px] text-green-500" />
        </div>
        {/* Search  */}
        <form className="w-[50%] md:w-[70%] gap-5 px-5 h-[60px] bg-white flex items-center border-none rounded-md shadow-md">
          <IoSearch className="text-green-500 w-[20px] h-[20px]" />

          <input
            className="w-[100%] outline-none text-[16px] md:text-[20px]"
            placeholder="Search Items....."
            type="text"
          />
        </form>
        {/* Cart  */}
        <div className="logo w-[60px] relative shadow-xl rounded-md h-[60px] bg-white flex justify-center items-center">
          <span className="absolute top-0 right-2 text-green-500 font-bold text-[18px]">
            0
          </span>
          <LuShoppingBag className="w-[30px] h-[30px] text-green-500" />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
