import type { Config } from "tailwindcss";
import { blackA, gray, grayDark, blue, violet } from "@radix-ui/colors";
const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: {
          light: "#f5f5f5", // Màu nền light mode
          dark: "#333333", // Màu nền dark mode
        },
        textColor: {
          light: "#000000", // Màu chữ light mode
          dark: "#ffffff", // Màu chữ dark mode
        },
        ...blackA,
        ...blue,
        ...gray,
        ...grayDark,
        ...violet,
      },
      fontFamily: {
        Poppins: ["var(--font-Poppins)"],
        Inter: ["var(--font-inter)"],
      },
    },
  },
  plugins: [],
};
export default config;
