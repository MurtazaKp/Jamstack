import 'tailwindcss/tailwind.css';
import "../styles/globals.css"
import TextCenter from '../components/CTA/textCenter';
import TextLeft from '../components/CTA/textLeft';


export default {
  title: 'Cta/TextCenter',
  component : TextCenter,
  argTypes: {
    heading: { control: 'text' },
    button : {control : 'text'},
    backgroundColor: { control: 'color' }, // Add background color control
    buttonColor: { control: 'color' }, // Add background color control to button
    textColor: { control: 'color' }, // Add text color control
    buttonTextColor: { control: 'color' }, // Add text color control
    }
};

const Template = (args) => <TextCenter {...args} />;

export const Default = Template.bind({});
Default.args = {
  heading: "Excited to switch on modern technology?",
  button : "Connect Today",
  backgroundColor: '#FFFFFF', // Set default background color
  textColor: '#000000', // Set default text color
  buttonColor : "#F0027F",
  buttonTextColor: '#000000',
};

