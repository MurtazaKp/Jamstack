/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],



  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'primary': "#e002a2",
      'accent1':"#4767F6",
      'accent2':"#ff5223",
      'cust-grey':{
        100:"#f1f2f6",
        200:"#d1d5E5"
      },
   
    
    
  
    

    
    },
       
    fontSize: {
      'body': ['20px', { lineHeight: '1.5rem' }],
      'h1': ['4.62rem', { lineHeight: '5.125rem' }],
      'h2': ['4rem', { lineHeight: '5.125rem' }],
      'h3': ['3.25rem', { lineHeight: '1' }],
      'h4': ['2.5rem', { lineHeight: '1' }],
      'btn': ['2rem', { lineHeight: '2.56rem' }],
      






    },

    fontFamily:{
      "neo":"Neo Sans Pro",
      "inter":"Inter",
      

      
    },

  

   
    plugins: [
      require('./node_modules/flowbite/plugin')
  ],
},
}
