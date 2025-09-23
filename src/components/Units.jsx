import UnitsDropDown from "./UnitsDropDown";


const unitGroups = [
  {
    label: "Temperature",
    convertions: [
      { convertion: "Celsius (°C)", value: "celsius" },
      {
        convertion: "Fahrenheit (°F)",
        value: "fahrenheit",
      },
    ],
  },
  {
    label: "Temperature",
    convertions: [
      { convertion: "Celsius (°C)", value: "celsius" },
      {
        convertion: "Fahrenheit (°F)",
        value: "fahrenheit",
      },
    ],
  },
  {
    label: "Temperature",
    convertions: [
      { convertion: "Celsius (°C)", value: "celsius" },
      {
        convertion: "Fahrenheit (°F)",
        value: "fahrenheit",
      },
    ],
  },
];

const Units = () => {
  const handleClick = () => {
    console.log('clicked!')
  }
  return (
    <>
      <UnitsDropDown handleClick={handleClick} />
    </>
  );
};
export default Units;
