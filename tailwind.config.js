/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        gradientStart: "#373E44",
        gradientEnd: "#191B1F",
        customBg: "#363C43",
        tabBarBg: "#171717",
        tabTextColor: "#A3ADB2",
        contentTextColor: "#969696",
        arrowColor: "#6F787C",
        "active-btn": "#28292F",
        "white-3": "rgba(255, 255, 255, 0.03)",
        "button-gradient": "linear-gradient(to bottom right, #303439, #161718)",
        "line-custom": "linear-gradient(to right, #282828, #F8F8F8)",
      },
      fontFamily: {
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        "custom-dark": "rgba(0, 0, 0, 0.33) 0px 4px 4px 0px",
        custom: "4px 4px 6px 0 rgba(0, 0, 0, 0.5)",
        combined: `
          rgba(255, 255, 255, 0.25) -0.5px -0.5px 6.9px 0px,
          rgba(0, 0, 0, 0.40) 9px 10px 7.1px 0px,
          rgba(255, 255, 255, 0.05) 0px 0px 48.91px,
          rgba(255, 255, 255, 0.15) 0px 3.26px 3.26px
        `,
        combined2: `
          rgba(150, 190, 231, 1) -5px -3px 30px -10px,
          rgba(16, 18, 19, 1) 4px 5px 30px 5px
        `,
        combined3: `
          rgba(72, 91, 113, 1) -8.43px -16.87px 50.6px -16.87px,
          rgba(10, 10, 10, 1) 13.49px 16.87px 67.47px 8.43px
        `,
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
