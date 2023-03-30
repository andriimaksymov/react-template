import { ComponentMeta } from '@storybook/react';

import Input, { InputProps } from './Input';
import Stack from '../Stack';

export default {
  title: 'Components/UI/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

export const Basic = (args: InputProps) => (
  <Stack spacing={3} justify="center" align="center">
    <Input variant="outlined" placeholder="Outlined" {...args} />
    <Input variant="contained" placeholder="Contained" {...args} />
    <Input variant="underline" placeholder="Underline" {...args} />
  </Stack>
);

export const Error = (args: InputProps) => (
  <Stack spacing={3} justify="center" align="center">
    <Input hasError variant="outlined" placeholder="Outlined" {...args} />
    <Input hasError variant="contained" placeholder="Contained" {...args} />
    <Input hasError variant="underline" placeholder="Underline" {...args} />
  </Stack>
);

export const Disabled = (args: InputProps) => (
  <Stack spacing={3} justify="center" align="center">
    <Input disabled variant="outlined" placeholder="Outlined" {...args} />
    <Input disabled variant="contained" placeholder="Contained" {...args} />
    <Input disabled variant="underline" placeholder="Underline" {...args} />
  </Stack>
);
