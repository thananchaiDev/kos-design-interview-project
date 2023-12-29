const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        NeueMachina: ["NeueMachina", ...defaultTheme.fontFamily.sans],
      },

      bgGradientDeg: {
        75: '75deg',
      },

      colors: {
        primaryRed: "#F42728",
        primaryPurple: "#7B5BE6",

        natural03: "#E1E2E2",
        natural75: "#18181C",
        natural07: "#232329",
        natural05: "#70727B",
        natural06: "#4E5057",
        natural08: "#010101",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "bg-gradient": (angle) => ({
            "background-image": `linear-gradient(${angle}, var(--tw-gradient-stops))`,
          }),
        },
        {
          // values from config and defaults you wish to use most
          values: Object.assign(
            theme("bgGradientDeg", {}), // name of config key. Must be unique
            {
              10: "10deg", // bg-gradient-10
              15: "15deg",
              20: "20deg",
              25: "25deg",
              30: "30deg",
              45: "45deg",
              60: "60deg",
              90: "90deg",
              120: "120deg",
              135: "135deg",
            }
          ),
        }
      );
    }),
  ],
};
