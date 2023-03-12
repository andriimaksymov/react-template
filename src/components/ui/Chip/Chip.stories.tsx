import { ComponentMeta, ComponentStory } from '@storybook/react';

import Chip from './Chip';
import Stack from '../Stack';

import { ReactComponent as DeleteIcon } from '../../../assets/icons/delete.svg';

export default {
  title: 'Components/UI/Chip',
  component: Chip,
  argTypes: {
    onDelete: {
      defaultValue: null
    },
    onClick: {
      defaultValue: null
    },
  }
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default Chip'
};

export const Variants = (args: typeof Chip) => (
  <Stack spacing={2}>
    <Chip variant="contained" {...args}>Contained</Chip>
    <Chip variant="outlined" {...args}>Outlined</Chip>
  </Stack>
);

export const Colors = (args: typeof Chip) => (
  <Stack spacing={2}>
    <Chip color="primary" variant="contained" {...args}>Primary</Chip>
    <Chip color="secondary" variant="contained" {...args}>Secondary</Chip>
  </Stack>
);

export const Round = Template.bind({});
Round.args = {
  children: 'Round',
  round: true,
};

export const Clickable = Template.bind({});
Clickable.args = {
  children: 'Clickable',
  onClick: () => alert('Message'),
};

export const WithDeleteButton = Template.bind({});
WithDeleteButton.args = {
  children: 'With Delete Button',
  onClick: () => alert('Click'),
  onDelete: () => alert('Delete'),
};

export const WithCustomDeleteIcon = Template.bind({});
WithCustomDeleteIcon.args = {
  children: 'With Delete Button',
  deleteIcon: DeleteIcon,
  onClick: () => alert('Click'),
  onDelete: () => alert('Delete'),
};