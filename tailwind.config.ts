import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0A",
        "ink-soft": "#151515",
        charcoal: "#1A1A1A",
        "charcoal-border": "#2E2E2E",
        accent: "#FACC15",
        "accent-dark": "#B88F0A",
        gray: {
          50: "#FAFAFA",
          100: "#F4F4F5",
          200: "#E4E4E7",
          300: "#D4D4D8",
        },
        ui: {
          text: "#18181B",
          muted: "#52525B",
          "muted-soft": "#71717A",
          success: "#16A34A",
          warning: "#B45309",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        lg: "20px",
        md: "14px",
        sm: "10px",
      },
      boxShadow: {
        soft: "0 8px 30px rgba(0,0,0,0.06)",
        med: "0 20px 50px rgba(0,0,0,0.10)",
      },
      maxWidth: {
        content: "1200px",
      },
      spacing: {
        "4.5": "1.125rem",
        "5.5": "1.375rem",
        "7.5": "1.875rem",
      },
    },
  },
  plugins: [],
};

export default config;
