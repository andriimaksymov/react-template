import { ComponentMeta, ComponentStory } from '@storybook/react';

import Switch, { SwitchLabelPlacement, SwitchSize } from './Switch';
import { ReactNode } from 'react';

export default {
  title: 'Components/UI/Switch',
  component: Switch,
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

function createStory(
  size: SwitchSize,
  label?: ReactNode,
  labelPlacement?: SwitchLabelPlacement
) {
  const story = Template.bind({});
  story.args = {
    size,
    label,
    labelPlacement
  };
  return story;
}

export const Small = createStory('small');
export const Medium = createStory('medium');
export const Large = createStory('large');
export const LabelPlacementStart = createStory('medium', 'Start', 'start');
export const LabelPlacementTop = createStory('medium', 'Top', 'top');
export const LabelPlacementBottom = createStory('medium', 'Bottom', 'bottom');
export const LabelPlacementEnd = createStory('medium', 'End', 'end');
