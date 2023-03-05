import React, { ElementType } from 'react';
import { Meta, Story } from '@storybook/react';
import { ReactComponent as PlusIcon } from '../../../assets/icons/plus.svg';

import Button, { ButtonSize, ButtonColor, ButtonVariant } from './Button';

export default {
  title: 'Components/UI/Button',
  component: Button,
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

export const TextDefault = createStory('text', 'medium', 'default');
export const TextPrimary = createStory('text', 'medium', 'primary');
export const TextSecondary = createStory('text', 'medium', 'secondary');

export const ContainedDefault = createStory('contained', 'medium', 'default');
export const ContainedPrimary = createStory('contained', 'medium', 'primary');
export const ContainedSecondary = createStory('contained', 'medium', 'secondary');

export const OutlinedDefault = createStory('outlined', 'medium', 'default');
export const OutlinedPrimary = createStory('outlined', 'medium', 'primary');
export const OutlinedSecondary = createStory('outlined', 'medium', 'secondary');

export const SizeSmall = createStory('contained', 'small', 'default');
export const SizeMedium = createStory('contained', 'medium', 'default');
export const SizeLarge = createStory('contained', 'large', 'default');

export const StartIcon = createStory('contained', 'medium', 'default', false, PlusIcon);
export const EndIcon = createStory('contained', 'medium', 'default', false, undefined, PlusIcon);

export const Disabled = createStory('contained', 'medium', 'primary', true);
export const FullWidth = createStory('contained', 'medium', 'primary', false, undefined, undefined, true);
