"use client";
import { createContext, useState } from "react";

export const WriteContext = createContext();

export const WriteContextProvider = ({ children }) => {
  const [value, setValue] = useState("");
  return (
    <WriteContext.Provider value={{ value, setValue }}>
      {children}
    </WriteContext.Provider>
  );
};
