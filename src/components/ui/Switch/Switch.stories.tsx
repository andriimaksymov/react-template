import { ComponentMeta } from '@storybook/react';

import Stack from '../Stack';
import Switch, { SwitchProps } from './Switch';

export default {
  title: 'Components/UI/Switch',
  component: Switch,
} as ComponentMeta<typeof Switch>;

export const Basic = (args: SwitchProps) => (
  <Stack spacing={2} justify="center">
    <Switch checked {...args} />
    <Switch {...args} />
    <Switch checked disabled {...args} />
    <Switch disabled {...args} />
  </Stack>
);

export const Size = (args: SwitchProps) => (
  <Stack spacing={2} justify="center">
    <Switch size="small" {...args} />
    <Switch size="medium" {...args} />
    <Switch size="large" {...args} />
  </Stack>
);

export const LabelPlacement = (args: SwitchProps) => (
  <Stack spacing={4} justify="center">
    <Switch label="Top" labelPlacement="top" {...args} />
    <Switch label="Start" labelPlacement="start" {...args} />
    <Switch label="Bottom" labelPlacement="bottom" {...args} />
    <Switch label="End" labelPlacement="end" {...args} />
  </Stack>
)