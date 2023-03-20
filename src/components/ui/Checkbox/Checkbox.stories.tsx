import { ComponentMeta, ComponentStory } from '@storybook/react';
import Checkbox, { CheckboxProps } from './Checkbox';
import { ReactComponent as BookmarkIcon } from '../../../assets/icons/bookmark.svg';
import { ReactComponent as BookmarkFilledIcon } from '../../../assets/icons/bookmark-filled.svg';
import Stack from '../Stack';

export default {
  title: 'Components/UI/Checkbox',
  component: Checkbox,
  argTypes: {
    label: {
      control: {
        type: 'text'
      },
    }
  }
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  defaultChecked: true
};

export const WithCustomIcon = Template.bind({});
WithCustomIcon.args = {
  icon: BookmarkIcon,
  checkedIcon: BookmarkFilledIcon,
};

export const Placements = (args: CheckboxProps) => (
  <Stack spacing={4} justify="center">
    <Checkbox label="Top" labelPlacement="top" {...args} />
    <Checkbox label="Start" labelPlacement="start" {...args} />
    <Checkbox label="Bottom" labelPlacement="bottom" {...args} />
    <Checkbox label="End" labelPlacement="end" {...args} />
  </Stack>
)

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Disabled',
  disabled: true,
  defaultChecked: true,
};
