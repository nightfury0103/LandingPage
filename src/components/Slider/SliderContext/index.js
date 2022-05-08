import React, { useState, createContext } from "react";

export const SliderContext = createContext();

export const SliderProvider = ({ children }) => {
  const [curId, setCurId] = useState(0);
  const toggleId = () => {
    setCurId((curId) => curId + 1);
  };

  return (
    <SliderContext.Provider value={{ curId, toggleId }}>
      {children}
    </SliderContext.Provider>
  );
};
