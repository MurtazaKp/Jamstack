import ImageBottom from '../components/Banner/ImageBottom'
import 'tailwindcss/tailwind.css';
import "../styles/globals.css"

export default {
    title: 'Banner/ImageBottom',
    component: ImageBottom,
    argTypes: {
    heading: { control: 'text' },
    backgroundColor: { control: 'color' }, // Add background color control
    textColor: { control: 'color' }, // Add text color control
    video: { control: 'text' },

    }
  };
  
  const Template = (args) => <ImageBottom {...args} />;
  
  export const Default = Template.bind({});
  Default.args = {
    heading: "Let’s boost your business with powerful ecosystem by Jamstack+.",
    backgroundColor: '#FFFFFF', // Set default background color
    textColor: '#000000', // Set default text color
    video : 'https://github.com/MurtazaKp/Jamstack/blob/main/public/images/Jamstac.png?raw=true',
  };
