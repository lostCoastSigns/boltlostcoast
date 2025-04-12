/** @type {import('tailwindcss').Config} */
export default {
  // Add safelist for dynamic service colors if needed, or ensure they are generated
  safelist: [
    { pattern: /bg-(purple|pink|yellow|green|blue|orange|teal|lime|emerald)-(100|600)/ },
    { pattern: /text-(purple|pink|yellow|green|blue|orange|teal|lime|emerald)-600/ },
    { pattern: /group-hover:bg-(purple|pink|yellow|green|blue|orange|teal|lime|emerald)-600/ },
    { pattern: /group-hover:text-white/ },
    // Add orange/yellow for the new theme
    { pattern: /bg-gradient-to-r from-orange-400 to-yellow-400/ },
    { pattern: /bg-orange-500/ },
    { pattern: /hover:bg-orange-600/ },
    { pattern: /text-orange-600/ },
    { pattern: /border-orange-500/ },
    { pattern: /ring-orange-500/ },
  ],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', 'system-ui', 'sans-serif'],
      },
      colors: {
        'cali-orange': '#F97316', // Example orange
        'cali-yellow': '#FACC15', // Example yellow
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
