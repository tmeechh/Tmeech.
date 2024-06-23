/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'xs': '300px',    // Custom extra small breakpoint
      'sm': '650px',    // Customized small breakpoint
      'md': '768px',
      'mds': '900px',// Medium breakpoint
      'lg': '1024px',   // Large breakpoint
      'xl': '1280px',   // Extra large breakpoint
      '2xl': '1536px',  // 2X large breakpoint
    },
  },
  plugins: [],
}

