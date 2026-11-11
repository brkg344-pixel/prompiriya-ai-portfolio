import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#080A12",
        void: "#05070D",
        surface: "#101522",
        "surface-elevated": "#161D2F",
        "surface-hover": "#1E2740",
        emerald: {
          DEFAULT: "#35E6A1",
          dim: "rgba(53, 230, 161, 0.12)",
        },
        purple: {
          DEFAULT: "#9B7BFF",
          dim: "rgba(155, 123, 255, 0.14)",
        },
        techblue: {
          DEFAULT: "#4D8DFF",
          dim: "rgba(77, 141, 255, 0.14)",
        },
        ink: {
          DEFAULT: "#F5F7FF",
          secondary: "#A5B0C8",
          muted: "#697591",
        },
      },
      fontFamily: {
        display: ["var(--font-jakarta)", "var(--font-noto-thai)", "sans-serif"],
        sans: ["var(--font-inter)", "var(--font-noto-thai)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
