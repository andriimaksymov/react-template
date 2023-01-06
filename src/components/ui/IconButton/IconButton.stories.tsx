import { Meta, Story } from '@storybook/react';

import IconButton, { IconButtonColor, IconButtonSize } from './IconButton';
import { ReactComponent as PlusIcon } from '../../../assets/icons/plus.svg';

export default {
  title: 'Components/UI/IconButton',
  component: IconButton
} as Meta<typeof IconButton>

const Template: Story<typeof IconButton> = (args) => <IconButton icon={PlusIcon} {...args} />

function createStory(
  size: IconButtonSize,
  color: IconButtonColor,
  round?: boolean,
  disabled?: boolean,
) {
  const story = Template.bind({});
  story.args = {
    size,
    color,
    round,
    disabled,
  };
  return story;
}

export const ColorDefault = createStory('medium', 'default');
export const ColorPrimary = createStory('medium', 'primary');
export const ColorSecondary = createStory('medium', 'secondary');
export const ColorInherit = createStory('medium', 'inherit');

export const Rounded = createStory('medium', 'inherit', true);

export const Disabled = createStory('medium', 'inherit', false, true);
