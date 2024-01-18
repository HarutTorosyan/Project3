/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        pop: ["Poppins", "sans-serif"],
        rob: ["Roboto", "sans-serif"],
      },
      colors: {
        "main-purple": "#FD4766",
        "main-gradient": "from",
        "gradient-end": "#1C99FE",
        "gradient-mid": "#7644FF",
        darkqs: "#1B1212",
      },
      backgroundImage: {
        blackimg: "url('../src/assets/img/black-bg.jpg')",
        galleryImg1: "url('../src/assets/img/div.tpproject-1-thumbnail.jpg')",
        galleryImg2: "url('../src/assets/img/div.tpproject-2-thumbnail.jpg')",
        galleryImg3: "url('../src/assets/img/div.tpproject-3-thumbnail.jpg')",
        galleryImg4: "url('../src/assets/img/div.tpproject-4-thumbnail.jpg')",
        galleryImg5: "url('../src/assets/img/div.tpproject-5-thumbnail.jpg')",
        galleryImg6: "url('../src/assets/img/div.tpproject-6-thumbnail.jpg')",
        author1: "url('../src/assets/img/author1.jpg.jpg')",
        author2: "url('../src/assets/img/author2.jpg.jpg')",
        author3: "url('../src/assets/img/author3.jpg.jpg')",
        author4: "url('../src/assets/img/author4.jpg.jpg')",
        author5: "url('../src/assets/img/author5.jpg.jpg')",
        author6: "url('../src/assets/img/author6.jpg.jpg')",
        blog1: "url('../src/assets/img/div.blog-thumb.jpg')",
        blog2: "url('../src/assets/img/div.blog-thumb2.jpg')",
        blog3: "url('../src/assets/img/div.blog-thumb3.jpg')",
      },
    },
  },
  plugins: [],
};

// #1C99FE, #7644FF, #FD4766
