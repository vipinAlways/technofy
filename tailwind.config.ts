import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        /* Maps to --background in globals.css */
        background: "hsl(var(--background))",
        /* Maps to --foreground in globals.css */
        foreground: "hsl(var(--foreground))",

        card: {
          /* Maps to --card in globals.css */
          DEFAULT: "hsl(var(--card))",
          /* Maps to --card-foreground in globals.css */
          foreground: "hsl(var(--card-foreground))",
        },

        popover: {
          /* Maps to --popover in globals.css */
          DEFAULT: "hsl(var(--popover))",
          /* Maps to --popover-foreground in globals.css */
          foreground: "hsl(var(--popover-foreground))",
        },

        primary: {
          /* Maps to --primary: #132039 in globals.css (heading color) */
          DEFAULT: "var(--primary)",
          /* Maps to --primary-foreground: #132039 in globals.css */
          foreground: "var(--primary-foreground)",
        },

        secondary: {
          /* Maps to --secondary in globals.css */
          DEFAULT: "hsl(var(--secondary))",
          /* Maps to --secondary-foreground in globals.css */
          foreground: "hsl(var(--secondary-foreground))",
        },

        muted: {
          /* Maps to --muted: #65758b in globals.css (navlinks & para text) */
          DEFAULT: "var(--muted)",
          /* Maps to --muted-foreground: #e5e7eb in globals.css (hero para & why card & CTA para) */
          foreground: "var(--muted-foreground)",
        },

        accent: {
          /* Maps to --accent: #3853a4 in globals.css (highlight color) */
          DEFAULT: "var(--accent)",
          /* Maps to --accent-foreground in globals.css */
          foreground: "hsl(var(--accent-foreground))",
        },

        destructive: {
          /* Maps to --destructive in globals.css */
          DEFAULT: "hsl(var(--destructive))",
          /* Maps to --destructive-foreground in globals.css */
          foreground: "hsl(var(--destructive-foreground))",
        },

        /* Maps to --border: #d3d3d3 in globals.css (service card border & footer links) */
        border: "var(--border)",

        /* Maps to --input in globals.css */
        input: "var(--input)",

        /* Maps to --ring: #3853a4 in globals.css */
        ring: "var(--ring)",

        chart: {
          /* Maps to --chart-1 in globals.css */
          "1": "hsl(var(--chart-1))",
          /* Maps to --chart-2 in globals.css */
          "2": "hsl(var(--chart-2))",
          /* Maps to --chart-3 in globals.css */
          "3": "hsl(var(--chart-3))",
          /* Maps to --chart-4 in globals.css */
          "4": "hsl(var(--chart-4))",
          /* Maps to --chart-5 in globals.css */
          "5": "hsl(var(--chart-5))",
        },

        sidebar: {
          /* Maps to --sidebar in globals.css */
          DEFAULT: "hsl(var(--sidebar))",
          /* Maps to --sidebar-foreground in globals.css */
          foreground: "hsl(var(--sidebar-foreground))",
          /* Maps to --sidebar-primary in globals.css */
          primary: "hsl(var(--sidebar-primary))",
          /* Maps to --sidebar-primary-foreground in globals.css */
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          /* Maps to --sidebar-accent in globals.css */
          accent: "hsl(var(--sidebar-accent))",
          /* Maps to --sidebar-accent-foreground in globals.css */
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          /* Maps to --sidebar-border in globals.css */
          border: "hsl(var(--sidebar-border))",
          /* Maps to --sidebar-ring in globals.css */
          ring: "hsl(var(--sidebar-ring))",
        },
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
  ],
};

export default config;