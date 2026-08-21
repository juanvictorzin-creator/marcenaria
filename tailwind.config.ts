import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#17130F",
        surface: "#211B16",
        foreground: "#F4EEE4",
        muted: "#C9BDAE",
        line: "#3A3028",
        cream: "#F1EADF",
        paper: "#E8DED0",
        ink: "#1D1814",
        wood: "#A8663A",
        copper: "#C88352",
        moss: "#68705A",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.35em",
      },
      maxWidth: {
        content: "1440px",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        pulseRing: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.35" },
          "50%": { transform: "scale(1.18)", opacity: "0" },
        },
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        pulseRing: "pulseRing 2.4s ease-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
