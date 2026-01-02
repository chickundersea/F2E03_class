import { fn } from 'storybook/test';
import ActionButton from '../components/ActionButton.vue';

export default {
  title: 'Example/ActionButton',
  component: ActionButton,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    onClick: { action: 'clicked' },
  },
  args: { onClick: fn() },
};

export const Default = {
  args: {
    label: '報名',
  },
};