// UnitsProvider.jsx
import { useState } from "react";
import { UnitsContext } from "./UnitsContext";   

export const UnitsProvider = ({ children }) => {
  const [unit, setUnit] = useState("metric");

  return (
    <UnitsContext.Provider value={{ unit, setUnit }}>
      {children}
    </UnitsContext.Provider>
  );
};
