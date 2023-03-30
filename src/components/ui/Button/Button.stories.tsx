import React from 'react';
import { Meta } from '@storybook/react';
import { BrowserRouter, Link } from 'react-router-dom';

import { ReactComponent as PlusIcon } from '../../../assets/icons/plus.svg';

import Button, { ButtonProps } from './Button';
import Stack from '../Stack';

export default {
  title: 'Components/UI/Button',
  component: Button,
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'] as ButtonProps<typeof Button>['size'][],
    },
    variant: {
      control: 'select',
      options: ['text', 'outlined', 'contained'] as ButtonProps<typeof Button>['variant'][],
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary'] as ButtonProps<typeof Button>['color'][],
    },
    fullWidth: {
      control: 'boolean',
      defaultValue: false,
    },
    disabled: {
      control: 'boolean',
    }
  },
  parameters: {

  }
} as Meta<typeof Button>;

export const Basic = (args: typeof Button) => {
  return (
    <Stack spacing={3} justify="center">
      <Button variant="text" color="primary" {...args}>
        Text
      </Button>
      <Button variant="contained" color="primary" {...args}>
        Contained
      </Button>
      <Button variant="outlined" color="primary" {...args}>
        Outlined
      </Button>
    </Stack>
  )
}

export const Size = (args: typeof Button) => {
  return (
    <Stack spacing={3} align="center" justify="center">
      <Button variant="contained" color="primary" size="small" {...args}>
        Small
      </Button>
      <Button variant="contained" color="primary" size="medium" {...args}>
        Medium
      </Button>
      <Button variant="contained" color="primary" size="large" {...args}>
        Large
      </Button>
    </Stack>
  )
}

export const Color = (args: typeof Button) => {
  return (
    <Stack spacing={3} justify="center">
      <Button variant="contained" color="default" {...args}>
        Default
      </Button>
      <Button variant="contained" color="primary" {...args}>
        Primary
      </Button>
      <Button variant="contained" color="secondary" {...args}>
        Secondary
      </Button>
    </Stack>
  )
}

export const Links = (args: typeof Button) => {
  return (
    <BrowserRouter>
      <Stack spacing={3} justify="center">
        <Button component={Link} to="/" variant="text" color="default" {...args}>
          Default Button
        </Button>
        <Button component={Link} to="/" variant="contained" color="primary" {...args}>
          Primary Button
        </Button>
        <Button component={Link} to="/" variant="outlined" color="secondary" {...args}>
          Secondary Button
        </Button>
      </Stack>
    </BrowserRouter>
  )
}

export const Disabled = (args: typeof Button) => {
  return (
    <Stack spacing={3} justify="center">
      <Button variant="text" color="default" disabled {...args}>
        Default Button
      </Button>
      <Button variant="contained" color="primary" disabled {...args}>
        Primary Button
      </Button>
      <Button variant="outlined" color="secondary" disabled {...args}>
        Secondary Button
      </Button>
    </Stack>
  )
}


export const IconStart = (args: typeof Button) => {
  return (
    <Stack spacing={3} justify="center">
      <Button startIcon={PlusIcon} variant="text" color="primary" {...args}>
        Text
      </Button>
      <Button startIcon={PlusIcon} variant="contained" color="primary" {...args}>
        Contained
      </Button>
      <Button startIcon={PlusIcon} variant="outlined" color="primary" {...args}>
        Outlined
      </Button>
    </Stack>
  )
}

export const IconEnd = (args: typeof Button) => {
  return (
    <Stack spacing={3} justify="center">
      <Button endIcon={PlusIcon} variant="text" color="primary" {...args}>
        Text
      </Button>
      <Button endIcon={PlusIcon} variant="contained" color="primary" {...args}>
        Contained
      </Button>
      <Button endIcon={PlusIcon} variant="outlined" color="primary" {...args}>
        Outlined
      </Button>
    </Stack>
  )
}

export const FullWidth = (args: typeof Button) => {
  return (
    <Stack spacing={2} justify="center" direction="column">
      <Button fullWidth variant="text" color="primary" {...args}>
        Text
      </Button>
      <Button fullWidth variant="contained" color="primary" {...args}>
        Contained
      </Button>
      <Button fullWidth variant="outlined" color="primary" {...args}>
        Outlined
      </Button>
    </Stack>
  )
}
