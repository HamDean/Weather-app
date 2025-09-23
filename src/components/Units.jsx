import { useState } from "react";
import UnitsDropDown from "./UnitsDropDown";
import UnitsDropDownList from "./UnitsDropDownList";

const Units = () => {
  const [showUnits, setShowUnits] = useState(false)
  const handleClick = () => {
    setShowUnits((prev) => !prev)
  }
  return (
    <section className="dropDown">
      <UnitsDropDown handleClick={handleClick} />
      <UnitsDropDownList showUnits={showUnits} />
    </section>
  );
};
export default Units;
