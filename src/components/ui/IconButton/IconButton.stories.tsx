import { Meta } from '@storybook/react';

import IconButton from './IconButton';
import Button from '../Button';
import Stack from '../Stack';

import { ReactComponent as PlusIcon } from '../../../assets/icons/plus.svg';

export default {
  title: 'Components/UI/IconButton',
  component: IconButton
} as Meta<typeof IconButton>;

export const Basic = (args: typeof Button) => {
  return (
    <Stack spacing={3} justify="center">
      <IconButton icon={PlusIcon} {...args} />
    </Stack>
  );
};

export const Color = (args: typeof IconButton) => {
  return (
    <Stack spacing={3} justify="center">
      <IconButton color="inherit" icon={PlusIcon} {...args} />
      <IconButton color="primary" icon={PlusIcon} {...args} />
      <IconButton color="secondary" icon={PlusIcon} {...args} />
    </Stack>
  );
};

export const Size = (args: typeof IconButton) => {
  return (
    <Stack spacing={1} direction="column" align="center">
      <Stack spacing={3} justify="center" align="center">
        <IconButton size="small" icon={PlusIcon} {...args} />
        <IconButton size="medium" icon={PlusIcon} {...args} />
        <IconButton size="large" icon={PlusIcon} {...args} />
      </Stack>
      <Stack spacing={3} justify="center" align="center">
        <IconButton size="small" color="primary" icon={PlusIcon} {...args} />
        <IconButton size="medium" color="primary" icon={PlusIcon} {...args} />
        <IconButton size="large" color="primary" icon={PlusIcon} {...args} />
      </Stack>
      <Stack spacing={3} justify="center" align="center">
        <IconButton size="small" color="secondary" icon={PlusIcon} {...args} />
        <IconButton size="medium" color="secondary" icon={PlusIcon} {...args} />
        <IconButton size="large" color="secondary" icon={PlusIcon} {...args} />
      </Stack>
    </Stack>
  );
};

export const Rounded = (args: typeof IconButton) => {
  return (
    <Stack spacing={3} justify="center" align="center">
      <IconButton round color="primary" icon={PlusIcon} {...args} />
    </Stack>
  );
};

export const Disabled = (args: typeof IconButton) => {
  return (
    <Stack spacing={3} justify="center" align="center">
      <IconButton disabled color="inherit" icon={PlusIcon} {...args} />
      <IconButton disabled color="primary" icon={PlusIcon} {...args} />
      <IconButton disabled color="secondary" icon={PlusIcon} {...args} />
    </Stack>
  );
};