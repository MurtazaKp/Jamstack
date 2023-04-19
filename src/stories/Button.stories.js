import { Button } from './Button'; 

// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
export default {
  title: 'JamStack/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary = {
  args: {
    primary: true,
    label: 'Start A Project',
  },
};

export const Secondary = {
  args: {
    label: 'Start A Project',
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'Start A Project',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Start A Project',
  },
};
