module.exports = {
  content: ['./src/**/*.{njk,md}'],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#69c120",                 
          "secondary": "#c141fc",                 
          "accent": "#5deaab",                 
          "neutral": "#271A2E",                  
          "base-100": "#2B3A5F",                
          "info": "#5D85E9",                
          "success": "#64E8BE",                
          "warning": "#936110",                
          "error": "#F86863",
        },
      },
    ],
  },
  plugins: [require('daisyui'), require('@tailwindcss/typography')],
};
