export const unitGroups = [
  {
    label: "Temperature",
    convertions: [
      {
        id: 1,
        convertion: "Celsius (°C)",
        value: "celsius",
        category: "metric",
      },
      {
        id: 2,
        convertion: "Fahrenheit (°F)",
        value: "fahrenheit",
        category: "imperial",
      },
    ],
  },
  {
    label: "Wind Speed",
    convertions: [
      { id: 3, convertion: " km/h", value: "kmh", category: "metric" },
      {
        id: 4,
        convertion: "mph",
        value: "mph",
        category: "imperial",
      },
    ],
  },
  {
    label: "Precipitation",
    convertions: [
      {
        id: 5,
        convertion: "Millimeters (mm)",
        value: "mm",
        category: "metric",
      },
      {
        id: 6,
        convertion: "Inches (in)",
        value: "in",
        category: "imperial",
      },
    ],
  },
];

export const days = [
  "Tuesday",
  "Wednessday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
  "Monday",
];

import IconStorm from "../assets/images/icon-storm.webp";
import IconSunny from "../assets/images/icon-sunny.webp";
import IconRain from "../assets/images/icon-rain.webp";
import IconPartlyCloudy from "../assets/images/icon-partly-cloudy.webp";
import IconOverCast from "../assets/images/icon-overcast.webp";
import IconFog from "../assets/images/icon-fog.webp";
import IconDrizzle from "../assets/images/icon-drizzle.webp";
import IconSnow from "../assets/images/icon-snow.webp";

export const weatherCodeToIcon = {
  // Clear sky
  0: IconSunny,

  // Cloudiness
  1: IconSunny, // Mainly clear
  2: IconPartlyCloudy, // Partly cloudy
  3: IconOverCast, // Overcast

  // Fog
  45: IconFog, // Fog
  48: IconFog, // Depositing rime fog

  // Drizzle
  51: IconDrizzle, // Light drizzle
  53: IconDrizzle, // Moderate drizzle
  55: IconDrizzle, // Dense drizzle
  56: IconDrizzle, // Freezing drizzle, light
  57: IconDrizzle, // Freezing drizzle, dense

  // Rain
  61: IconRain, // Slight rain
  63: IconRain, // Moderate rain
  65: IconRain, // Heavy rain
  66: IconRain, // Freezing rain, light
  67: IconRain, // Freezing rain, heavy

  // Snow
  71: IconSnow, // Slight snow fall
  73: IconSnow, // Moderate snow fall
  75: IconSnow, // Heavy snow fall
  77: IconSnow, // Snow grains

  // Rain showers
  80: IconRain, // Slight rain showers
  81: IconRain, // Moderate rain showers
  82: IconRain, // Violent rain showers

  // Snow showers
  85: IconSnow, // Slight snow showers
  86: IconSnow, // Heavy snow showers

  // Thunderstorms
  95: IconStorm, // Thunderstorm, slight or moderate
  96: IconStorm, // Thunderstorm with slight hail
  99: IconStorm, // Thunderstorm with heavy hail
};
