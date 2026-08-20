/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#0d0d0f',
        surface: {
          950: '#0d0d0f',
          900: '#141417',
          850: '#1a1a1e',
          800: '#222228',
          700: '#2d2d37',
        },
        arcade: {
          yellow: '#FFE500',
          'yellow-hover': '#F0D800',
          'yellow-light': '#FFF580',
          purple: '#B8A1FF',
          'purple-hover': '#A68BF8',
          mint: '#4ADE80',
          dark: '#111113',
          card: '#161619',
          border: '#2A2A33',
          'border-strong': '#40404D',
          muted: '#686877',
        },
        lime: {
          DEFAULT: '#FFE500',
          hover: '#F0D800',
          glow: 'rgba(255, 229, 0, 0.4)',
          dim: 'rgba(255, 229, 0, 0.12)',
          muted: '#D4BE00',
        },
        text: {
          primary: '#F5F5F0',
          secondary: '#9E9EA8',
          muted: '#666675',
        }
      },
      fontFamily: {
        pixel: ['"Pixelify Sans"', 'cursive', 'monospace'],
        display: ['"Pixelify Sans"', '"Space Grotesk"', 'sans-serif'],
        sans: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 7s ease-in-out 2s infinite',
        'spin-slow': 'spin 18s linear infinite',
        'glow-pulse': 'glow 3s ease-in-out infinite alternate',
        'marquee': 'marquee 25s linear infinite',
        'marquee-reverse': 'marquee-reverse 25s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { opacity: '0.4', filter: 'blur(20px)' },
          '100%': { opacity: '0.8', filter: 'blur(32px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0%)' },
        }
      },
      boxShadow: {
        'brutalist-yellow': '4px 4px 0px 0px #FFE500',
        'brutalist-black': '4px 4px 0px 0px #000000',
        'brutalist-purple': '4px 4px 0px 0px #B8A1FF',
        'brutalist-white': '3px 3px 0px 0px rgba(255, 255, 255, 0.18)',
        'brutalist-card': '4px 4px 0px 0px #000000',
        'brutalist-button': '3px 3px 0px 0px #000000',
        'arcade-glow': '0 0 25px -5px rgba(255, 229, 0, 0.35)',
        'card-glow': '0 8px 32px 0 rgba(0, 0, 0, 0.4)',
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
        'arcade-grid': 'linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px)',
      }
    },
  },
  plugins: [],
}
