import type { Config } from "tailwindcss"
const config: Config = {
  darkMode: ["class"],
  content: [
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        axiom: {
          background: {
            primary: "#0d0f14",
            secondary: "#131720",
            tertiary: "#1a1f2e",
            hover: "#202637",
            modal: "#0d0f14",
            input: "#1a1f2e",
            header: "#11141b",
          },
          border: {
            primary: "#1a1f2e",
            secondary: "#252b3b",
            hover: "#2d3548",
            input: "#2d3548",
          },
          text: {
            primary: "#ffffff",
            secondary: "#94a3b8",
            tertiary: "#64748b",
            muted: "#475569",
            header: "#94a3b8",
          },
          action: {
            primary: "#6366f1",
            hover: "#7c7ff3",
            active: "#5558e3",
            muted: "#6366f120",
          },
          accent: {
            green: "#22c55e",
            "green-muted": "#22c55e20",
            red: "#ef4444",
            "red-muted": "#ef444420",
            blue: "#3b82f6",
            yellow: "#eab308",
            orange: "#f97316",
          },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        inter: ["var(--font-inter)", "Inter", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

export default config
