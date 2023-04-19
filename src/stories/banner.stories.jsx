
import 'tailwindcss/tailwind.css';
import "../styles/globals.css"
import BottomNoButtonImageLeft from '../components/Banner/bottomNoButton';


export default {
  title: 'Banner/BottomNoButton',
  component: BottomNoButtonImageLeft,
  argTypes: {
    heading: { control: 'text' },
    description: { control: 'text' },
    video: { control: 'text' },
    backgroundColor: { control: 'color' }, // Add background color control
    textColor: { control: 'color' }, // Add text color control
    descriptionText: { control: 'color' }, // Add text color control
  }
};

const Template = (args) => <BottomNoButtonImageLeft {...args} />;

export const Default = Template.bind({});
Default.args = {
  heading: 'What is JAM Stack?',
  description:'Modern architecture gives the approach of building everything on the web from apps to websites based on Javascript, ApIs and Markup(JAM).',
  backgroundColor: '#FFFFFF', // Set default background color
  textColor: '#000000', // Set default text color
  descriptionText: '#000000', // Set default text color
  video : 'https://github.com/MurtazaKp/Jamstack/blob/main/public/images/Jamstac.png?raw=true',

};
