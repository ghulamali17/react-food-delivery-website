import { LuLeafyGreen } from "react-icons/lu";

function Card({ name, id, image, price, type }) {
  return (
    <div className="w-[300px] h-[360px] bg-white p-3 flex flex-col shadow-lg gap-3">
      <div className="img w-full h-1/2 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-40 object-cover rounded-md"
        />
      </div>
      <div className="name mt-2 text-2xl font-semibold">
        {" "}
        <p>{name}</p>
      </div>

      <div className="price w-full flex justify-between items-center">
        <p className="text-lg font-bold text-green-500">{price}</p>
        <div className="flex items-center  justify-center gap-2 text-green-500 text-lg font-semibold">
          <LuLeafyGreen className="" /> <span>{type}</span>
        </div>
      </div>

      <button className="w-full p-3 bg-green-300 text-gray-700 hover:bg-green-400 cursor-pointer font-semibold transition-all ">
        Add to dish
      </button>
    </div>
  );
}

export default Card;
