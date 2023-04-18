
import 'tailwindcss/tailwind.css';
import "../styles/globals.css"
import WithoutImage from '../components/Card/withoutImage';
import WithImage from '../components/Card/withImages'
import TestimonialCard from '../components/Card/testimonial-card';


export default {
    title: 'components/Card'
   
  };
  
  export const Without_Image = () => < WithoutImage />;

  export const With_Image = () => < WithImage />;

  export const Testimonial_Card = () => < TestimonialCard />;
