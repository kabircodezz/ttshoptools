import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        // Homepage (dark)
        ink: {
          bg: "#111111",
          surface: "#1a1a1a",
          border: "#2a2a2a",
          primary: "#f5f5f0",
          secondary: "#888888",
          muted: "#666666",
        },
        // Funnel (light)
        cream: {
          bg: "#FAF9F6",
          surface: "#ffffff",
          border: "#e8e4dc",
        },
        // Accents
        amber: {
          DEFAULT: "#BA7517",
          light: "#FAEEDA",
          dark: "#854F0B",
          border: "#EF9F27",
          deep: "#633806",
        },
        coral: {
          DEFAULT: "#D85A30",
          light: "#FAECE7",
          dark: "#712B13",
        },
        leaf: {
          dark: "#1C3A1A",
          DEFAULT: "#3B6D11",
          light: "#EAF3DE",
          border: "#97C459",
          text: "#27500A",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
