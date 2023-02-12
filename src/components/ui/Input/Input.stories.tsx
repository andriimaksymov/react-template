import { ComponentMeta, ComponentStory } from '@storybook/react';

import Input, { InputVariant } from './Input';

export default {
  title: 'Components/UI/Input',
  component: Input
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} placeholder="Input" />

function createStory(
  variant?: InputVariant
) {
  const story = Template.bind({});
  story.args = {
    variant
  };
  return story;
}

export const InputDefault = createStory();
export const InputOutlined = createStory('outlined');
export const InputContained = createStory('contained');
