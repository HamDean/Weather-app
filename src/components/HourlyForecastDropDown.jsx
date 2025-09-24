import { useState } from "react";
import { days } from "../utils/constants";
import IconDropDown from "../assets/images/icon-dropdown.svg";

const HourlyForecastDropDown = () => {
  const [showDays, setShowDays] = useState(true);
  const [selectedDay, setSelectedDay] = useState("Monday");

  const handleSelect = (day) => {
    setSelectedDay(day);
    setShowDays((prev) => !prev)
  };

  const handleClick = () => {
    setShowDays((prev) => !prev);
  };
  return (
    <div role="form">
      <SeleceTrigger handleClick={handleClick} selectedDay={selectedDay} />
      {showDays && <SelectContent handleSelect={handleSelect} days={days} />}
    </div>
  );
};

function SeleceTrigger({ handleClick, selectedDay }) {
  return (
    <button onClick={handleClick} className="select-trigger">
      <span>{selectedDay}</span>
      <img src={IconDropDown} alt="Drown icon to view days of the week" />
    </button>
  );
}

function SelectContent({ days, handleSelect }) {
  return (
    <div className="days-content">
      {days.map((day, i) => (
        <span onClick={() => handleSelect(day)} className="day-list-item" key={i}>
          {day}
        </span>
      ))}
    </div>
  );
}

export default HourlyForecastDropDown;
