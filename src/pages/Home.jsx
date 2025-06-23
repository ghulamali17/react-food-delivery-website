import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import Categories from "../Category";
import Card from "../components/Card";
import { food_items } from "../Food";
import { dataContext } from "../context/userContext";
import { SiFoodpanda } from "react-icons/si";
import Cart from "../components/Cart";
import { useSelector } from "react-redux";
import CartItems from "../components/CartItems";

function Home() {
  const { cate, setCate, input, showCart } = useContext(dataContext);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const items = useSelector((state) => state.cart);

  const filter = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setCate(food_items);
    } else {
      const newList = food_items.filter(
        (item) => item.food_category === category
      );
      setCate(newList);
    }
  };

  return (
    <div className="bg-slate-200 w-full min-h-screen relative overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Categories */}
      {!input && (
        <div className="flex flex-wrap justify-center items-center gap-5 w-full">
          {Categories.map((item) => (
            <div
              key={item.name}
              onClick={() => filter(item.name)}
              className={`w-[140px] h-[150px] flex flex-col items-start gap-5 p-5 text-[20px] font-semibold text-gray-600 rounded-lg shadow-xl cursor-pointer transition-all duration-200 ${
                selectedCategory === item.name
                  ? "bg-green-300"
                  : "bg-white hover:bg-green-200"
              }`}
            >
              {item.Image}
              {item.name}
            </div>
          ))}
        </div>
      )}

      {/* Food Cards */}
      <div className="flex flex-wrap justify-center gap-5 p-5">
        {cate.length > 0 ? (
          cate.map((item) => (
            <Card
              key={item.id}
              name={item.food_name}
              image={item.food_image}
              price={item.price}
              id={item.id}
              type={item.food_type}
            />
          ))
        ) : input ? (
          <div className="flex flex-col items-center text-gray-600 mt-10">
            <SiFoodpanda className="text-5xl text-red-400 font-bold mb-2" />
            <p className="text-xl font-semibold">No Food Item Found!</p>
          </div>
        ) : null}
      </div>

      <div></div>

      <Cart />
    </div>
  );
}

export default Home;
