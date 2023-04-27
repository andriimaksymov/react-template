import { ComponentMeta, ComponentStory } from '@storybook/react';

import Stack, { StackProps } from './Stack';

export default {
  title: 'Components/UI/Stack',
  component: Stack,
  argTypes: {
    grow: { type: 'boolean' },
    spacing: { type: 'number' },
    children: { type: 'number', defaultValue: 4 }
  }
} as ComponentMeta<typeof Stack>;

const Template: ComponentStory<typeof Stack> = (args) => (
  <Stack {...args}>
    {[...Array.from(Array(args.children).keys())].map((n) => (
      <div key={n} style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        color: '#ffffff',
        backgroundColor: 'blue'
      }}
      >
        {n + 1}
      </div>
    ))}
  </Stack>
);

function createStory(
  direction: StackProps['direction'],
  spacing?: StackProps['spacing'],
  wrap?: StackProps['wrap'],
  childrenCount = 5,
) {
  const story = Template.bind({});
  story.args = {
    direction,
    children: childrenCount,
    spacing,
    wrap
  };
  return story;
}

export const Space1 = createStory('row', 1);
export const Space2 = createStory('row', 2);
export const Space3 = createStory('row', 3);
export const Space4 = createStory('row', 4);
export const SpaceString = createStory('row', '3em');

export const Horizontal = createStory('row', 2);
export const HorizontalReverse = createStory('row-reverse', 2);
export const Vertical = createStory('column', 2);
export const VerticalReverse = createStory('column-reverse', 2);

export const StackWithWrap = createStory('row', 2, 'wrap', 30);
export const StackWithWrapReverse = createStory('row', 2, 'wrap-reverse', 30);
