import { useState } from "react";
import { unitGroups } from "../utils/constants";
import IconCheck from "../assets/images/icon-checkmark.svg";

const UnitsDropDownList = ({ showUnits }) => {
  const [switchToMetric, setSwitchToMetric] = useState(false);
  const [currentUnit, setCurrentUnit] = useState("metric");

  const handleClick = () => {
    setSwitchToMetric((prev) => !prev);
    if (switchToMetric) setCurrentUnit("metric");
    else setCurrentUnit("imperial");
  };

  return (
    <div className={`drop-down-list ${!showUnits && "hide"}`}>
      <span onClick={handleClick}>
        {`Switch to ${switchToMetric ? 'Metric' : 'Imperial'}`}
        {/* {switchToMetric ? "Switch to Metric" : "Switch to Imperial"} */}
      </span>
      {unitGroups.map(({ label, convertions }, index) => (
        <>
          <span key={index} className="header">
            {label}
          </span>
          {convertions.map((conv, conIndex) => (
            <span
              className={
                currentUnit == conv.category ? "unit selected" : "unit"
              }
              key={conIndex}
            >
              <span>{conv.convertion}</span>
              {currentUnit == conv.category && <img src={IconCheck} alt="Check" />}
            </span>
          ))}
        </>
      ))}
    </div>
  );
};
export default UnitsDropDownList;
