import React, { ElementType } from 'react';
import { Meta, Story } from '@storybook/react';
import { ReactComponent as PlusIcon } from '../../../assets/icons/plus.svg';

import Button, { ButtonSize, ButtonColor, ButtonVariant } from './Button';
import Stack from '../Stack';

export default {
  title: 'Components/UI/Button',
  component: Button,
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'] as ButtonSize[],
    },
    variant: {
      control: 'select',
      options: ['text', 'outlined', 'contained'] as ButtonVariant[],
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary'] as ButtonColor[],
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

const Template: Story<typeof Button> = (args) => <Button {...args} />;

function createStory(
  variant: ButtonVariant,
  size: ButtonSize,
  color: ButtonColor,
  disabled?: boolean,
  startIcon?: ElementType,
  endIcon?: ElementType,
  fullWidth?: boolean,
) {
  const story = Template.bind({});
  story.args = {
    variant,
    size,
    color,
    disabled,
    startIcon,
    endIcon,
    fullWidth,
    children: 'Button'
  };
  return story;
}

export const Variants = (args: typeof Button) => {
  return (
    <Stack spacing={3} align="center">
      <Button variant="text" color="primary" {...args}>
        Text Button
      </Button>
      <Button variant="contained" color="primary" {...args}>
        Contained Button
      </Button>
      <Button variant="outlined" color="primary" {...args}>
        Outlined Button
      </Button>
    </Stack>
  )
}

export const Sizes = (args: typeof Button) => {
  return (
    <Stack spacing={3} align="center">
      <Button variant="contained" color="primary" size="small" {...args}>
        Small Button
      </Button>
      <Button variant="contained" color="primary" size="medium" {...args}>
        Medium Button
      </Button>
      <Button variant="contained" color="primary" size="large" {...args}>
        Large Button
      </Button>
    </Stack>
  )
}

export const Colors = (args: typeof Button) => {
  return (
    <Stack spacing={3} align="center">
      <Button variant="contained" color="default" {...args}>
        Default Button
      </Button>
      <Button variant="contained" color="primary" {...args}>
        Primary Button
      </Button>
      <Button variant="contained" color="secondary" {...args}>
        Secondary Button
      </Button>
    </Stack>
  )
}

export const Disabled = (args: typeof Button) => {
  return (
    <Stack spacing={3} align="center">
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

export const StartIcon = createStory('contained', 'medium', 'default', false, PlusIcon);
export const EndIcon = createStory('contained', 'medium', 'default', false, undefined, PlusIcon);

// export const Disabled = createStory('contained', 'medium', 'primary', true);
export const FullWidth = createStory('contained', 'medium', 'primary', false, undefined, undefined, true);
