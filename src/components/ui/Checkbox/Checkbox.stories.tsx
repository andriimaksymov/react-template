import { ComponentMeta, ComponentStory } from '@storybook/react';
import Checkbox from './Checkbox';
import {ReactComponent as BookmarkIcon} from '../../../assets/icons/bookmark.svg';
import {ReactComponent as BookmarkFilledIcon} from '../../../assets/icons/bookmark-filled.svg';

export default {
  title: 'Components/UI/Checkbox',
  component: Checkbox,
  argTypes: {
    label: {
      control: {
        type: 'text'
      },
      defaultValue: ''
    }
  }
} as ComponentMeta<typeof  Checkbox>

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />

export const Default = Template.bind({});
Default.args = {
  defaultChecked: true
}

export const CustomIcon = Template.bind({});
CustomIcon.args = {
  icon: BookmarkIcon,
  checkedIcon: BookmarkFilledIcon,
}

export const LabelPlacementStart = Template.bind({});
LabelPlacementStart.args = {
  label: 'Checkbox label',
  labelPlacement: 'start'
}

export const LabelPlacementEnd = Template.bind({});
LabelPlacementEnd.args = {
  label: 'Checkbox label',
  labelPlacement: 'end'
}
