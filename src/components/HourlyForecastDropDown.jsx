import { useState } from "react";
import { days } from "../utils/constants";
import IconDropDown from "../assets/images/icon-dropdown.svg";

const HourlyForecastDropDown = ({ handleSelectedDay, selectedDay }) => {
  const [showDays, setShowDays] = useState(false);

  const handleSelect = () => {
    setShowDays((prev) => !prev);
  };

  const handleClick = () => {
    setShowDays((prev) => !prev);
  };
  return (
    <div className="days-form" role="form">
      <SeleceTrigger handleClick={handleClick} selectedDay={selectedDay} />
      {showDays && (
        <SelectContent
          handleSelect={handleSelect}
          handleSelectedDay={handleSelectedDay}
          days={days}
        />
      )}
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

function SelectContent({ days, handleSelect, handleSelectedDay }) {
  return (
    <div className="days-content">
      {days.map((day, i) => (
        <span
          onClick={() => {
            handleSelect();
            handleSelectedDay(day);
          }}
          className="day-list-item"
          key={i}
        >
          {day}
        </span>
      ))}
    </div>
  );
}

export default HourlyForecastDropDown;
