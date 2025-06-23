import React, { createContext, useState } from "react";
import { food_items } from "../Food";

export const dataContext = createContext({
  input: "",
  setInput: () => {},
  cate: [],
  setCate: () => {},
});

function UserContext({ children }) {
  const [input, setInput] = useState("");
  const [cate, setCate] = useState(food_items);
  const [showCart, setShowCart]=useState(false)

  const data = {
    input,
    setInput,
    cate,
    setCate,
    showCart,
    setShowCart,
  };

  return <dataContext.Provider value={data}>{children}</dataContext.Provider>;
}

export default UserContext;
