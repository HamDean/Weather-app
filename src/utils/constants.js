export const unitGroups = [
  {
    label: "Temperature",
    convertions: [
      { id: 1, convertion: "Celsius (°C)", value: "celsius" , category: 'metric'},
      { id: 2, convertion: "Fahrenheit (°F)", value: "fahrenheit", category: 'imperial' },
    ],
  },
  {
    label: "Wind Speed",
    convertions: [
      { id: 3, convertion: " km/h", value: "kmh", category: 'metric'},
      {
        id: 4,
        convertion: "mph",
        value: "mph",
        category: 'imperial'
      },
    ],
  },
  {
    label: "Precipitation",
    convertions: [
      { id: 5, convertion: "Millimeters (mm)", value: "mm", category: 'metric' },
      {
        id: 6,
        convertion: "Inches (in)",
        value: "in",
        category: 'imperial'
      },
    ],
  },
];
