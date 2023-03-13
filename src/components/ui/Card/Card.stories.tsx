import Card, { CardProps } from './Card';
import { ComponentMeta } from '@storybook/react';
import Stack from '../Stack';
import Typography from '../Typography';

export default {
  title: 'Components/UI/Card',
  component: Card,
  argTypes: {
    hasBorder: {
      type: 'boolean',
      defaultValue: false
    },
    className: {
      control: {
        type: 'text',
      }
    }
  }
} as ComponentMeta<typeof Card>;

export const BasicCard = (args: CardProps) => {
  return (
    <Stack direction="column" spacing={3}>
      <Typography component="h1" variant="h4" weight="bold">Basic card</Typography>
      <div
        style={{
          padding: '2.5rem',
          borderRadius: 10,
          backgroundColor: 'rgb(231, 235, 240)'
        }}
      >
        <Card {...args}>
          <Typography>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
            some form, by injected humour, or randomised words which do not look even slightly believable. If you are
            going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as
            necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin
            words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.
            The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic
            words etc.
          </Typography>
        </Card>
      </div>
    </Stack>
  );
};

