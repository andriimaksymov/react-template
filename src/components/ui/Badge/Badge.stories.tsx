import { Meta } from '@storybook/react';
import { useState } from 'react';

import Badge from './Badge';
import Card from '../Card';
import Stack from '../Stack';
import Typography from '../Typography';
import Switch from '../Switch';

import { ReactComponent as MailIcon } from '../../../assets/icons/mail.svg';

export default {
  title: 'Components/UI/Badge',
  component: Badge,
  argTypes: {
    badgeContent: {
      control: 'text',
      defaultValue: '5'
    },
    className: {
      control: 'text',
      defaultValue: ''
    },
    invisible: {
      control: 'boolean',
    },
  }
} as Meta<typeof Badge>;

export const Basic = (args: typeof Badge) => (
  <Stack direction="column" spacing={2}>
    <Typography component="h1" variant="h4">Basic badge</Typography>
    <Card hasBorder style={{ padding: '2rem' }}>
      <Stack justify="center">
        <Badge {...args}>
          <MailIcon width={24} height={24} />
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
          <MailIcon width={24} height={24} />
        </Badge>
        <Badge badgeContent={5} color="primary" {...args}>
          <MailIcon width={24} height={24} />
        </Badge>
        <Badge badgeContent={5} color="secondary" {...args}>
          <MailIcon width={24} height={24} />
        </Badge>
        <Badge badgeContent={5} color="info" {...args}>
          <MailIcon width={24} height={24} />
        </Badge>
        <Badge badgeContent={5} color="success" {...args}>
          <MailIcon width={24} height={24} />
        </Badge>
        <Badge badgeContent={5} color="warning" {...args}>
          <MailIcon width={24} height={24} />
        </Badge>
        <Badge badgeContent={5} color="error" {...args}>
          <MailIcon width={24} height={24} />
        </Badge>
      </Stack>
    </Card>
  </Stack>
);

export const Visibility = (args: typeof Badge) => {
  const [isVisible, setIsVisible] = useState<boolean>(true);

  return (
    <Stack direction="column" spacing={2}>
      <Typography component="h1" variant="h4">Badge visibility</Typography>
      <Card hasBorder style={{ padding: '2rem' }}>
        <Stack direction="column" align="center" spacing={4}>
          <Switch
            checked={isVisible}
            onChange={(e) => setIsVisible(e.target.checked)}
            label="Show Badge"
            labelPlacement="end"
          />
          <Stack justify="center" spacing={4}>
            <Badge invisible={!isVisible} variant="dot" color="primary" {...args}>
              <MailIcon width={24} height={24} />
            </Badge>
            <Badge invisible={!isVisible} color="primary" {...args}>
              <MailIcon width={24} height={24} />
            </Badge>
          </Stack>
        </Stack>
      </Card>
    </Stack>
  );
};

export const Alignment = (args: typeof Badge) => {
  // const [vertical, setVertical] = useState<BadgeOrigin['vertical']>('top');
  // const [horizontal, setHorizontal] = useState<BadgeOrigin['horizontal']>('left');

  return (
    <Stack direction="column" spacing={2}>
      <Typography component="h1" variant="h4">Badge alignment</Typography>
      <Card hasBorder>
        <Stack direction="column" spacing={3} align="center">
          <Stack spacing={4}>
            <Stack direction="column" spacing={2}>
              <Typography component="p">Vertical</Typography>
            </Stack>
            <Stack direction="column" spacing={2}>
              <Typography component="p">Horizontal</Typography>
            </Stack>
          </Stack>
          <Stack spacing={4}>
            <Badge variant="dot" color="primary" {...args}>
              <MailIcon width={24} height={24} />
            </Badge>
            <Badge badgeContent={1} color="primary" {...args}>
              <MailIcon width={24} height={24} />
            </Badge>
          </Stack>
        </Stack>
      </Card>
    </Stack>
  );
};