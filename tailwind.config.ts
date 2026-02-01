import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
        heading: ['Roboto', 'sans-serif'],
      },
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
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Custom navy blue shades
        navy: {
          50: "hsl(220, 40%, 96%)",
          100: "hsl(220, 35%, 90%)",
          200: "hsl(220, 40%, 80%)",
          300: "hsl(220, 50%, 65%)",
          950: "hsl(240, 100%, 6%)",
          400: "hsl(220, 60%, 50%)",
          500: "hsl(220, 70%, 40%)",
          600: "hsl(230, 80%, 32%)",
          700: "hsl(235, 90%, 26%)",
          800: "hsl(240, 100%, 22%)",
          900: "hsl(240, 100%, 15%)",
          950: "hsl(240, 100%, 10%)",
        },
        gold: {
          50: "hsl(45, 90%, 95%)",
          100: "hsl(45, 90%, 88%)",
          200: "hsl(45, 90%, 75%)",
          300: "hsl(45, 90%, 60%)",
          400: "hsl(45, 90%, 50%)",
          500: "hsl(43, 85%, 45%)",
          600: "hsl(40, 80%, 38%)",
        },
        // Funky vibrant colors
        funky: {
          green: "hsl(142, 76%, 45%)",
          orange: "hsl(30, 95%, 55%)",
          red: "hsl(0, 80%, 55%)",
          pink: "hsl(330, 85%, 55%)",
          purple: "hsl(270, 70%, 55%)",
          cyan: "hsl(185, 80%, 45%)",
          yellow: "hsl(50, 100%, 50%)",
          lime: "hsl(80, 75%, 50%)",
          coral: "hsl(16, 85%, 60%)",
          teal: "hsl(175, 70%, 40%)",
          indigo: "hsl(245, 60%, 50%)",
          amber: "hsl(38, 95%, 50%)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        "slide-in-left": {
          from: { transform: "translateX(-100%)", opacity: "0" },
          to: { transform: "translateX(0)", opacity: "1" },
        },
        "slide-in-right": {
          from: { transform: "translateX(100%)", opacity: "0" },
          to: { transform: "translateX(0)", opacity: "1" },
        },
        "fade-up": {
          from: { transform: "translateY(30px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        "scale-in": {
          from: { transform: "scale(0.9)", opacity: "0" },
          to: { transform: "scale(1)", opacity: "1" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px hsla(45, 90%, 50%, 0.3)" },
          "50%": { boxShadow: "0 0 40px hsla(45, 90%, 50%, 0.6)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "slide-in-left": "slide-in-left 0.5s ease-out",
        "slide-in-right": "slide-in-right 0.5s ease-out",
        "fade-up": "fade-up 0.6s ease-out",
        "scale-in": "scale-in 0.4s ease-out",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': 'linear-gradient(135deg, hsl(240, 100%, 15%) 0%, hsl(240, 100%, 22%) 50%, hsl(220, 70%, 35%) 100%)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
