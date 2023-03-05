import { ComponentMeta, ComponentStory } from '@storybook/react';

import Switch, { SwitchSize } from './Switch';

export default {
  title: 'Components/UI/Switch',
  component: Switch,
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

function createStory(
  size: SwitchSize
) {
  const story = Template.bind({});
  story.args = {
    size
  };
  return story;
}

export const Small = createStory('small');
export const Medium = createStory('medium');
export const Large = createStory('large');
