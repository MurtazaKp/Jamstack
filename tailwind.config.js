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
    extend:{
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'primary': "#e002a2",
        'accent1':"#4767F6",
        'accent2':"#ff5223",
        'white':"#ffffff",
        'cust-grey':{
          100:"#f1f2f6",
          200:"#d1d5E5"
        },
    
      
      
    
      

      
      },
        
      fontSize: {
        'body': ['20px', { lineHeight: '1.5rem' }],
        'h1': ['3.6rem', { lineHeight: '5.125rem' }],
        'h2': ['3rem', { lineHeight: '5.125rem' }],
        'h3': ['2.6rem', { lineHeight: '1' }],
        'h4': ['2rem', { lineHeight: '1' }],
        'h5': ['1.6rem', { lineHeight: '1' }],
        'btn': ['1.2rem', { lineHeight: '1' }],
        






      },

      fontFamily:{
        "neo":"Neo Sans Pro",
        "inter":"Inter",
        

        
      },

  },

   
    plugins: [
      require('./node_modules/flowbite/plugin')
  ],
  
},
}
