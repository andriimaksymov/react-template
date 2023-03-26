import { ComponentMeta } from '@storybook/react';

import CircularProgress, { CircularProgressProps } from './CircularProgress';
import Stack from '../Stack';

export default {
  title: 'Components/UI/CircularProgress',
  component: CircularProgress
} as ComponentMeta<typeof CircularProgress>;

export const Basic = (args: CircularProgressProps) => (
  <Stack justify="center">
    <CircularProgress {...args} />
  </Stack>
)

export const Color = (args: CircularProgressProps) => (
  <Stack spacing={2} justify="center">
    <CircularProgress color="primary" {...args} />
    <CircularProgress color="secondary" {...args} />
    <CircularProgress color="inherit" {...args} />
  </Stack>
)

export const WithLabel = (args: CircularProgressProps) => (
  <Stack justify="center">
    <Stack style={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress color="primary" value={40} variant="determinate" {...args} />
      <div
        style={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          fontSize: 13,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        40%
      </div>
    </Stack>
  </Stack>
)