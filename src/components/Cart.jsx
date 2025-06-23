import { dataContext } from "../context/userContext";
import { useContext } from "react";
import { ImCross } from "react-icons/im";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";

function Cart() {
  const { showCart, setShowCart } = useContext(dataContext);
  const items = useSelector((state) => state.cart);
let subTotal = items.reduce((total, item) => total + item.price * item.qty, 0);
let deliveryFee = 20;
let taxes = (subTotal * 0.5) / 100;
let total = Math.floor(subTotal + deliveryFee + taxes);

  return (
    <div
      className={`w-full overflow-scroll md:w-[40vw] h-[100vh] p-6 fixed top-0 right-0 bg-white shadow-xl transform transition-transform  duration-500 z-50 ${
        showCart ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Header */}
      <header className="w-full flex justify-between items-center mb-4">
        <span className="text-green-400 text-2xl font-semibold">
          Order Items
        </span>
        <ImCross
          className="text-green-400 text-2xl font-semibold w-[20px] h-[30px] cursor-pointer hover:text-gray-600"
          onClick={() => setShowCart(false)}
        />
      </header>

      {/* Cart Items */}
      <div className="space-y-4 overflow-y-auto max-h-[85vh] pr-2">
        {items.length > 0 ? (
          items.map((item) => (
            <CartItems
              key={item.id}
              name={item.name}
              id={item.id}
              price={item.price}
              image={item.image}
              qty={item.qty}
            />
          ))
        ) : (
          <p className="text-gray-500 text-center mt-10">Your cart is empty.</p>
        )}
      </div>
      <div className="w-full border-t-2 border-gray-400 mt-7 flex flex-col gap-4 p-8"></div>
      <div className="w-full flex justify-between items-center ">
        <span className="text-lg font-semibold text-gray-600">SubTotal</span>
        <span className="text-green-400 font-semibold text-lg">
          RS {subTotal}/-
        </span>
      </div>
      <div className="w-full flex justify-between items-center ">
        <span className="text-lg font-semibold text-gray-600">
          Delivery Fee
        </span>
        <span className="text-green-400 font-semibold text-lg">
          RS {deliveryFee}/-
        </span>
      </div>
      <div className="w-full flex justify-between items-center ">
        <span className="text-lg font-semibold text-gray-600">Taxes</span>
        <span className="text-green-400 font-semibold text-lg">
          RS {taxes}/-
        </span>
      </div>
      <div className="w-full border-t-2 border-gray-400 mt-7 flex flex-col gap-4 p-6"></div>
      <div className="w-full flex justify-between items-center ">
        <span className="text-lg font-semibold text-gray-600">Total</span>
        <span className="text-green-400 font-semibold text-lg">
          RS {total}/-
        </span>
      </div>
      <div className="flex w-full justify-center items-center">
        <button className="w-[80%] p-3 rounded-lg mt-5 bg-green-500 text-white hover:bg-green-300 cursor-pointer font-semibold transition-all">
        Place Order
      </button>
      </div>
    </div>
  );
}

export default Cart;
