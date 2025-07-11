import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { AddItems } from "../Redux/cartSlice";

function Card({ name, id, image, price, type }) {
  let dispatch = useDispatch();
  return (
    <div className="w-[300px] h-[360px] rounded-xl bg-white p-3 flex flex-col shadow-lg gap-3 hover:border-2 border-green-300 ">
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
        <p className="text-lg font-bold text-green-500">Rs {price} /-</p>
        <div className="flex items-center  justify-center gap-2 text-green-500 text-lg font-semibold">
          {type === "veg" ? (
            <>
              <LuLeafyGreen className="text-green-600" />
              <span className="text-green-600 capitalize">{type}</span>
            </>
          ) : (
            <>
              <GiChickenOven className="text-green-500" />
              <span className="text-green-500 capitalize">{type}</span>
            </>
          )}
        </div>
      </div>

      <button
        onClick={() => {
          dispatch(
            AddItems({ id: id, name: name, price: price, image: image, qty: 1 })
          );
        }}
        className="w-full rounded-lg p-3 bg-green-500 text-white hover:bg-green-300 cursor-pointer font-semibold transition-all "
      >
        Add to dish
      </button>
    </div>
  );
}

export default Card;
