import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'General/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
  args: {
    mode: 'default',
    type: 'primary',
    content: 'basic',
    size: 'medium',
    shape: 'quadrangle',
    disabled: false,
  },
};

export const Ghost = {
  args: {
    mode: 'ghost',
    type: 'primary',
    content: 'basic',
    size: 'medium',
    shape: 'quadrangle',
    disabled: false,
  },
};

export const Danger = {
  args: {
    mode: 'danger',
    type: 'primary',
    content: 'basic',
    size: 'medium',
    shape: 'quadrangle',
    disabled: false,
  },
};

export const Link = {
  args: {
    mode: 'link',
    type: 'primary',
    content: 'basic',
    size: 'medium',
    shape: 'quadrangle',
    disabled: false,
  },
};