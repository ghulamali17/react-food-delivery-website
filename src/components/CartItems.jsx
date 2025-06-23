// CartItems.jsx
import React from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { RemoveItems, incrementQty, decrementQty } from "../Redux/cartSlice";

function CartItems({ name, id, price, image, qty }) {
  const dispatch = useDispatch();

  return (
    <div className="outer w-full h-[120px] bg-white p-4 flex rounded-lg shadow-md items-center gap-4">
      {/* Left Section */}
      <div className="flex w-[60%] h-full items-center gap-4">
        {/* Image */}
        <div className="w-[40%] h-full rounded-lg overflow-hidden">
          <img src={image} className="w-full h-full object-cover" alt={name} />
        </div>

        {/* Name + Quantity */}
        <div className="flex flex-col justify-between w-[60%] h-full">
          <div className="text-lg text-gray-800 font-semibold">{name}</div>

          {/* Quantity Controls */}
          <div className="flex items-center mt-2">
            <button
              className="px-3 py-1 bg-red-400 text-white rounded-l hover:bg-red-500 transition"
              onClick={() => dispatch(decrementQty(id))}
            >
              −
            </button>
            <input
              type="number"
              className="w-12 text-center border-t border-b border-gray-300 focus:outline-none"
              value={qty}
              readOnly
            />
            <button
              className="px-3 py-1 bg-green-500 text-white rounded-r hover:bg-green-600 transition"
              onClick={() => dispatch(incrementQty(id))} 
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-[40%] h-full flex items-center justify-end pr-4 gap-4">
        <span className="text-xl font-semibold text-gray-700">
          RS {price * qty}/-
        </span>
        <button
          className="text-red-500 hover:text-red-700 transition"
          onClick={() => dispatch(RemoveItems(id))} 
        >
          <MdDelete className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

export default CartItems;
