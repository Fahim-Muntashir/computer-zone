/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    colors: {
      primary: "#ffff",
      back: "#ffff",
      secondary: "#ffff",
    },
  },
  plugins: [require("flowbite/plugin")],
});
