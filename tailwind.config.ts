import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0a0a0a",
        surface: "#111111",
        "surface-2": "#1a1a1a",
        border: "#222222",
        "border-light": "#2e2e2e",
        ink: "#e8e2d6",
        "ink-secondary": "#9a9490",
        "ink-muted": "#4a4744",
        accent: "#b03030",
        "accent-dim": "#7a2020",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 8vw, 7rem)", { lineHeight: "0.95", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2.2rem, 5vw, 4.5rem)", { lineHeight: "1.0", letterSpacing: "-0.025em" }],
        "display-md": ["clamp(1.6rem, 3.5vw, 3rem)", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "title": ["clamp(1.2rem, 2.5vw, 1.8rem)", { lineHeight: "1.2", letterSpacing: "-0.015em" }],
        "body-lg": ["1.125rem", { lineHeight: "1.7", letterSpacing: "0.005em" }],
        "body": ["1rem", { lineHeight: "1.7", letterSpacing: "0.005em" }],
        "caption": ["0.8rem", { lineHeight: "1.5", letterSpacing: "0.08em" }],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "section": "clamp(4rem, 10vw, 8rem)",
      },
      maxWidth: {
        "reading": "680px",
        "wide": "960px",
        "full-content": "1200px",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.5s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
