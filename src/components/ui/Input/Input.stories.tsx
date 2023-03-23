import { ComponentMeta, ComponentStory } from '@storybook/react';

import Input, { InputVariant } from './Input';

export default {
  title: 'Components/UI/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} placeholder="Input" />;

function createStory(
  variant?: InputVariant,
  hasError?: boolean,
) {
  const story = Template.bind({});
  story.args = {
    variant,
    hasError,
  };
  return story;
}

export const Basic = createStory();
export const Outlined = createStory('outlined');
export const Contained = createStory('contained');
export const Underline = createStory('underline');
export const WithError = createStory('contained', true);
