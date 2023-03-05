import { Meta, Story } from '@storybook/react';
import { ReactNode } from 'react';
import Typography, { TypographyVariant, TypographyWeight } from './Typography';

export default {
  title: 'Components/UI/Typography',
  component: Typography
} as Meta<typeof Typography>;

const Template: Story<typeof Typography> = (args) => <Typography {...args} />;

function createStory(
  children: ReactNode,
  variant: TypographyVariant,
  weight?: TypographyWeight,
) {
  const story = Template.bind({});
  story.args = {
    children,
    variant,
    weight,
  };

  return story;
}

export const H1 = createStory('h1. Heading', 'h1');
export const H2 = createStory('h2. Heading', 'h2');
export const H3 = createStory('h3. Heading', 'h3');
export const H4 = createStory('h4. Heading', 'h4');
export const H5 = createStory('h5. Heading', 'h5');
export const H6 = createStory('h6. Heading', 'h6');

export const WeightNormal = createStory('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur', 'body1', 'normal');
export const WeightMedium = createStory('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur', 'body1', 'medium');
export const WeightSemiBold = createStory('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur', 'body1', 'semiBold');
export const WeightBold = createStory('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur', 'body1', 'bold');
