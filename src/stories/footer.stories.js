import Footer from '../components/footer';
import 'tailwindcss/tailwind.css';


export default {
    title: 'jamStack/Footer',
    component: Footer,
    argTypes: {
      heading: { control: 'text' },
      backgroundColor: { control: 'color' }, // Add background color control
      textColor: { control: 'color' }, // Add text color control
      iconColor : {control : 'color'},
      servicetext : {control : 'color'}
      }
  };
  
  const Template = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {
  heading: "Jamstack+",
  backgroundColor: '#FFFFFF', // Set default background color
  textColor: '##F0027F', // Set default text color
  iconColor: '#000000', // Set default text color
  servicetext: '#000000', // Set default text color
  
};
  