import 'tailwindcss/tailwind.css';
import "../styles/globals.css"
import ImageLeft from '../components/Banner/ImageLeft';


export default {
    title: 'Banner/ImageLeft',
    component: ImageLeft,
    argTypes: {
      heading: { control: 'text' },
      video: { control: 'text' },
      backgroundColor: { control: 'color' }, // Add background color control
      textColor: { control: 'color' }, // Add text color control
    }
  };
  
  const Template = (args) => <ImageLeft {...args} />;
  
  export const Default = Template.bind({});
  Default.args = {
    heading: 'The ecosystem for building digital presence',
    backgroundColor: '#FFFFFF', // Set default background color
    textColor: '#000000', // Set default text color
    video : "https://github.com/MurtazaKp/Jamstack/blob/main/public/images/banner.png?raw=true",
  };
  

