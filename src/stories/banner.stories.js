
import 'tailwindcss/tailwind.css';
import "../styles/globals.css"
import ImageLeft from '../components/Banner/imageLeft';
import ImageBottom from '../components/Banner/ImageBottom'
import BottomNoButton from '..//components/Banner/bottomNoButton';


export default {
    title: 'Components/Banner',
   
  };
  
  export const Image_Left = () => < ImageLeft />;


  export const Image_Bottom = () => < ImageBottom />;

  
  
  export const Image_Bottom_NoButton = () => < BottomNoButton />;