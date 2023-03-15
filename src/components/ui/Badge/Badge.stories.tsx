import { Meta } from '@storybook/react';

import Badge from './Badge';
import Card from '../Card';

import { ReactComponent as DeleteButton } from '../../../assets/icons/delete.svg';
import Stack from '../Stack';
import Typography from '../Typography';
import Switch from '../Switch';
import { useState } from 'react';

export default {
  title: 'Components/UI/Badge',
  component: Badge,
} as Meta<typeof Badge>;

export const Basic = (args: typeof Badge) => (
  <Stack direction="column" spacing={2}>
    <Typography component="h1" variant="h4">Basic badge</Typography>
    <Card hasBorder style={{ padding: '2rem' }}>
      <Stack justify="center">
        <Badge badgeContent={5} color="default" {...args}>
          <DeleteButton width={24} height={24} />
        </Badge>
      </Stack>
    </Card>
  </Stack>
);

export const Color = (args: typeof Badge) => (
  <Stack direction="column" spacing={2}>
    <Typography component="h1" variant="h4">Color</Typography>
    <Card hasBorder style={{ padding: '2rem' }}>
      <Stack justify="around" spacing={4}>
        <Badge badgeContent={5} color="default" {...args}>
          <DeleteButton width={24} height={24} />
        </Badge>
        <Badge badgeContent={5} color="primary" {...args}>
          <DeleteButton width={24} height={24} />
        </Badge>
        <Badge badgeContent={5} color="secondary" {...args}>
          <DeleteButton width={24} height={24} />
        </Badge>
        <Badge badgeContent={5} color="info" {...args}>
          <DeleteButton width={24} height={24} />
        </Badge>
        <Badge badgeContent={5} color="success" {...args}>
          <DeleteButton width={24} height={24} />
        </Badge>
        <Badge badgeContent={5} color="warning" {...args}>
          <DeleteButton width={24} height={24} />
        </Badge>
        <Badge badgeContent={5} color="error" {...args}>
          <DeleteButton width={24} height={24} />
        </Badge>
      </Stack>
    </Card>
  </Stack>
);

export const Visibility = (args: typeof Badge) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <Stack direction="column" spacing={2}>
      <Typography component="h1" variant="h4">Badge visibility</Typography>
      <Card hasBorder style={{ padding: '2rem' }}>
        <Stack justify="center" spacing={4}>
          <Badge invisible={!isVisible} badgeContent={5} color="default" {...args}>
            <DeleteButton width={24} height={24} />
          </Badge>
          <Switch
            checked={isVisible}
            onChange={(e) => setIsVisible(e.target.checked)}
            label="Show Badge"
            labelPlacement="end"
          />
        </Stack>
      </Card>
    </Stack>
  )
};