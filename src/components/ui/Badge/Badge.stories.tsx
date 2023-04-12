import { Meta } from '@storybook/react';
import { ChangeEvent, useState } from 'react';

import Badge, { BadgeOrigin, BadgeProps } from './Badge';
import Radio from '../Radio';
import Stack from '../Stack';
import SvgIcon from '../SvgIcon';
import Switch from '../Switch';
import Typography from '../Typography';

import { ReactComponent as MailIcon } from '../../../assets/icons/mail.svg';

export default {
  title: 'Components/UI/Badge',
  component: Badge,
  argTypes: {
    badgeContent: {
      control: 'text',
    },
    className: {
      control: 'text',
    },
    invisible: {
      control: 'boolean',
    },
    anchorOrigin: {
      control: {
        type: 'select',
        options: {
          'Top Right': { vertical: 'top', horizontal: 'right' },
          'Top Left': { vertical: 'top', horizontal: 'left' },
          'Bottom Right': { vertical: 'bottom', horizontal: 'right' },
          'Bottom Left': { vertical: 'bottom', horizontal: 'left' },
        } as {
          [key: string]: BadgeOrigin
        }
      }
    },
    variant: {
      control: {
        type: 'radio',
      },
      options: ['dot', 'standard'],
    }
  }
} as Meta<typeof Badge>;

export const Basic = (args: BadgeProps) => (
  <Stack justify="center" spacing={2} style={{ padding: '1rem' }}>
    <Badge badgeContent={5} {...args}>
      <SvgIcon color="muted" icon={MailIcon} />
    </Badge>
  </Stack>
);

export const Color = (args: BadgeProps) => (
  <Stack justify="center" spacing={4}>
    <Badge badgeContent={5} color="default" {...args}>
      <SvgIcon color="muted" icon={MailIcon} />
    </Badge>
    <Badge badgeContent={5} color="primary" {...args}>
      <SvgIcon color="muted" icon={MailIcon} />
    </Badge>
    <Badge badgeContent={5} color="secondary" {...args}>
      <SvgIcon color="muted" icon={MailIcon} />
    </Badge>
    <Badge badgeContent={5} color="info" {...args}>
      <SvgIcon color="muted" icon={MailIcon} />
    </Badge>
    <Badge badgeContent={5} color="success" {...args}>
      <SvgIcon color="muted" icon={MailIcon} />
    </Badge>
    <Badge badgeContent={5} color="warning" {...args}>
      <SvgIcon color="muted" icon={MailIcon} />
    </Badge>
    <Badge badgeContent={5} color="error" {...args}>
      <SvgIcon color="muted" icon={MailIcon} />
    </Badge>
  </Stack>
);

export const Visibility = (args: BadgeProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(args.invisible || true);

  return (
    <Stack direction="column" spacing={2}>
      <Stack direction="column" align="center" spacing={4}>
        <Switch
          checked={isVisible}
          onChange={(e) => setIsVisible(e.target.checked)}
          label="Show Badge"
          labelPlacement="end"
        />
        <Stack justify="center" spacing={4}>
          <Badge invisible={!isVisible} variant="dot" color="primary" {...args}>
            <SvgIcon color="muted" icon={MailIcon} />
          </Badge>
          <Badge badgeContent={5} invisible={!isVisible} color="primary" {...args}>
            <SvgIcon color="muted" icon={MailIcon} />
          </Badge>
        </Stack>
      </Stack>
    </Stack>
  );
};

export const Alignment = (args: BadgeProps) => {
  const [vertical, setVertical] = useState<BadgeOrigin['vertical']>(args.anchorOrigin?.vertical || 'top');
  const [horizontal, setHorizontal] = useState<BadgeOrigin['horizontal']>(args.anchorOrigin?.horizontal || 'right');

  const handleChangeVertical = (e: ChangeEvent<HTMLInputElement>) => {
    setVertical(e.target.value as typeof vertical);
  };

  const handleChangeHorizontal = (e: ChangeEvent<HTMLInputElement>) => {
    setHorizontal(e.target.value as typeof horizontal);
  };

  return (
    <Stack direction="column" spacing={3} align="center">
      <Stack spacing={4}>
        <Stack direction="column" spacing={2}>
          <Typography component="p">Vertical</Typography>
          <Radio
            label="Top"
            name="vertical-1"
            value="top"
            checked={vertical === 'top'}
            onChange={handleChangeVertical}
          />
          <Radio
            label="Bottom"
            name="vertical-1"
            value="bottom"
            checked={vertical === 'bottom'}
            onChange={handleChangeVertical}
          />
        </Stack>
        <Stack direction="column" spacing={2}>
          <Typography component="p">Horizontal</Typography>
          <Radio
            label="Right"
            name="horizontal"
            value="right"
            checked={horizontal === 'right'}
            onChange={handleChangeHorizontal}
          />
          <Radio
            label="Left"
            name="horizontal"
            value="left"
            checked={horizontal === 'left'}
            onChange={handleChangeHorizontal}
          />
        </Stack>
      </Stack>
      <Stack spacing={4}>
        <Badge
          variant="dot"
          color="primary"
          anchorOrigin={{
            vertical,
            horizontal
          }}
          {...args}
        >
          <SvgIcon color="muted" icon={MailIcon} />
        </Badge>
        <Badge
          color="primary"
          anchorOrigin={{
            vertical,
            horizontal
          }}
          badgeContent={5}
          {...args}
        >
          <SvgIcon color="muted" icon={MailIcon} />
        </Badge>
        <Badge
          color="primary"
          anchorOrigin={{
            vertical,
            horizontal
          }}
          badgeContent={999}
          {...args}
        >
          <SvgIcon color="muted" icon={MailIcon} />
        </Badge>
      </Stack>
    </Stack>
  );
};