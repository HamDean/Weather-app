import { useContext, useState } from "react";
import { unitGroups } from "../utils/constants";
import IconCheck from "../assets/images/icon-checkmark.svg";
import { UnitsContext } from "../contexts/UnitsContext";

const UnitsDropDownList = ({ showUnits }) => {
  const [switchToMetric, setSwitchToMetric] = useState(false);
  const { unit, setUnit } = useContext(UnitsContext);

  const handleClick = () => {
    setSwitchToMetric((prev) => !prev);
    if (switchToMetric) setUnit("metric");
    else setUnit("imperial");
  };

  return (
    <div className={`drop-down-list ${!showUnits && "hide"}`}>
      <span onClick={handleClick}>
        {`Switch to ${switchToMetric ? "Metric" : "Imperial"}`}
      </span>
      {unitGroups.map(({ label, convertions }, index) => (
        <>
          <span key={index} className="header">
            {label}
          </span>
          {convertions.map((conv, conIndex) => (
            <span
              className={unit == conv.category ? "unit selected" : "unit"}
              key={conIndex}
            >
              <span>{conv.convertion}</span>
              {unit == conv.category && <img src={IconCheck} alt="Check" />}
            </span>
          ))}
        </>
      ))}
    </div>
  );
};
export default UnitsDropDownList;
