
import Typography from '../components/core/fontsize';
import 'tailwindcss/tailwind.css';
import "../styles/globals.css";


export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Typography',
  component: Typography,
  argTypes: {
   
  },
};
export const Primary = {
  argTypes: {
     fontWeight: {
      options: ['thin', 'extralight', 'light', 'normal', 'medium', 'semibold', 'bold', 'extrabold', 'black'], 
      control: { type: 'select' },
    },
  },
};