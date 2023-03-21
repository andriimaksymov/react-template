import { ComponentMeta } from '@storybook/react';
import Checkbox, { CheckboxProps } from './Checkbox';

import { ReactComponent as BookmarkIcon } from '../../../assets/icons/bookmark.svg';
import { ReactComponent as BookmarkFilledIcon } from '../../../assets/icons/bookmark-filled.svg';
import { ReactComponent as HeartIcon } from '../../../assets/icons/heart.svg';
import { ReactComponent as HeartFilledIcon } from '../../../assets/icons/heart-filled.svg';

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

export const Basic = (args: CheckboxProps) => (
  <Stack justify="center" spacing={1}>
    <Checkbox {...args} defaultChecked />
    <Checkbox {...args} />
    <Checkbox {...args} disabled />
    <Checkbox {...args} disabled checked />
  </Stack>
)

export const Label = (args: CheckboxProps) => (
  <Stack justify="center">
    <Stack spacing={1} direction="column">
      <Checkbox defaultChecked label="Label" {...args} />
      <Checkbox label="Disabled" disabled {...args} />
    </Stack>
  </Stack>
)

export const LabelPlacement = (args: CheckboxProps) => (
  <Stack spacing={4} justify="center">
    <Checkbox label="Top" labelPlacement="top" {...args} />
    <Checkbox label="Start" labelPlacement="start" {...args} />
    <Checkbox label="Bottom" labelPlacement="bottom" {...args} />
    <Checkbox label="End" labelPlacement="end" {...args} />
  </Stack>
)

export const Icons = (args: CheckboxProps) => (
  <Stack spacing={2} justify="center">
    <Checkbox
      icon={BookmarkIcon}
      checkedIcon={BookmarkFilledIcon}
      {...args}
    />
    <Checkbox
      icon={HeartIcon}
      checkedIcon={HeartFilledIcon}
      {...args}
    />
  </Stack>
)