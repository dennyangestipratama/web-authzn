import { createContext, useState, useEffect } from "react";

export const GeneralContext = createContext();

export default function GeneralContextProvider({ children }) {
  return (
    <GeneralContext.Provider value={{}}>{children}</GeneralContext.Provider>
  );
}
