import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Categories from "../Category";
import Card from "../components/Card";
import { food_items } from "../Food";

function Home() {
  let [Cate, setCate] = useState(food_items);

  let filter = (category) => {
    if (category === "All") {
      setCate(food_items);
    } else {
      let newList = food_items.filter(
        (item) => item.food_category === category
      );
      setCate(newList);
    }
  };
  return (
    <div className="bg-slate-200 w-full min-h-screen">
      <Navbar />

      {/* Categories */}
      <div className="flex flex-wrap justify-center items-center gap-5 w-[100%]">
        {Categories.map((item) => (
          <div
            key={item.name}
            onClick={() => filter(item.name)}
            className="w-[140px] h-[150px] bg-white flex flex-col items-start gap-5 p-5 text-[20px] font-semibold text-gray-600 rounded-lg shadow-xl hover:bg-green-200 cursor-pointer transition-all duration-200"
          >
            {item.Image}
            {item.name}
          </div>
        ))}
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-5 p-5">
        {Cate.map((item) => (
          <Card
            key={item.id}
            name={item.food_name}
            image={item.food_image}
            price={item.price}
            id={item.id}
            type={item.food_type}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
