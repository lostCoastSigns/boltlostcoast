/** @type {import('tailwindcss').Config} */
export default {
  // Add safelist for dynamic service colors if needed, or ensure they are generated
  safelist: [
    { pattern: /bg-(purple|pink|yellow|green|blue|orange|teal|lime|emerald)-(100|600)/ },
    { pattern: /text-(purple|pink|yellow|green|blue|orange|teal|lime|emerald)-600/ },
    { pattern: /group-hover:bg-(purple|pink|yellow|green|blue|orange|teal|lime|emerald)-600/ },
    { pattern: /group-hover:text-white/ },
  ],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', 'system-ui', 'sans-serif'],
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
    },
  },
  plugins: [],
};
