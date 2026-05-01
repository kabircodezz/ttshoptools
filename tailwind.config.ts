import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        brand: {
          accent: 'rgb(var(--brand-accent) / <alpha-value>)',
          'accent-light': 'rgb(var(--brand-accent-light) / <alpha-value>)',
          'accent-text': 'rgb(var(--brand-accent-text) / <alpha-value>)',
          'accent-dark': 'rgb(var(--brand-accent-dark) / <alpha-value>)',
          'accent-deep': 'rgb(var(--brand-accent-deep) / <alpha-value>)',
          'accent-border': 'rgb(var(--brand-accent-border) / <alpha-value>)',
          coral: 'rgb(var(--brand-coral) / <alpha-value>)',
          'coral-light': 'rgb(var(--brand-coral-light) / <alpha-value>)',
          'coral-dark': 'rgb(var(--brand-coral-dark) / <alpha-value>)',
          leaf: 'rgb(var(--brand-leaf) / <alpha-value>)',
          'leaf-light': 'rgb(var(--brand-leaf-light) / <alpha-value>)',
          'leaf-dark': 'rgb(var(--brand-leaf-dark) / <alpha-value>)',
          'leaf-text': 'rgb(var(--brand-leaf-text) / <alpha-value>)',
          'leaf-border': 'rgb(var(--brand-leaf-border) / <alpha-value>)',
          bg: 'rgb(var(--brand-bg) / <alpha-value>)',
          'bg-secondary': 'rgb(var(--brand-bg-secondary) / <alpha-value>)',
          surface: 'rgb(var(--brand-surface) / <alpha-value>)',
          'surface-dark': 'rgb(var(--brand-surface-dark) / <alpha-value>)',
          'surface-darker': 'rgb(var(--brand-surface-darker) / <alpha-value>)',
          border: 'rgb(var(--brand-border) / <alpha-value>)',
          'border-strong': 'rgb(var(--brand-border-strong) / <alpha-value>)',
          'text-primary': 'rgb(var(--brand-text-primary) / <alpha-value>)',
          'text-secondary': 'rgb(var(--brand-text-secondary) / <alpha-value>)',
          'text-muted': 'rgb(var(--brand-text-muted) / <alpha-value>)',
          'text-on-dark': 'rgb(var(--brand-text-on-dark) / <alpha-value>)',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        lg: '0.75rem',
        xl: '1rem',
        '2xl': '1.25rem',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config
