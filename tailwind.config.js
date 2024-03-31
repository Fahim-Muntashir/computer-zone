/** @type {import('tailwindcss').Config} */

import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#5c6ac4",
      back: "#1c2434",
      secondary: "#ecc94b",
      // ...
    },
  },
  plugins: [],
});
