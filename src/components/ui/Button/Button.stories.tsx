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
      options: ['inherit', 'primary', 'secondary'] as ButtonProps<typeof Button>['color'][],
    },
    fullWidth: {
      control: 'boolean',
      defaultValue: false,
    },
    disabled: {
      control: 'boolean',
    }
  },
  parameters: {}
} as Meta<typeof Button>;

export const Basic = (args: typeof Button) => {
  return (
    <Stack spacing={3} justify="center">
      <Button variant="text" {...args}>
        Text
      </Button>
      <Button variant="contained" {...args}>
        Contained
      </Button>
      <Button variant="outlined" {...args}>
        Outlined
      </Button>
    </Stack>
  );
};

export const Text = (args: typeof Button) => {
  return (
    <BrowserRouter>
      <Stack spacing={3} align="center" justify="center">
        <Button variant="text" {...args}>
          Basic
        </Button>
        <Button variant="text" disabled {...args}>
          Disabled
        </Button>
        <Button variant="text" component={Link} to="/" {...args}>
          Link
        </Button>
      </Stack>
    </BrowserRouter>
  );
};

export const Contained = (args: typeof Button) => {
  return (
    <BrowserRouter>
      <Stack spacing={3} align="center" justify="center">
        <Button variant="contained" {...args}>
          Basic
        </Button>
        <Button variant="contained" disabled {...args}>
          Disabled
        </Button>
        <Button variant="contained" component={Link} to="/" {...args}>
          Link
        </Button>
      </Stack>
    </BrowserRouter>
  );
};

export const Outlined = (args: typeof Button) => {
  return (
    <BrowserRouter>
      <Stack spacing={3} align="center" justify="center">
        <Button variant="outlined" {...args}>
          Basic
        </Button>
        <Button variant="outlined" disabled {...args}>
          Disabled
        </Button>
        <Button variant="outlined" component={Link} to="/" {...args}>
          Link
        </Button>
      </Stack>
    </BrowserRouter>
  );
};

export const Size = (args: typeof Button) => {
  return (
    <Stack spacing={3} direction="column" justify="center">
      <Stack spacing={3} align="center" justify="center">
        <Button variant="text" size="small" {...args}>
          Small
        </Button>
        <Button variant="text" size="medium" {...args}>
          Medium
        </Button>
        <Button variant="text" size="large" {...args}>
          Large
        </Button>
      </Stack>
      <Stack spacing={3} align="center" justify="center">
        <Button variant="contained" size="small" {...args}>
          Small
        </Button>
        <Button variant="contained" size="medium" {...args}>
          Medium
        </Button>
        <Button variant="contained" size="large" {...args}>
          Large
        </Button>
      </Stack>
      <Stack spacing={3} align="center" justify="center">
        <Button variant="outlined" size="small" {...args}>
          Small
        </Button>
        <Button variant="outlined" size="medium" {...args}>
          Medium
        </Button>
        <Button variant="outlined" size="large" {...args}>
          Large
        </Button>
      </Stack>
    </Stack>
  );
};

export const Color = (args: typeof Button) => {
  return (
    <Stack spacing={3} justify="center">
      <Button variant="contained" color="inherit" {...args}>
        Default
      </Button>
      <Button variant="contained" color="primary" {...args}>
        Primary
      </Button>
      <Button variant="contained" color="secondary" {...args}>
        Secondary
      </Button>
    </Stack>
  );
};

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
  );
};

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
  );
};

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
  );
};
