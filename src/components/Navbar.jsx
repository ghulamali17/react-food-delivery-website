import React, { useContext, useEffect } from "react";
import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";
import { dataContext } from "../context/userContext";
import { food_items } from "../Food";
import { useSelector } from "react-redux";

function Navbar() {
  const { input, setInput, setCate, setShowCart } = useContext(dataContext);
  const items = useSelector((state) => state.cart);

  // Filter food
  useEffect(() => {
    if (!input.trim()) {
      setCate(food_items);
    } else {
      const filteredList = food_items.filter((item) =>
        item.food_name.toLowerCase().includes(input.toLowerCase())
      );
      setCate(filteredList);
    }
  }, [input]);

  return (
    <div>
      <nav className="w-full h-[100px] flex justify-between items-center px-5 md:px-8">
        {/* Logo */}
        <div className="logo w-[60px] h-[60px] shadow-xl rounded-md bg-white flex justify-center items-center">
          <MdFastfood className="w-[30px] h-[30px] text-green-500" />
        </div>

        {/* Search */}
        <div className="w-[50%] md:w-[70%] gap-5 px-5 h-[60px] bg-white flex items-center border-none rounded-md shadow-md">
          <IoSearch className="text-green-500 w-[20px] h-[20px]" />
          <input
            className="w-full outline-none text-[16px] md:text-[20px]"
            placeholder="Search Items....."
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>

        {/* Cart */}
        <div
          onClick={() => setShowCart(true)}
          className="relative cursor-pointer w-[60px] h-[60px] shadow-xl rounded-md bg-white flex justify-center items-center"
        >
          <span className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full w-5 h-5 text-sm flex items-center justify-center font-bold">
            {items.length}
          </span>
          <LuShoppingBag className="w-[30px] h-[30px] text-green-500" />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
