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

export const  dummyDetails = [
  { title: "Feels Like", value: "72°" },
  { title: "Feels Like", value: "72°" },
  { title: "Feels Like", value: "72°" },
  { title: "Feels Like", value: "72°" },
];

export const dummyForecast = [
  { day: 'Tue', min: 25, max: 55},
  { day: 'Wed', min: 15, max: 45},
  { day: 'Thu', min: 75, max: 85},
  { day: 'Fri', min: 75, max: 85},
  { day: 'Sat', min: 75, max: 85},
  { day: 'Sun', min: 75, max: 85},
  { day: 'Mon', min: 75, max: 85},
]
